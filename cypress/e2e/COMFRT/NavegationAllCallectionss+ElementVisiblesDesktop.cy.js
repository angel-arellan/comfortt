// Script para dispositivos Android, iOS y Desktop
describe('Prueba de scroll en vista móvil y desktop - Comfrt', () => {
    const viewports = [
      // Desktop - macOS y Windows
      { device: 'MacBook Pro 16"', width: 1536, height: 960 },
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
  
        // Verifica que el enlace de 'ALL SHOP' sea visible y hace clic en él
        it('Debería hacer clic en el enlace de All Shop en el header', () => {
          cy.get('.vBg37Hhp > [href="/collections/all-products"]')
            .should('be.visible')
            .click();
          cy.url().should('include', '/collections/all-products');

          //Verificar que todos los elementos sean visibles
     cy.get('#collections_with_pagination-default-collections-with-pagination_0 > div.zZYXATlU > div')
     .should('be.visible')
     cy.wait(2000);

    // Desplázate y espera
    cy.scrollTo('bottom');
    cy.wait(2000);
    cy.scrollTo('top');
        });
  
        // Verifica que el enlace de 'Hoodies' sea visible y hace clic en él
        it('Debería hacer clic en el enlace de Hoodies en el header', () => {
          cy.get('.vBg37Hhp > [href="/collections/hoodies"]')
            .should('be.visible')
            .click();
          cy.url().should('include', '/collections/hoodies');

            //Verificar que todos los elementos sean visibles
     cy.get('#collections_with_pagination-default-collections-with-pagination_0')
     .should('be.visible')
     cy.wait(2000);

    // Desplázate y espera
    cy.scrollTo('bottom');
    cy.wait(2000);
    cy.scrollTo('top');
      
        });
  
        // Verifica que el enlace de 'Sweatpants' sea visible y hace clic en él
        it('Debería hacer clic en el enlace de Sweatpants en el header', () => {
          cy.get('.vBg37Hhp > [href="/collections/sweatpants"]')
            .should('be.visible')
            .click();
          cy.url().should('include', '/collections/sweatpants');

  //Verificar que todos los elementos sean visibles
  cy.get('#collections_with_pagination-default-collections-with-pagination_0')
  .should('be.visible')
  cy.wait(2000);

 // Desplázate y espera
 cy.scrollTo('bottom');
 cy.wait(2000);
 cy.scrollTo('top');

          
        });
  
        // Verifica que el enlace de 'Kids' sea visible y hace clic en él
        it('Debería hacer clic en el enlace de Kids en el header', () => {
          cy.get('.vBg37Hhp > [href="/content/kids"]')
            .should('be.visible')
            .click();
          cy.url().should('include', '/content/kids');

          //Verificar que todos los elementos sean visibles
  cy.get('#home_hero-kids-hero-test-draft_0 > div > img')
  .should('be.visible')
  cy.wait(2000);

  cy.get('#featured_products_section-shop-kids-section-draft_2 > div > div.zZYXATlU > div')
  .should('be.visible')
  cy.wait(2000);

  cy.get('#featured_products_section-shop-kids-sweatpants_3 > div > div.zZYXATlU > div')
  .should('be.visible') 
  cy.wait(2000);

  cy.get('#image_centered_text-kids-sub-section-draft_4 > section > img')
  .should('be.visible') 
  cy.wait(2000);

  cy.get('#home_featured_section-kids-featured-draft_6 > section > div:nth-child(1) > div.dlYCmTsm > img')
  .should('be.visible')
  cy.wait(2000);

  cy.get('#home_featured_section-kids-featured-draft_6 > section > div:nth-child(2) > div.dlYCmTsm > img')
  .should('be.visible')
  cy.wait(2000);

 // Desplázate y espera
 cy.scrollTo('bottom');
 cy.wait(2000);
 cy.scrollTo('top');
        });
  
        // Verifica que el enlace de 'Loungewear' sea visible y hace clic en él
        it('Debería hacer clic en el enlace de Loungewear en el header', () => {
          cy.get('.vBg37Hhp > [href="/collections/loungewear"]')
            .should('be.visible')
            .click();
          cy.url().should('include', '/collections/loungewear');

          //Verificar que todos los elementos sean visibles
          cy.get('#collections_with_pagination-default-collections-with-pagination_0')
  .should('be.visible')
  cy.wait(2000);

 // Desplázate y espera
 cy.scrollTo('bottom');
 cy.wait(2000);
 cy.scrollTo('top');
        });
  
        // Verifica que el enlace de 'Blankets' sea visible y hace clic en él
        it('Debería hacer clic en el enlace de Blankets en el header', () => {
          cy.get('.vBg37Hhp > [href="/content/blankets"]')
            .should('be.visible')
            .click();
          cy.url().should('include', '/content/blankets');

          //Verificar que todos los elementos sean visibles
          cy.get('#home_hero-weighted-blanket-landing-page-hero_0 > div > img')
  .should('be.visible')
  cy.wait(2000);

 cy.get('#featured_products_section-shop-blankets_2 > div > div.zZYXATlU > div')
 .should('be.visible')
 cy.wait(2000);

  
  cy.get('#image_centered_text-banner-blankets-draft_3 > section > img')
  .should('be.visible')
  cy.wait(2000);


cy.get('#home_featured_section-blankets-featured-section-draft_5 > section > div:nth-child(1) > div.dlYCmTsm > img')
.should('be.visible')
cy.wait(2000);

cy.get('#home_featured_section-blankets-featured-section-draft_5 > section > div:nth-child(2) > div.dlYCmTsm > img')
.should('be.visible')
cy.wait(2000);

 // Desplázate y espera
 cy.scrollTo('bottom');
 cy.wait(2000);
 cy.scrollTo('top');
        });
  
        // Verifica que el enlace de 'Accessories' sea visible y hace clic en él
        it('Debería hacer clic en el enlace de Accessories en el header', () => {
          cy.get('.vBg37Hhp > [href="/collections/accessories"]')
            .should('be.visible')
            .click();
          cy.url().should('include', '/collections/accessories');

//Verificar que todos los elementos sean visibles
cy.get('#collections_with_pagination-default-collections-with-pagination_0 > div > div')
.should('be.visible')
cy.wait(2000);

 // Desplázate y espera
 cy.scrollTo('bottom');
 cy.wait(2000);
 cy.scrollTo('top');
          
        });
  
        // Verifica que el enlace de 'Pets' sea visible y hace clic en él
        it('Debería hacer clic en el enlace de Pets en el header', () => {
          cy.get('.vBg37Hhp > [href="/content/pets"]')
            .should('be.visible')
            .click();
          cy.url().should('include', '/content/pets');

          //Verificar que todos los elementos sean visibles
cy.get('#home_hero-pets-hero-draft_0 > div > img')
.should('be.visible')
cy.wait(2000);

cy.get('#featured_products_section-shop-pets-draft_2 > div')
.should('be.visible')
cy.wait(2000);

cy.get('#image_centered_text-pets-banner-draft_3 > section > img')
.should('be.visible')
cy.wait(2000);

cy.get('#home_featured_section-pets-featured-section-draft_5 > section > div:nth-child(1) > div.dlYCmTsm > img')
.should('be.visible')
cy.wait(2000);

cy.get('#home_featured_section-pets-featured-section-draft_5 > section > div:nth-child(2) > div.dlYCmTsm > img')
.should('be.visible')
cy.wait(2000);

 // Desplázate y espera
 cy.scrollTo('bottom');
 cy.wait(2000);
 cy.scrollTo('top');

 cy.wait(2000)

        });
  
        /*// Verifica que el enlace de 'Ambassador Program' sea visible y hace clic en él
        it('Debería hacer clic en el enlace de Ambassador Program en el header', () => {
            cy.get('[href="/pages/ambassador"]').should('be.visible').click();
          cy.url().should('include', '/pages/ambassador');
        });*/

      


      });
    });
  });
  

 