const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: '064dad81-0d9e-4cff-9dab-93e98841d2b0', // Tu projectId del Dashboard
  e2e: {
    setupNodeEvents(on, config) {
      // Aquí puedes agregar eventos o plugins
      console.log('Configuración cargada para Cypress');
    },
    baseUrl: 'https://www.comfrt.com', // Cambia a la URL base de tu sitio
  },
});

