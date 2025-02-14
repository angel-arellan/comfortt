// //FALTA VALIDAR QUE PRESIONE CHECKOUT 

// describe('Pruebas en dispositivos de escritorio en www.comfrt.com', () => {
//     const device = { name: 'Desktop 1920x1080', width: 1920, height: 1080 };
  
//     beforeEach(() => {
//       cy.viewport(device.width, device.height);
//       cy.visit('https://www.comfrt.com');
//     });
  
//     it('Navega a la categoría Sweatpants y hace scroll', () => {
//       cy.get('.vBg37Hhp > [href="/collections/sweatpants"]', { timeout: 10000 })
//         .should('be.visible')
//         .click({ force: true });
//       cy.url().should('include', '/collections/sweatpants');
  
//       cy.scrollTo('bottom');
//       cy.wait(2000);
//       cy.scrollTo('top');
//       cy.wait(2000);
  
//       // Interactúa con el selector de colores del producto Signature Fit Sweatpants
//       cy.get(':nth-child(1) > .VtFAkf4R > .SJQFNexH > .v26a1W51 > :nth-child(1) > .N1cHTXJ7 > .XSvSsyWQ', { timeout: 10000 })
//         .should('be.visible')
//         .click({ force: true });
  
//       cy.get(':nth-child(1) > .VtFAkf4R > .SJQFNexH > .v26a1W51 > :nth-child(5) > .N1cHTXJ7 > .XSvSsyWQ', { timeout: 10000 })
//         .should('be.visible')
//         .click({ force: true });
//       cy.wait(2000);
  
//       cy.get(':nth-child(1) > .VtFAkf4R > .SJQFNexH > .v26a1W51 > :nth-child(8) > .N1cHTXJ7 > .XSvSsyWQ', { timeout: 10000 })
//         .should('be.visible')
//         .click({ force: true });
//       cy.wait(2000);
  
//       // Interactúa con los colores del producto Classic Sweatpants
//       cy.get('#collections_with_pagination-default-collections-with-pagination_0 > div > div > div:nth-child(3) > div.VtFAkf4R > fieldset > div > label:nth-child(1) > a', { timeout: 10000 })
//         .should('be.visible')
//         .click({ force: true });
//       cy.wait(2000);
  
//       cy.get('#collections_with_pagination-default-collections-with-pagination_0 > div > div > div:nth-child(3) > div.VtFAkf4R > fieldset > div > label:nth-child(5) > a > span', { timeout: 10000 })
//         .should('be.visible')
//         .click({ force: true });
//       cy.wait(2000);
  
//       cy.get('#collections_with_pagination-default-collections-with-pagination_0 > div > div > div:nth-child(3) > div.VtFAkf4R > fieldset > div > label:nth-child(7) > a', { timeout: 10000 })
//         .should('be.visible')
//         .click({ force: true });
//       cy.wait(2000);

//       //'Selecciona la última prenda del color elegido', () => {
//         cy.wait(2000);
//           cy.get('#collections_with_pagination-default-collections-with-pagination_0 > div > div > div:nth-child(3) > a > div.tK5FSRVg > img', { timeout: 10000 })
//             .click({ force: true });
    
//       // Verifica que se abrió la página del producto 
//         cy.url().should('include', 'coordinate-sweatpants?variant=43983688859692');

//         // Hacer scroll en la página del producto
//       cy.scrollTo('bottom'); // Desplaza hasta el final de la página
//       cy.wait(2000);
//       cy.scrollTo('top'); // Vuelve al inicio de la página
//       cy.wait(2000);

//     //'Interactúa con las tallas XS,S, M, L, XL
//       cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(3) > div.v26a1W51 > label:nth-child(1) > a > span', { timeout: 10000 })
//       .should('be.visible')
//       .click({ force: true });
//     cy.wait(2000);

//     cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(3) > div.v26a1W51 > label:nth-child(2) > a > span', { timeout: 10000 })
//     .should('be.visible')
//     .click({ force: true });
//     cy.wait(2000);

