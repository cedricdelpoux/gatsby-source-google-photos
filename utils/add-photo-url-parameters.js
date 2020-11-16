const numberMax = 16384
const isSizeValid = (number) =>
  number && Number.isInteger(number) && number > 0 && number < numberMax

const addPhotoUrlParameters = (url, pluginOptions) => {
  const {photosMaxWidth, photosMaxHeight, photosCrop} = pluginOptions
  const maxWidth = isSizeValid(photosMaxWidth) && `w${photosMaxWidth}`
  const maxHeight = isSizeValid(photosMaxHeight) && `h${photosMaxHeight}`
  const crop = photosCrop && photosCrop === true && "c"
  const optionsArray = [maxWidth, maxHeight, crop].filter((option) => option)
  return `${url}${optionsArray.length > 0 ? "=" + optionsArray.join("-") : ""}`
}

module.exports = {
  addPhotoUrlParameters,
}
