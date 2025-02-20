// //FALTA VALIDAR QUE PRESIONE CHECKOUT 

// describe('Pruebas en dispositivos de escritorio en www.comfrt.com', () => {
//   const device = { name: 'Desktop 1920x1080', width: 1920, height: 1080 };

//   beforeEach(() => {


//       cy.intercept('GET', '**/private_access_tokens*', {
//           statusCode: 200,
//           body: { token: 'fake-token' }
//       }).as('mockPrivateAccessToken');

//       cy.viewport(device.width, device.height);
//       cy.visit('https://www.comfrt.com');

//       cy.closePopupOnAppearance();

//       // Verificación de window.gtag para evitar el error
//       cy.window().then((win) => {
//           try {
//               if (typeof win.gtag === 'function') {
//                   win.gtag('event', 'page_view', {
//                       page_location: win.location.href
//                   });
//               } else {
//                   console.warn('gtag no es una función o no está definida.');
//               }
//           } catch (error) {
//               console.error('Error al ejecutar gtag:', error);
//           }
//       });

//       // Intercepta solicitudes y captura errores posibles
//       cy.intercept('POST', '**/checkouts/**').as('checkoutRequest');
//       cy.on('uncaught:exception', (err, runnable) => {
//           // Evita que los errores en la consola interrumpan el flujo
//           if (err.message.includes('gtag is not a function')) {
//               return false;  // Ignora errores relacionados con gtag
//           }
//           return true;  // Deja que otros errores se manejen de manera predeterminada
//       });
//   });

//   it('Navega a la categoría Sweatpants y hace scroll', () => {
//       cy.get('.vBg37Hhp > [href="/collections/sweatpants"]', { timeout: 10000 })
//           .should('be.visible')
//           .click({ force: true });
//       cy.url().should('include', '/collections/sweatpants');

//       cy.scrollTo('bottom');
//       cy.wait(2000);
//       cy.scrollTo('top');
//       cy.wait(2000);

//       // Interactúa con el selector de colores del producto Signature Fit Sweatpants
//       cy.get(':nth-child(1) > .VtFAkf4R > .SJQFNexH > .v26a1W51 > :nth-child(1) > .N1cHTXJ7 > .XSvSsyWQ', { timeout: 10000 })
//           .should('be.visible')
//           .click({ force: true });

//       cy.get(':nth-child(1) > .VtFAkf4R > .SJQFNexH > .v26a1W51 > :nth-child(5) > .N1cHTXJ7 > .XSvSsyWQ', { timeout: 10000 })
//           .should('be.visible')
//           .click({ force: true });
//       cy.wait(2000);

//       cy.get(':nth-child(1) > .VtFAkf4R > .SJQFNexH > .v26a1W51 > :nth-child(8) > .N1cHTXJ7 > .XSvSsyWQ', { timeout: 10000 })
//           .should('be.visible')
//           .click({ force: true });
//       cy.wait(2000);

//       // Interactúa con los colores del producto Classic Sweatpants
//       cy.get('#collections_with_pagination-default-collections-with-pagination_0 > div > div > div:nth-child(3) > div.VtFAkf4R > fieldset > div > label:nth-child(1) > a', { timeout: 10000 })
//       .click({ force: true });
//       cy.wait(2000);

//       cy.get('#collections_with_pagination-default-collections-with-pagination_0 > div > div > div:nth-child(3) > div.VtFAkf4R > fieldset > div > label:nth-child(5) > a > span', { timeout: 10000 })
//           .click({ force: true });
//       cy.wait(2000);

//       cy.get('#collections_with_pagination-default-collections-with-pagination_0 > div > div > div:nth-child(3) > div.VtFAkf4R > fieldset > div > label:nth-child(7) > a', { timeout: 10000 })
//           .click({ force: true });
//       cy.wait(2000);

//       // Selecciona la última prenda del color elegido
//       cy.wait(2000);
//       cy.get('#collections_with_pagination-default-collections-with-pagination_0 > div > div > div:nth-child(3) > a > div.tK5FSRVg > img', { timeout: 10000 })
//       .click({ force: true });

//       // Verifica que se abrió la página del producto
//       cy.url().should('include', 'coordinate-sweatpants?variant=43983688859692');

//       // Hacer scroll en la página del producto
//       cy.scrollTo('bottom'); // Desplaza hasta el final de la página
//       cy.wait(2000);
//       cy.scrollTo('top'); // Vuelve al inicio de la página
//       cy.wait(2000);

      
//       // Interactúa con las tallas XS, S, M, L, XL
//       cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(3) > div.v26a1W51 > label:nth-child(1) > a > span', { timeout: 10000 })
//           .click({ force: true });
//       cy.wait(2000);

//       cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(3) > div.v26a1W51 > label:nth-child(2) > a > span', { timeout: 10000 })
//           .click({ force: true });
//       cy.wait(2000);

