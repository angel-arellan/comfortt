const { defineConfig } = require('cypress');
const mochawesomeMerge = require('mochawesome-merge');
const mochawesomeReportGenerator = require('mochawesome-report-generator');

module.exports = defineConfig({
  projectId: 'yaesxf',
  e2e: {
    setupNodeEvents(on, config) {
      // Registra el plugin de Mochawesome
      require('cypress-mochawesome-reporter/plugin')(on);

      // Fusión de los resultados JSON después de ejecutar las pruebas
      on('after:run', (results) => {
        const mergedJson = mochawesomeMerge(results.runs);
        mochawesomeReportGenerator.create(mergedJson, {
          reportDir: 'mochawesome-report', // Carpeta de salida
          reportFilename: 'mochawesome-report.html', // Nombre del archivo HTML
          overwrite: false, // No sobrescribir los archivos existentes
          html: true, // Asegurarse de que se genere el archivo HTML
          json: true, // Asegurarse de que se genere el archivo JSON
        });
      });
    },
    baseUrl: 'https://www.comfrt.com',
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'mochawesome-report', // Carpeta de salida de los reportes
      overwrite: false, // No sobrescribir archivos
      html: true, // Habilitar la generación del archivo HTML
      json: true, // Habilitar la generación del archivo JSON
    },

    experimentalSessionAndOrigin: true,
    chromeWebSecurity: false,
  },

  video: true,
  videosFolder: 'cypress/videos',
});
