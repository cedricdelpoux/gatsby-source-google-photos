exports.computeDatesRange = (photos) => {
  if (!photos || photos.length === 0) {
    return {
      latestDate: null,
      oldestDate: null,
    }
  }

  const firstPhoto = photos[0]
  const [latest, oldest] = photos.reduce(
    ([latestCreationTime, oldestCreationTime], photo) => {
      const creationTime = photo.mediaMetadata.creationTime
      return [
        creationTime > latestCreationTime ? creationTime : latestCreationTime,
        creationTime < oldestCreationTime ? creationTime : oldestCreationTime,
      ]
    },
    [
      firstPhoto.mediaMetadata.creationTime,
      firstPhoto.mediaMetadata.creationTime,
    ]
  )

  return {
    latestDate: latest,
    oldestDate: oldest,
  }
}
