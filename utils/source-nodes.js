const GooglePhotos = require("googlephotos")

const {PAGE_SIZE_ALBUMS, PAGE_SIZE_PHOTOS} = require("./constants")
const {googleAuth} = require("./google-auth")

exports.sourceNodes = async (
  {actions: {createNode}, createContentDigest, reporter},
  pluginOptions
) => {
  try {
    const auth = googleAuth.getAuth()
    const {token} = await auth.getAccessToken()
    const googlePhotos = new GooglePhotos(token)
    const albums = []

    let nextPageToken
    let page = 1

    const filterTitle = (album) =>
      pluginOptions.albumsTitles.includes(album.title)
    const filterRegex = (album) => pluginOptions.albumsRegex.test(album.title)
    const filterNothing = (album) => album
    const filter = pluginOptions.albumsTitles
      ? filterTitle
      : pluginOptions.albumsRegex
      ? filterRegex
      : filterNothing

    const needToFetchMore = (albumsCount) =>
      pluginOptions.albumsTitles
        ? albumsCount < pluginOptions.albumsTitles.length
        : true

    const timerAlbumsFetching = reporter.activityTimer(
      `source-google-photos: Fetching albums`
    )

    if (pluginOptions.debug) {
      timerAlbumsFetching.start()
    }

    do {
      const result = await googlePhotos.albums.list(
        PAGE_SIZE_ALBUMS,
        nextPageToken
      )

      const filteredAlbums = result.albums.filter(filter)

      if (filteredAlbums.length > 0) {
        albums.push(...filteredAlbums)
      }

      if (pluginOptions.debug) {
        timerAlbumsFetching.setStatus(
          `${albums.length} albums found in ${page * PAGE_SIZE_ALBUMS}`
        )
      }

      page++

      nextPageToken = result.nextPageToken
    } while (nextPageToken && needToFetchMore(albums.length))

    if (pluginOptions.debug) {
      timerAlbumsFetching.end()
    }

    for (const album of albums) {
      const timerAlbumPhotosFetching = reporter.activityTimer(
        `source-google-photos: Fetching ${album.title} album photos`
      )
      const photos = []
      let nextPageToken

      if (pluginOptions.debug) {
        timerAlbumPhotosFetching.start()
      }

      do {
        const result = await googlePhotos.mediaItems.search(
          album.id,
          PAGE_SIZE_PHOTOS,
          nextPageToken
        )

        photos.push(
          ...result.mediaItems.filter(
            (mediaItem) => mediaItem.mediaMetadata.photo
          )
        )

        if (pluginOptions.debug) {
          timerAlbumPhotosFetching.setStatus(`${photos.length} photos`)
        }

        nextPageToken = result.nextPageToken
      } while (nextPageToken)

      if (pluginOptions.debug) {
        timerAlbumPhotosFetching.end()
      }

      createNode({
        ...album,
        ...(pluginOptions.albumsUpdate && pluginOptions.albumsUpdate(album)),
        photos___NODE: photos.map((photo) => photo.id),
        internal: {
          type: "GooglePhotosAlbum",
          contentDigest: createContentDigest(album),
        },
      })

      photos.forEach((photo) => {
        createNode({
          ...photo,
          album___NODE: album.id,
          internal: {
            type: "GooglePhotosPhoto",
            contentDigest: createContentDigest(photo),
          },
        })
      })
    }

    return
  } catch (e) {
    if (pluginOptions.debug) {
      reporter.panic(`source-google-photos: `, e)
    } else {
      reporter.panic(`source-google-photos: ${e.message}`)
    }
  }
}
