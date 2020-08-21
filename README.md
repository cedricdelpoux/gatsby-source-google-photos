# gatsby-source-google-photos

[![npm package][npm-badge]][npm]

`gatsby-source-google-photos` is a [Gatsby](https://www.gatsbyjs.org/) plugin to use [Google Photos](https://photos.google.com/) as a data source.

Why use [Google Photos](https://photos.google.com/) to store your photos:

-   💸 Free
-   🔒 Secured
-   🛢 Unlimited space
-   🖥 Desktop web app
-   📱 Mobile app
-   🖍 In-app photos edition
-   💾 Automatic backup from your phone
-   🌈 `gatsby-image` compatible

## Usage

1. Download `gatsby-source-google-photos` from the NPM registry:

```shell
yarn add gatsby-source-google-photos gatsby-transformer-sharp gatsby-plugin-sharp
```

2. Open a terminal at the root of your project and [Generate a token](./docs/token.md)

```shell
gatsby-source-google-photos-token
```

3. [Add the plugin](./docs/options.md) in your `gatsby-config.js` file

```js
module.exports = {
    plugins: [
        {
          resolve: "gatsby-source-google-photos",
          options: {
            albumsTitles: ["TITLE_A", "TITLE_B"],
          },
        },
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        }
    ],
}
```

4. [Query your photos](./docs/queries.md)

## Showcase

You are using `gatsby-source-google-photos` for your website?
Thank you!

Please add your website to the [Showcase](./showcase.yml)

## Documentation

-   [Token](./docs/token.md)
-   [Options](./docs/options.md)
-   [Create pages](./docs/pages.md)
-   [FAQ](./docs/faq.md)

## Contributing

-   ⇄ Pull/Merge requests and ★ Stars are always welcome.
-   For bugs and feature requests, please [create an issue][github-issue].

## Changelog

See [CHANGELOG](./CHANGELOG.md)

## License

This project is licensed under the MIT License - see the
[LICENCE](./LICENCE.md) file for details

[npm-badge]: https://img.shields.io/npm/v/gatsby-source-google-photos.svg?style=flat-square
[npm]: https://www.npmjs.org/package/gatsby-source-google-photos
[github-issue]: https://github.com/cedricdelpoux/gatsby-source-google-photos/issues/new
