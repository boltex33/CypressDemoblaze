const { defineConfig } = require('cypress')

module.exports = defineConfig({
  baseURL: 'https://www.demoblaze.com/',
  e2e: {
    setupNodeEvents(on, config) {},
  },
})