//     cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(3) > div.v26a1W51 > label:nth-child(3) > a > span', { timeout: 10000 })
//     .should('be.visible')
//     .click({ force: true });
//     cy.wait(2000);
       
//   cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(3) > div.v26a1W51 > label:nth-child(4) > a > span', { timeout: 10000 })
//   .should('be.visible')
//   .click({ force: true });
//   cy.wait(2000);

//    cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(3) > div.v26a1W51 > label:nth-child(5) > a > span', { timeout: 10000 })
//    .should('be.visible')
//    .click({ force: true });
//    cy.wait(2000);
 

//    //Hace clic en la Size Guide y verifica que sea visible
//    cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(3) > div.Sjgd8MXw > label', { timeout: 10000 })
//    .should('be.visible')
//    .click({ force: true });
//   cy.wait(2000);

//   //Cierra el Size Guide y verifique que no sea visible
//   cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(3) > div.Sjgd8MXw > div.o3JfeQ8Y > div > label > svg > path', { timeout: 10000 })
//   .click({ force: true })
//   .should('not.be.visible');
//   cy.wait(2000);

//    // Selecciona el botón de add to cart o pre-order según disponibilidad
// cy.get('#product_hero_add_to_cart_button-default-product-hero-add-to-cart-button_5_rc > form:nth-child(1) > button').then(($btn) => {
//     // Verifica si el botón está habilitado
//     if ($btn.is(':enabled')) {
//       // Si el botón está habilitado, realiza una acción, como hacer clic
//       cy.wrap($btn).click();
//     } else {
//       // Si el botón está deshabilitado, realiza una acción alternativa
//       cy.log('El botón está deshabilitado. Realizando acción alternativa.');
//       // Aquí puedes agregar la lógica para la acción alternativa
//       cy.get ('#product_hero_add_to_cart_button-default-product-hero-add-to-cart-button_5_rc > form:nth-child(2) > button', { timeout: 1000 })
//       .click({ force: true })

//        // Verificar que el carrito se ha desplegado
//      cy.get('#cart', { timeout: 1000 }).should('be.visible');

//     // Verificar que el producto añadido es el correcto
//      cy.get('#cart .cart-item', { timeout: 1000 })
//       .should('contain', 'Coordinate Sweatpants')
//       .and('contain', 'Selected Color')
//       .and('contain', 'Selected Size')

//       /*// Hace clic en el botón que aumenta la cantidad del producto
//       cy.get('#34 1732312858668 > div > div.glwAfW_z > div > form:nth-child(3) > button', { timeout: 1000 })
//       .click() .click() .click()
//       cy.wait(2000);

//        // Verifica que la cantidad del producto se haya actualizado correctamente
//         cy.get('#34 1732312858668 > div > div.glwAfW_z > div > input').should('have.value', '3')
//         cy.wait(2000);

//      // Hace clic en el botón que disminuye la cantidad del producto
//       cy.get('#34 1732312858668 > div > div.glwAfW_z > div > form:nth-child(1) > button', { timeout: 1000 })
//       .click() .click() .click()
//       cy.wait(2000);

//        // Verifica que la cantidad del producto se haya actualizado correctamente
//         cy.get('#34 1732312858668 > div > div.glwAfW_z > div > input').should('have.value', '1')
//         cy.wait(2000);*/

//         //Hacer clic en el botón checkout', () => {
//           cy.get('#checkout_button-checkout_button_1 > form > .e1yuB0Es', { timeout: 10000 })
//               .click({ force: true });
//              // cy.url().should('include', 'https://comfrt.com/checkouts/cn/Z2NwLXVzLWVhc3QxOjAxSko3OUc0N1ZBQjU1RVBDS1czWFRYOVpO/information')
    
//     // Vuelve a la página anterior
//     cy.go('back'); 
//     cy.url().should('include', 'coordinate-sweatpants?variant=43983688859692'); // Verifica que regresó correctamente
    
    
//             }
    
     
//   });
//    });
//     });