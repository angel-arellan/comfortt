/*describe('Interacción con el Menú Hamburguesa en iPhone 15 Pro Max', () => {
  it('Debería abrir el menú hamburguesa, seleccionar varias categorías y luego cerrarlo', () => {
    // Configura la emulación para iPhone 15 Pro Max
    cy.viewport(430, 932); // Ancho y alto en píxeles
    cy.visit('https://www.comfrt.com');

    // Espera a que el ícono del menú hamburguesa sea visible y haz clic en él
    cy.get('#default_header-default-header_0 > header > label.hamburger > svg', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });*/

    describe ('Interacción con el Menú Hamburguesa en dispositivos móviles', () => {
        const devices = [
          { name: 'iPhone 15 Pro Max', width: 430, height: 932 },
          //{ name: 'Samsung Galaxy S24', width: 412, height: 915 }
        ];
      
        devices.forEach((device) => {
          it(`Debería abrir el menú hamburguesa y navegar en ${device.name}`, () => {
            // Configura la emulación para el dispositivo actual
            cy.viewport(device.width, device.height);
            cy.visit('https://www.comfrt.com');


            // Espera a que el ícono del menú hamburguesa sea visible y haz clic en él
    cy.get('#default_header-default-header_0 > header > label.hamburger > svg', { timeout: 10000 })
    .should('be.visible')
    .click({ force: true });



    // Haz clic en la categoría "Shop All"
    cy.get('[href="https://comfrt.com/collections/all-products"]', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });

    // Verifica que la página de "Shop All" se haya cargado correctamente
    cy.url().should('include', '/collections/all-products');

    //Verificar que todos los elementos sean visibles
    cy.get('#collections_with_pagination-default-collections-with-pagination_0')
    .should('be.visible')
    cy.wait(2000);

    // Desplázate y espera
    cy.scrollTo('bottom');
    cy.wait(2000);
    cy.scrollTo('top');

    // Reabre el menú hamburguesa
    cy.get('#default_header-default-header_0 > header > label.hamburger > svg', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });

    cy.wait(2000);

    // Haz clic en la categoría "Hoodies"
    cy.get(':nth-child(2) > .menuLabel > :nth-child(1)', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });

    // Haz clic en la subcategoría "All Hoodies"
    cy.get('[href="https://comfrt.com/collections/hoodies"]', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });

    // Verifica la carga de "All Hoodies"
    cy.url().should('include', '/collections/hoodies');

    //Verificar que todos los elementos sean visibles
    cy.get('#collections_with_pagination-default-collections-with-pagination_0')
    .should('be.visible')
    cy.wait(2000);

    // Desplázate y espera
    cy.scrollTo('bottom');
    cy.wait(2000);
    cy.scrollTo('top');

    // Reabre el menú hamburguesa
    cy.get('#default_header-default-header_0 > header > label.hamburger > svg', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });

    cy.wait(2000);

    // Haz clic en la categoría "Sweatpants"
    cy.get(':nth-child(3) > .menuLabel > :nth-child(1)', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });

    // Haz clic en la subcategoría "All Sweatpants"
    cy.get('[href="https://comfrt.com/collections/sweatpants"]', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });

    // Verifica la carga de "All Sweatpants"
    cy.url().should('include', '/collections/sweatpants');

    //Verificar que todos los elementos sean visibles
    cy.get('#collections_with_pagination-default-collections-with-pagination_0')
    .should('be.visible')
    cy.wait(2000);

    // Desplázate y espera
    cy.scrollTo('bottom');
    cy.wait(2000);
    cy.scrollTo('top');

    // Reabre el menú hamburguesa
    cy.get('#default_header-default-header_0 > header > label.hamburger > svg', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });

    cy.wait(2000);

    // Haz clic en la categoría "Kids"
    cy.get('[href="https://comfrt.com/content/kids"]', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });

    // Verifica la carga de "Kids"
    cy.url().should('include', '/content/kids');

     //Verificar que todos los elementos sean visibles
     cy.get('#home_hero-kids-hero-draft_0 > div > img')
     .should('be.visible')
     cy.wait(2000);
 
      //Verificar que todos los elementos sean visibles
      cy.get('#featured_products_section-shop-kids-section-draft_2 > div')
      .should('be.visible')
      cy.wait(2000);
    
     //Verificar que todos los elementos sean visibles
      cy.get('#featured_products_section-shop-kids-sweatpants_3 > div')
      .should('be.visible')
      cy.wait(2000);

      //Verificar que todos los elementos sean visibles
      cy.get('#image_centered_text-kids-sub-section-draft_4 > section > div')
      .should('be.visible')
      cy.wait(2000);
      
      //Verificar que todos los elementos sean visibles
      cy.get('#home_featured_section-kids-featured-draft_6 > section > div:nth-child(1) > div.dlYCmTsm > img')
      .should('be.visible')
      cy.wait(2000);
      
       //Verificar que todos los elementos sean visibles
       cy.get('#home_featured_section-kids-featured-draft_6 > section > div:nth-child(2) > div.dlYCmTsm > img')
       .should('be.visible')
       cy.wait(2000);
       
    // Desplázate y espera
    cy.scrollTo('bottom');
    cy.wait(2000);
    cy.scrollTo('top');

    // Reabre el menú hamburguesa
    cy.get('#default_header-default-header_0 > header > label.hamburger > svg', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });

    cy.wait(2000);

    // Haz clic en la categoría "Loungewear"
    cy.get('[href="https://comfrt.com/collections/loungewear"]', { timeout: 10000 }) 
      .should('be.visible')
      .click({ force: true });

    // Verifica la carga de "Loungewear"
    cy.url().should('include', '/collections/loungewear');

    //Verificar que todos los elementos sean visibles
    cy.get('#collections_with_pagination-default-collections-with-pagination_0')
    .should('be.visible')
    cy.wait(2000);

    // Desplázate y espera
    cy.scrollTo('bottom');
    cy.wait(2000);
    cy.scrollTo('top');

    // Reabre el menú hamburguesa
    cy.get('#default_header-default-header_0 > header > label.hamburger > svg', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });

    cy.wait(2000);

    // Haz clic en la categoría "Blankets"
    cy.get('[href="https://comfrt.com/content/blankets"]', { timeout: 10000 }) 
      .should('be.visible')
      .click({ force: true });

    // Verifica la carga de "Blankets"
    cy.url().should('include', '/content/blankets');

    //Verificar que todos los elementos sean visibles
    cy.get('#home_hero-weighted-blanket-landing-page-hero_0 > div > img')
    .should('be.visible')
    cy.wait(2000);

     //Verificar que todos los elementos sean visibles
     cy.get('#featured_products_section-shop-blankets_2 > div > div.zZYXATlU > div')
     .should('be.visible')
     cy.wait(2000);

     //Verificar que todos los elementos sean visibles
     cy.get('#image_centered_text-banner-blankets-draft_3 > section > div')
     .should('be.visible')
     cy.wait(2000);

     //Verificar que todos los elementos sean visibles
     cy.get('#home_featured_section-blankets-featured-section-draft_5 > section > div:nth-child(1) > div.dlYCmTsm > img')
     .should('be.visible')
     cy.wait(2000);

     //Verificar que todos los elementos sean visibles
     cy.get('#home_featured_section-blankets-featured-section-draft_5 > section > div:nth-child(2) > div.dlYCmTsm > img')
     .should('be.visible')
     cy.wait(2000);

    // Desplázate y espera
    cy.scrollTo('bottom');
    cy.wait(2000);
    cy.scrollTo('top');

    // Reabre el menú hamburguesa
    cy.get('#default_header-default-header_0 > header > label.hamburger > svg', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });

    cy.wait(2000);

    // Haz clic en la categoría "Accessories"
    cy.get(':nth-child(7) > .menuLabel > :nth-child(1)', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });

    // Haz clic en la subcategoría "Collections ALL Accessories"
    cy.get('[href="https://comfrt.com/collections/accessories"]', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });

    // Verifica la carga de "All Accessories"
    cy.url().should('include', '/collections/accessories');

    // Desplázate y espera
    cy.scrollTo('bottom');
    cy.wait(2000);
    cy.scrollTo('top');

    // Reabre el menú hamburguesa
    cy.get('#default_header-default-header_0 > header > label.hamburger > svg', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });

    cy.wait(2000);


  // Haz clic en la categoría "Pets"
  cy.get('[href="https://comfrt.com/content/pets"]', { timeout: 10000 }) 
  .should('be.visible')
  .click({ force: true });

