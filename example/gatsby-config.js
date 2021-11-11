require("dotenv").config()

module.exports = {
  plugins: [
    {
      //resolve: "gatsby-source-google-photos"
      resolve: require.resolve(`..`),
      options: {
        albumsTitles: [process.env.GOOGLE_PHOTOS_ALBUM],
        photosMaxWidth: 1024,
        photosMaxHeight: 1024,
        photosCrop: true,
        debug: true,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
  ],
}
