<div align="center">
  <h1>gatsby-source-google-photos</h1>
  <br/>
  <p>
    <img src="./logo.png" alt="gatsby-source-google-photos" height="100px">
  </p>
  <br/>

[![Npm version][badge-npm]][npm]
[![Npm downloads][badge-npm-dl]][npm]
[![MIT license][badge-licence]](./LICENCE.md)
[![PRs welcome][badge-prs-welcome]](#contributing)

</div>

---

`gatsby-source-google-photos` is a [Gatsby](https://www.gatsbyjs.org/) plugin to use [Google Photos](https://photos.google.com/) as a data source.

Why use [Google Photos](https://photos.google.com/) to store your photos:

-   💸 Free
-   🔒 Secured
-   🛢 Unlimited space
-   🖥 Desktop web app
-   📱 Mobile app
-   🖍 In-app photos edition
-   💾 Automatic backup from your phone
-   🌈 `gatsby-plugin-image` compatible

## Usage

1. Download `gatsby-source-google-photos` from the NPM registry:

```shell
yarn add gatsby-source-google-photos gatsby-transformer-sharp gatsby-plugin-sharp
```

2. [Generate a token](./docs/token.md)

The package needs 3 `.env` variables with the following format to work:

```dotenv
GOOGLE_OAUTH_CLIENT_ID=2...m.apps.googleusercontent.com
GOOGLE_OAUTH_CLIENT_SECRET=Q...axL
YOUTUBE_TOKEN={"access_token":"ya...J0","refresh_token":"1..mE","scope":"https://www.googleapis.com/auth/photoslibrary.readonly","token_type":"Bearer","expiry_date":1598284554759}
```

`gatsby-source-google-photos` expose a script to make the generation easier.
Open a terminal at the root of your project and type:

```shell
npx gatsby-source-google-photos-token
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
        // Recommanded to use with gatsby-plugin-image
        "gatsby-transformer-sharp",
        "gatsby-plugin-sharp",
        "gatsby-plugin-image",
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
-   [Queries](./docs/queries.md)

## Contributing

-   ⇄ Pull/Merge requests and ★ Stars are always welcome.
-   For bugs and feature requests, please [create an issue][github-issue].

## Changelog

See [CHANGELOG](./CHANGELOG.md)

## License

This project is licensed under the MIT License - see the
[LICENCE](./LICENCE.md) file for details

[badge-npm]: https://img.shields.io/npm/v/gatsby-source-google-photos.svg?style=flat-square
[badge-npm-dl]: https://img.shields.io/npm/dt/gatsby-source-google-photos.svg?style=flat-square
[badge-licence]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square
[badge-prs-welcome]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[npm]: https://www.npmjs.org/package/gatsby-source-google-photos
[github-issue]: https://github.com/cedricdelpoux/gatsby-source-google-photos/issues/new
