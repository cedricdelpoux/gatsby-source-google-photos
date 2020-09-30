#! /usr/bin/env node
/* eslint-disable no-console */

const GoogleOAuth2 = require("google-oauth2-env-vars")

async function generateToken() {
  const googleOAuth2 = new GoogleOAuth2({
    scope: ["https://www.googleapis.com/auth/photoslibrary.readonly"],
    token: "GOOGLE_PHOTOS_TOKEN",
    apis: ["photoslibrary.googleapis.com"],
  })

  await googleOAuth2.generateEnvVars()

  console.log("")
  console.log("Enjoy `gatsby-source-google-photos` plugin")

  process.exit()
}

generateToken()
