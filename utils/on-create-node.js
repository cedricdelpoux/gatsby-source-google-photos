const {createRemoteFileNode} = require("gatsby-source-filesystem")

const {addPhotoUrlParameters} = require("./add-photo-url-parameters")
const {NODE_TYPE_PHOTO, REGEX_MIME_EXT, DEFAULT_EXT} = require("./constants")

exports.onCreateNode = async (
  {
    node,
    actions: {createNode, createNodeField},
    store,
    cache,
    createNodeId,
    reporter,
  },
  pluginOptions = {}
) => {
  if (node.internal.type === NODE_TYPE_PHOTO && node.baseUrl) {
    try {
      const match = node.mimeType.match(REGEX_MIME_EXT)
      const ext = match && match[1] ? `.${match[1]}` : `.${DEFAULT_EXT}`
      const fileNode = await createRemoteFileNode({
        url: addPhotoUrlParameters(node.baseUrl, pluginOptions),
        parentNodeId: node.id,
        name: "google-photos-photo-" + node.id,
        ext,
        createNode,
        createNodeId,
        cache,
        store,
        reporter,
      })

      createNodeField({node, name: "localFile", value: fileNode.id})
    } catch (e) {
      reporter.warn(`source-google-photos: ${e}`)
    }
  }
}
