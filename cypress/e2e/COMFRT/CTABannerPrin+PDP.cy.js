
// describe('Prueba en dispositivos móviles y desktop en www.comfrt.com', () => {
//   const devices = [
//     { name: 'iPhone 15 Pro Max', width: 430, height: 932 },
//     /*{ name: 'Samsung Galaxy S24', width: 412, height: 915 },
//     { name: 'Desktop 1920x1080', width: 1920, height: 1080 }*/
//   ];

//   devices.forEach((device) => {
//     it(`Flujo de compra en ${device.name}`, () => {  
//       cy.viewport(device.width, device.height);
//       cy.visit('https://www.comfrt.com');

//       // Haz clic en "Shop Your Hoodie"
//       cy.get('#home_hero-shop-your-hoodie_0 > div > div > a > button', { timeout: 10000 })
//         .should('be.visible')
//         .click({ force: true });

//       // Verifica que la URL es la correcta
//       cy.url().should('include', '/collections/hoodies');

//       // Espera para asegurar carga de productos
//       cy.wait(2000);
  
//       // Interactúa con el selector de colores
//       cy.get('#collections_with_pagination-default-collections-with-pagination_0 > div > div > div:nth-child(1) > div.VtFAkf4R > fieldset > div > label:nth-child(5) > a > span', { timeout: 10000 })
//         .should('be.visible')
//         .click({ force: true });
//       cy.wait(2000);

//       cy.get('#collections_with_pagination-default-collections-with-pagination_0 > div > div > div:nth-child(1) > div.VtFAkf4R > fieldset > div > label:nth-child(3) > a > span', { timeout: 10000 })
//         .should('be.visible')
//         .click({ force: true });
//       cy.wait(2000);

//       /*cy.get('#collections_with_pagination-default-collections-with-pagination_0 > div > div > div:nth-child(1) > div.VtFAkf4R > fieldset > div > label:nth-child(11) > a', { timeout: 10000 })
//       .should('be.visible')
//       .click({ force: true });
//       cy.wait(2000);

//       cy.get('#collections_with_pagination-default-collections-with-pagination_0 > div > div > div:nth-child(1) > div.VtFAkf4R > fieldset > div > label:nth-child(5)', { timeout: 10000 })
//       .should('be.visible')
//       .click({ force: true });*/
      
//       cy.wait(2000);

//       // Espera y clickea en la imagen del hoodie seleccionado
//       cy.wait(2000);
//       cy.get('#collections_with_pagination-default-collections-with-pagination_0 > div > div > div:nth-child(1) > a > div.tK5FSRVg > img', { timeout: 10000 })
//         .should('be.visible')
//         .click({ force: true });

//       // Verifica que se abrió la página del producto 
//       cy.url().should('include', 'products/cloud-zip-hoodie?variant=41732312858668');

//       // Hacer scroll en la página del producto
//       cy.scrollTo('bottom'); // Desplaza hasta el final de la página
//       cy.wait(2000);
//       cy.scrollTo('top'); // Vuelve al inicio de la página
//       cy.wait(2000);

//       // Interactuar con las tallas
//       cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(3) > div.v26a1W51 > label:nth-child(1) > a > span', { timeout: 10000 })
//         .should('be.visible')
//         .click({ force: true });
//       cy.wait(2000);

//       cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(3) > div.v26a1W51 > label:nth-child(5) > a > span', { timeout: 10000 })
//         .should('be.visible')
//         .click({ force: true });
//       cy.wait(2000);

//       cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(3) > div.v26a1W51 > label:nth-child(7) > a > span', { timeout: 10000 })
//         .should('be.visible')
//         .click({ force: true });
//       cy.wait(2000);

//       // Hacer clic en el botón "Add to Cart"
//       cy.get('#product_hero_add_to_cart_button-default-product-hero-add-to-cart-button_5_rc > form:nth-child(1) > button', { timeout: 10000 })
//         .should('be.visible')
//         .click({ force: true });
//       cy.wait(2000);

//       // Verificar que el carrito se ha desplegado
//       // Suponiendo que el carrito tiene un elemento identificable cuando está visible
//       cy.get('#cart > div', { timeout: 10000 });


//       // Hacer clic en el botón checkout
//       cy.get('#checkout_button-checkout_button_1 > form > button')
//         .should('be.visible')
//         .click({ force: true });
//         cy.wait(2000);
      

//       // Regresar a la página anterior
//       cy.go('back');
//       cy.reload();
//     });
//   });
// }); 


    
