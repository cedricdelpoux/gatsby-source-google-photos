const isSizeValid = (number) =>
  number && Number.isInteger(number) && number > 0 && number < 16384

const addPhotoUrlParameters = (url, pluginOptions) => {
  if (!pluginOptions.photosOptions) {
    return url
  }

  const {photosMaxWidth, photosMaxHeight, photosCrop} = pluginOptions
  const maxWidth = isSizeValid(photosMaxWidth) && `w${photosMaxWidth}`
  const maxHeight = isSizeValid(photosMaxHeight) && `h${photosMaxHeight}`
  const crop = photosCrop && photosCrop === true && "c"
  const optionsArray = [maxWidth, maxHeight, crop].filter((option) => option)
  return `${url}${optionsArray.lentgh > 0 ? "=" + optionsArray.join("-") : ""}`
}

module.exports = {
  addPhotoUrlParameters,
}
