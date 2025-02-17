const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'yaesxf', // Reemplaza con tu Project ID del Dashboard
  e2e: {
    setupNodeEvents(on, config) {
      // Implementa eventos aquí si es necesario
    },
    baseUrl: 'https://www.comfrt.com', // URL base de tu proyecto
    supportFile: 'cypress/support/e2e.js', // Ruta al archivo de soporte
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}', // Ruta de los archivos de prueba

    reporter: "mochawesome",  // Reporter de mochawesome
    reporterOptions: {
      reportDir: 'cypress/mochawesome-report',  // Carpeta donde se guardan los reportes
      overwrite: false,
      html: true,
      json: true
    }
  }
});


