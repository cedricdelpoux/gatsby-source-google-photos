const yamljs = require("yamljs")

exports.transformPhoto = (photo) => {
  // Handle empty description
  if (photo.description) {
    photo.description = photo.description.trim()
  } else {
    photo.description = ""
  }

  // Handle YAML description
  if (photo.description) {
    console.log("description", photo.description)
    try {
      // Try to convert description from YAML
      const descriptionObject = yamljs.parse(photo.description)
      if (typeof descriptionObject !== "string") {
        console.log("descriptionObject", descriptionObject)
        Object.assign(photo, descriptionObject)
      }
    } catch (e) {
      // Description field is not valid YAML
      // Do not throw an error
    }
  }

  return photo
}
