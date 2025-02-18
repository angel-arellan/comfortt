// Script para dispositivos Android, iOS, y Desktop
describe('Prueba de scroll en vista móvil y desktop - Comfrt', () => {
    const viewports = [
      // Android más recientes
      //{ device: 'Samsung Galaxy S23 Ultra', width: 412, height: 919 },
      /*{ device: 'Google Pixel 8 Pro', width: 412, height: 892 },*/
      // iOS más recientes
    //  { device: 'iPhone 15 Pro', width: 390, height: 844 },
      { device: 'iPhone 15 Pro Max', width: 430, height: 932 },
      // Desktop - macOS y Windows
      { device: 'MacBook Pro 16"', width: 1536, height: 960 },
     // { device: 'Windows 4K Monitor', width: 3840, height: 2160 },
     // { device: 'Windows Full HD Monitor', width: 1920, height: 1080 },
    ];
  
    viewports.forEach(({ device, width, height }) => {
      describe(`Pruebas en ${device}`, () => {
        beforeEach(() => {
          // Configurar el viewport al tamaño del dispositivo
          cy.viewport(width, height);
          // Visitar la página
          cy.visit('https://www.comfrt.com');
        });
  
        it('Debería mostrarse el header', () => {
          cy.get('.IXjqotrK').should('be.visible');
        });
  
        it('Debería mostrarse el banner principal', () => {
          cy.get('.WcmUoMRO').should('be.visible');
        });
  
        it('Deberían mostrarse las imágenes de los productos "Shop Best Seller"', () => {
          cy.get('.NYNuDbQO').each(($img) => {
            cy.wrap($img).should('be.visible');
          });
        });
  
        it('Deberían mostrarse las dos imágenes debajo de "Shop Best Seller"', () => {
          cy.get('.VOXO2Pq8').each(($img) => {
            cy.wrap($img).should('be.visible');
          });
        });
  
        it('Debería mostrarse la imagen de "Partnered Charities"', () => {
          cy.get('.HZLaZ_QX').should('be.visible');
        });
  
        it('Deberían mostrarse las 4 imágenes de las secciones (Hoodie, Sweetpants, Loungewear y Accessories)', () => {
          cy.get('.OhiQ0ybu').each(($img) => {
            cy.wrap($img).should('be.visible');
          });
        });
  
        it('Debería mostrarse el texto de la sección Comfrt Community', () => {
          cy.contains('Comfrt Community').should('be.visible');
        });
  
        it('Debería mostrarse el texto debajo del título de la sección Comfrt Community', () => {
          cy.contains('Join millions that love comfy clothes').should('be.visible');
        });
  
        it('Deberían mostrarse las 4 imágenes de "Comfrt Community"', () => {
          cy.get('.k5PkXOzu').should('be.visible');
        });
  
        it('Debería mostrarse la imagen de "View Our Hoodies"', () => {
          cy.get('.IPzctVm4').should('be.visible');
        });
  
        it('Debería mostrarse el texto de la sección View Our Hoodies', () => {
          cy.contains('It\'s always Comfrt season').should('be.visible');
          cy.contains('View Our Hoodies').should('be.visible');
        });
  
        it('Debería mostrarse el footer', () => {
          cy.get('.KzcSxBo0').should('be.visible');
        });
      });
    });
  });
  
  