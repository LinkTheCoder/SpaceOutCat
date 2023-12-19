import { defineConfig } from "cypress";
require('dotenv').config()

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      CYPRESS_GOOGLE_CLIENTID: process.env.NEXT_PUBLIC_GOOGLE_CLIENTID,
      CYPRESS_GOOGLE_CLIENT_SECRET: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
      CYPRESS_GOOGLE_REFRESH_TOKEN: process.env.NEXT_PUBLIC_GOOGLE_REFRESH_TOKEN
    }
  }
});
