# Options

```js
module.exports = {
    plugins: [
        {
            resolve: "gatsby-source-google-photos",
            options: {
                albumsTitles: ["TITLE_A", "TITLE_B"],
                //---
                // All the following options are OPTIONAL
                //---
                //
                // Slower but easier to use.
                // It will make `albumsTitles` options useless
                // You need to rename your `GooglePhotos albums first
                albumsRegex: /^mygatsbysite.com/,
                //
                // Useful to add some metadata
                // eg: Rename your `GooglePhotos` albums: "mygatsbysite.com/travel/country"
                albumsUpdate: (album) => {
                    const [, category, country] = album.title.split("/")
                    return {
                        ...album,
                        category,
                        country,
                    }
                },
                //
                // Download smaller or bigger photos
                photosMaxWidth: 512,
                photosMaxHeight: 512,
                photosCrop: true,
                //
                // For a better stack trace and more information
                // Useful when you open a issue to report a bug
                debug: true,
            },
        },
    ],
}
```
