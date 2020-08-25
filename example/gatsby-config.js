module.exports = {
  plugins: [
    {
      //resolve: "gatsby-source-google-photos"
      resolve: require.resolve(`..`),
      options: {
        albumsTitles: [
          "cedricdelpoux.fr/travel/jordan",
          "cedricdelpoux.fr/travel/iceland",
        ],
        // albumsRegex: /^cedricdelpoux.fr/,
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
