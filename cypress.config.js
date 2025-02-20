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
      reportDir: 'mochawesome-report',  // Carpeta donde se guardan los reportes
      overwrite: true,
      html: true,
      json: true
    },

    experimentalSessionAndOrigin: true,

    chromeWebSecurity: false // Deshabilita la seguridad web en Chrome
  },

  // Configuración de grabación de video
  video: true, // Asegura que la grabación de video esté habilitada
  videosFolder: "cypress/videos" // Ruta donde se guardan los videos
});


