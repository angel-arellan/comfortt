//Falta validar lo del checkout


describe('Prueba en dispositivos móviles en www.comfrt.com', () => {
    const devices = [
      { name: 'iPhone 15 Pro Max', width: 430, height: 932 },
      /*{ name: 'Samsung Galaxy S24', width: 412, height: 915 }*/
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

    // Haz clic en la categoría "Kids"
    cy.get('#menu-default > a:nth-child(4)', { timeout: 10000 })
      .should('be.visible')
      .click({ force: true });

    // Verifica que la página de "Kids" se haya cargado correctamente
    cy.url().should('include', 'content/kids');

    // Desplázate y espera
    cy.scrollTo('bottom');
    cy.wait(2000);
    cy.scrollTo('center');
    cy.wait(2000);
    cy.scrollTo('top');
    cy.wait(2000);

    cy.contains('Shop Kids Hoodies', { timeout: 10000 }) // Busca el texto en la página
    .scrollIntoView() // Hace scroll hasta ese texto
    .should('be.visible'); // Verifica que es visible
    cy.wait(2000)

    // Interactúa con el selector de colores del producto Signature kids Hoodie
    cy.get('#featured_products_section-shop-kids-section-draft_2 > div > div.zZYXATlU > div > div:nth-child(1) > div.VtFAkf4R > fieldset > div > label:nth-child(1) > a', { timeout: 10000 })
    .should('be.visible')
    .click({ force: true });
    cy.wait(2000)

    cy.get('#featured_products_section-shop-kids-section-draft_2 > div > div.zZYXATlU > div > div:nth-child(1) > div.VtFAkf4R > fieldset > div > label:nth-child(2) > a', { timeout: 10000 })
    .should('be.visible')
    .click({ force: true });
    cy.wait(2000)

    cy.get('#featured_products_section-shop-kids-section-draft_2 > div > div.zZYXATlU > div > div:nth-child(1) > div.VtFAkf4R > fieldset > div > label:nth-child(3) > a', { timeout: 10000 })
    .should('be.visible')
    .click({ force: true });
    cy.wait(2000)

     //'Selecciona la última prenda del color elegido', () => {
        cy.wait(2000);
          cy.get('#featured_products_section-shop-kids-section-draft_2 > div > div.zZYXATlU > div > div:nth-child(1) > a > div.tK5FSRVg > img', { timeout: 10000 })
            .click({ force: true });
    
     // Verifica que se abrió la página del producto 
        cy.url().should('include', 'products/signature-kids-hoodie?variant=43891268747308');

     // Hacer scroll en la página del producto
      cy.scrollTo('bottom'); // Desplaza hasta el final de la página
      cy.wait(2000);
      cy.scrollTo('top'); // Vuelve al inicio de la página
      cy.wait(2000);

    //'Interactúa con las tallas XS,S, M, L, XL
     cy.get('.O9IcGWrR > :nth-child(2) > .v26a1W51 > :nth-child(1) > .N1cHTXJ7 > .XSvSsyWQ', { timeout: 10000 })
       .should('be.visible')
       .click({ force: true });
       cy.wait(2000);

       cy.get('.O9IcGWrR > :nth-child(2) > .v26a1W51 > :nth-child(2) > .N1cHTXJ7 > .XSvSsyWQ', { timeout: 10000 })
     .should('be.visible')
     .click({ force: true });
     cy.wait(2000);

     cy.get('.O9IcGWrR > :nth-child(2) > .v26a1W51 > :nth-child(3) > .N1cHTXJ7 > .XSvSsyWQ', { timeout: 10000 })
     .should('be.visible')
     .click({ force: true });
     cy.wait(2000);

     cy.get('.O9IcGWrR > :nth-child(2) > .v26a1W51 > :nth-child(4) > .N1cHTXJ7 > .XSvSsyWQ', { timeout: 10000 })
     .should('be.visible')
     .click({ force: true });
     cy.wait(2000);
     
     cy.get('.O9IcGWrR > :nth-child(2) > .v26a1W51 > :nth-child(5) > .N1cHTXJ7 > .XSvSsyWQ', { timeout: 10000 })
     .should('be.visible')
     .click({ force: true });
     cy.wait(2000);


     //Hace clic en la Size Guide 
   cy.get('.maXcOloV', { timeout: 10000 })
   .click({ force: true });
  cy.wait(2000);

  //Cierra el Size Guide 
  cy.get('.LeKie3P2', { timeout: 10000 })
  .click({ force: true })
  cy.wait(2000);

// Selecciona el botón de add to cart o pre-order según disponibilidad
cy.get('[action="/cart/add?return_to=%2Fproducts%2Fsignature-kids-hoodie%3Fvariant%3D43891268812844%26viewcart%3Dtrue"] > .YUeVwYml')
  .then(($btn) => {
    if ($btn.is(':enabled')) {
      // Si el botón está habilitado, realiza una acción, como hacer clic
      cy.wrap($btn).click();
    } else {
      // Si el botón está deshabilitado, realiza una acción alternativa
      cy.log('El botón está deshabilitado. Realizando acción alternativa.');
      // Aquí puedes agregar la lógica para la acción alternativa
      cy.get('[action="/cart/add?return_to=%2Fproducts%2Fsignature-kids-hoodie%3Fvariant%3D44015573205036%26viewcart%3Dtrue"] > .YUeVwYml', { timeout: 1000 })
        .should('be.enabled')
        .click({ force: true });
    
    //Hacer clic en el botón checkout', () => {
      cy.get('#checkout_button-checkout_button_1 > form > button', { timeout: 10000 })
      .click({ force: true });
      cy.wait(2000)

      // Vuelve a la página anterior
      cy.go('back'); 
      cy.url().should('include', 'products/signature-kids-hoodie?variant=43891268747308'); // Verifica que regresó correctamente
}
  });
      });
    });
  });
  