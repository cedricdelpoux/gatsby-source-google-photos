require("dotenv").config()

module.exports = {
  plugins: [
    {
      //resolve: "gatsby-source-google-photos"
      resolve: require.resolve(`..`),
      options: {
        albumsTitles: [
          process.env.GOOGLE_PHOTOS_ALBUM_1,
          process.env.GOOGLE_PHOTOS_ALBUM_2,
        ],
        photosMaxWidth: 512,
        photosMaxHeight: 512,
        photosCrop: true,
        debug: true,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
}
