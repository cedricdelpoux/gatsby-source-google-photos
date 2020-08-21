const {resolve} = require("path")

exports.createPages = async ({graphql, actions: {createPage}, reporter}) => {
  const result = await graphql(
    `
      {
        allGooglePhotosAlbum {
          nodes {
            id
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panic(result.errors)
  }

  const {allGooglePhotosAlbum} = result.data

  if (allGooglePhotosAlbum) {
    allGooglePhotosAlbum.nodes.forEach((node) => {
      createPage({
        path: `/album/${node.id}`,
        component: resolve("src/templates/album.js"),
        context: {
          id: node.id,
        },
      })
    })
  }
}
