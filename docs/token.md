# Token

The package needs 3 `.env` variables with the following format to work:

```dotenv
GOOGLE_OAUTH_CLIENT_ID=2...m.apps.googleusercontent.com
GOOGLE_OAUTH_CLIENT_SECRET=Q...axL
GOOGLE_PHOTOS_TOKEN={"access_token":"ya...J0","refresh_token":"1..mE","scope":"https://www.googleapis.com/auth/photoslibrary.readonly","token_type":"Bearer","expiry_date":1598284554759}
```

`gatsby-source-google-photos` provides a command-line script to generate this `.env` vars.

> You must be in the root folder of your project to run the script

```shell
gatsby-source-google-photos-token
```

> If you have multiple `.env` files for your different environments, the script will write the token at the end of each file

You should add your `.env` files to your `.gitignore` because it contains some sensitive informations.

# Troubleshooting

## `'gatsby-source-google-photos-token' is not recognized as an internal or external command,`

Add an `npm` script to your `package.json`:

```
"scripts": {
    "token": "gatsby-source-google-photos-token"
}
```

Then generate a token:

```
yarn token
# or
npm run token
```
