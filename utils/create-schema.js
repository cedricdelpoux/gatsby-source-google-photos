exports.createSchemaCustomization = ({actions}) => {
  const {createTypes} = actions
  createTypes(`
    type GooglePhotosPhoto implements Node {
      file: File @link(from: "fields.localFile")
    }
  `)
}
