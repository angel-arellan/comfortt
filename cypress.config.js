const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementa eventos aquí si es necesario
    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "mochawesome-report",
      overwrite: false,
      html: true,
      json: true
    }

    ,

   // experimentalSessionAndOrigin: true,
    chromeWebSecurity: false,
  },

  video: true,
  videosFolder: 'cypress/videos',
  }

  
);