//       cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(3) > div.v26a1W51 > label:nth-child(3) > a > span', { timeout: 10000 })
//           .click({ force: true });
//       cy.wait(2000);

//       cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(3) > div.v26a1W51 > label:nth-child(4) > a > span', { timeout: 10000 })
//           .click({ force: true });
//       cy.wait(2000);

//       cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(3) > div.v26a1W51 > label:nth-child(5) > a > span', { timeout: 10000 })
//           .click({ force: true });
//       cy.wait(2000);

//       // Hace clic en la Size Guide y verifica que sea visible
//       cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(3) > div.Sjgd8MXw > label', { timeout: 10000 })
//           .click({ force: true });
//       cy.wait(2000);

//       // Cierra el Size Guide y verifique que no sea visible
//       cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(3) > div.Sjgd8MXw > div.o3JfeQ8Y > div > label > svg > path', { timeout: 10000 })
//           .click({ force: true })
//           .should('not.be.visible');
//       cy.wait(2000);

//       // Selecciona el botón de add to cart o pre-order según disponibilidad
//       cy.get('#product_hero_add_to_cart_button-default-product-hero-add-to-cart-button_5_rc > form:nth-child(1) > button').then(($btn) => {
//           // Verifica si el botón está habilitado
//           if ($btn.is(':enabled')) {
//               // Si el botón está habilitado, realiza una acción, como hacer clic
//               cy.wrap($btn).click();
//           } else {
//               // Si el botón está deshabilitado, realiza una acción alternativa
//               cy.log('El botón está deshabilitado. Realizando acción alternativa.');
//               // Aquí puedes agregar la lógica para la acción alternativa
//               cy.get('#product_hero_add_to_cart_button-default-product-hero-add-to-cart-button_5_rc > form:nth-child(2) > button', { timeout: 1000 })
//                   .click({ force: true });

//               // Verificar que el carrito se ha desplegado
//               cy.get('#cart', { timeout: 1000 }).should('be.visible');
//           }

//           // Obtener el input de cantidad en el carrito
// cy.get('<input type="text" value="1" readonly="" class="JaPNtHML">').as('cantidad'); // Cambié el selector incorrecto

// // Obtener todos los botones con el mismo selector
// cy.get('.RyV2qSnH').as('botonesCantidad');

// cy.get('.JaPNtHML')
//   .invoke('val')
//   .then((valorInicial) => {
//     const cantidadInicial = parseInt(valorInicial);

//     // Hacer clic en el botón de aumentar cantidad dos veces
//     cy.get('@botonesCantidad').eq(1) // Primer clic en el botón de aumentar
//      // .should('be.visible')
//       .click({ force: true });

//     cy.get('.JaPNtHML')
//       .invoke('val')
//       .should('eq', (cantidadInicial + 1).toString()); // Verifica el incremento

//     cy.get('@botonesCantidad').eq(1) // Segundo clic en el botón de aumentar
//       .should('be.visible')
//       .click({ force: true });

//     cy.get('.JaPNtHML')
//       .invoke('val')
//      .should('eq', (cantidadInicial + 2).toString()); // Verifica el segundo incremento

//     // Hacer clic en el botón de disminuir cantidad una sola vez
//     cy.get('@botonesCantidad').eq(0) // Un solo clic en el botón de disminuir
//       .should('be.visible')
//       .click();

//     cy.get('.JaPNtHML')
//       .invoke('val')
//      .should('eq', (cantidadInicial + 1).toString()); // Verifica el decremento
//       cy.wait(2000);
//   }); 



//           // Cerrar el carrito
//           cy.get('#cart > div > div.zUHyhS7e > div.mhTDcJGU > label > svg', { timeout: 10000 })
//               .should('be.visible')
//               .click();
//           cy.wait(2000);

//           // Abrir nuevamente el carrito
//           cy.get('#cart-icon-bubble > svg', { timeout: 10000 })
//               .should('be.visible')
//               .click();
//           cy.wait(2000);

        
//       });

//       // Hacer clic en checkout
//       cy.get('#checkout_button-checkout_button_1 > form > button', { timeout: 10000 })
//           .should('be.visible')
//           .should('not.be.disabled')
//           .click({ force: true });

//       // Esperar redirección y validar que está en la página de checkout
//       cy.wait(2000);
//       cy.url().should('include', '/checkout');

//       // Manejo de redirección fallida o error en el checkout
//       cy.wait('@checkoutRequest').then((interception) => {
//           if (interception.response.statusCode !== 200) {
//               cy.log('Redirección o solicitud de checkout falló. Redirigiendo al carrito.');
//               cy.go('back'); // Regresar al carrito si algo falla
//           }
//       });
//   });
// });



// ////revisar popup , el resto funciona ok, checkout tambien ok//