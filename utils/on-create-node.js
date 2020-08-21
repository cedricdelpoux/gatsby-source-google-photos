const {createRemoteFileNode} = require("gatsby-source-filesystem")

const {addPhotoUrlParameters} = require("./add-photo-url-parameters")

exports.onCreateNode = async (
  {node, actions: {createNode}, store, cache, createNodeId, reporter},
  pluginOptions = {}
) => {
  if (node.internal.type === "GooglePhotosAlbum" && node.coverPhotoBaseUrl) {
    try {
      const fileNode = await createRemoteFileNode({
        url: addPhotoUrlParameters(node.coverPhotoBaseUrl, pluginOptions),
        parentNodeId: node.id,
        createNode,
        createNodeId,
        cache,
        store,
        name: "google-photos-photo-" + node.id,
        ext: ".jpg",
        reporter,
      })

      node.cover___NODE = fileNode.id
    } catch (e) {
      reporter.warn(`source-google-photos: ${e}`)
    }
  }

  if (node.internal.type === "GooglePhotosPhoto" && node.baseUrl) {
    try {
      const fileNode = await createRemoteFileNode({
        url: addPhotoUrlParameters(node.baseUrl, pluginOptions),
        parentNodeId: node.id,
        createNode,
        createNodeId,
        cache,
        store,
        name: "google-photos-photo-" + node.id,
        ext: ".jpg",
        reporter,
      })

      node.photo___NODE = fileNode.id
    } catch (e) {
      reporter.warn(`source-google-photos: ${e}`)
    }
  }
}
