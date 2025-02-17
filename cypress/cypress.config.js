const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Implementa eventos aquí si es necesario
    },
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/mochawesome-report",
      overwrite: false,
      html: true,
      json: true
    }
  }
});


