module.exports = defineConfig({
  video: true, // Habilita la grabación de video
  videosFolder: 'cypress/videos', // Carpeta donde se guardan los videos
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'mochawesome-report',
      overwrite: false,
      html: true,
      json: true,
      embeddedScreenshots: true, // Incrusta capturas en el HTML
      video: true, // Agrega enlaces a los videos en el reporte
    },
  },
});





// const { defineConfig } = require('cypress');

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // Implementa eventos aquí si es necesario
//     },
//     reporter: "mochawesome",
//     reporterOptions: {
//       reportDir: "mochawesome-report",
//       overwrite: false,
//       html: true,
//       json: true
//     }

//     ,

//    // experimentalSessionAndOrigin: true,
//     chromeWebSecurity: false,
//   },

//   video: true,
//   videosFolder: 'cypress/videos',
//   }

  
// );