// Verifica la carga de "Pets"
cy.url().should('include', '/content/pets');

// Desplázate y espera
cy.scrollTo('bottom');
cy.wait(2000);
cy.scrollTo('top');

// Reabre el menú hamburguesa
cy.get('#default_header-default-header_0 > header > label.hamburger > svg', { timeout: 10000 })
  .should('be.visible')
  .click({ force: true });

cy.wait(2000);



/*// Espera a que el enlace de "Ambassador Program" esté disponible y visible
cy.get('a[href="/pages/ambassador"]', { timeout: 10000 })
  
  .then(($link) => {
    // Verifica si el enlace tiene el atributo href correctamente definido
    const href = $link.attr('href');
    if (href) {
      cy.wrap($link).click({ force: true });
    } else {
      throw new Error("El enlace 'Ambassador Program' no tiene un href definido.");
    }
  });

  cy.wait(2000);

// Verifica que la página cargó correctamente
cy.url().should('include', '/pages/ambassador');

// Desplázate y espera
cy.scrollTo('bottom');
cy.wait(2000);
cy.scrollTo('top');

// Reabre el menú hamburguesa
cy.get('#default_header-default-header_0 > header > label.hamburger > svg', { timeout: 10000 })
  .should('be.visible')
  .click({ force: true }); 

// Espera a que el ícono del menú hamburguesa se cierre
cy.get('#default_header-default-header_0 > header > label.close > svg', { timeout: 10000 })
.should('be.visible')
.click({ force: true });*/

  });
});

});