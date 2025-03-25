// describe('Prueba de proceso de compra haciendo clic desde la home en el Cloud Zip Hoodie', () => {
//     const devices = [
//       { name: 'Desktop 1920x1080', width: 1920, height: 1080 },
//      // { name: 'iPhone 15 Pro Max', width: 430, height: 932 }
//     ];
  
//     devices.forEach((device) => {
//       it(`Prueba en el dispositivo ${device.name}`, () => {
//         cy.intercept('GET', '**/private_access_tokens*', {
//             statusCode: 200,
//             body: { token: 'fake-token' }
//         }).as('mockPrivateAccessToken');
  
//         cy.viewport(device.width, device.height);
//         cy.visit('https://www.comfrt.com/products/cloud-zip-hoodie');  
  
//         // Verificación de window.gtag para evitar el error
//         cy.window().then((win) => {
//             try {
//                 if (typeof win.gtag === 'function') {
//                     win.gtag('event', 'page_view', {
//                         page_location: win.location.href
//                     });
//                 } else {
//                     console.warn('gtag no es una función o no está definida.');
//                 }
//             } catch (error) {
//                 console.error('Error al ejecutar gtag:', error);
//             }
//         });
  
//         // Intercepta solicitudes y captura errores posibles
//         cy.intercept('POST', '**/checkouts/**').as('checkoutRequest');
//         cy.on('uncaught:exception', (err, runnable) => {
//             // Evita que los errores en la consola interrumpan el flujo
//             if (err.message.includes('gtag is not a function')) {
//                 return false;  // Ignora errores relacionados con gtag
//             }
//             return true;  // Deja que otros errores se manejen de manera predeterminada
//         });
  
//         cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(1) > div.v26a1W51 > label:nth-child(2) > a', { timeout: 10000 })
//        //   .should('be.visible')
//           .click({ force: true });
//         cy.wait(2000);
  
//         // Hace clic en la talla M
//         cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(3) > div.v26a1W51 > label:nth-child(3) > a > span', { timeout: 10000 })
//          // .should('be.visible')
//           .click({ force: true });
//         //cy.wait(2000);
  
//         // Selecciona el botón de add to cart o pre-order según disponibilidad
//         cy.get('#product_hero_add_to_cart_button-default-product-hero-add-to-cart-button_5_rc > form:nth-child(1) > button').then(($btn) => {
//             // Verifica si el botón está habilitado
//             if ($btn.is(':enabled')) {
//                 // Si el botón está habilitado, realiza una acción, como hacer clic
//                 cy.wrap($btn).click();
//             } else {
//                 // Si el botón está deshabilitado, realiza una acción alternativa
//                 cy.log('El botón está deshabilitado. Realizando acción alternativa.');
//                 // Aquí puedes agregar la lógica para la acción alternativa
//                 cy.get('#product_hero_add_to_cart_button-default-product-hero-add-to-cart-button_5_rc > form:nth-child(2) > button', { timeout: 1000 })
//                     .click({ force: true });
//             }
//         });
  
//         // // Verificar que el carrito se ha desplegado
//         // cy.get('#cart', { timeout: 10000 }).should('be.visible');
  
//         // // Cerrar el carrito
//         // cy.get('#cart > div > div.zUHyhS7e > div.mhTDcJGU > label > svg', { timeout: 10000 })
//         //     .should('be.visible')
//         //     .click();
//         // cy.wait(2000);
  
//         // // Abrir nuevamente el carrito
//         // cy.get('#cart-icon-bubble > svg', { timeout: 10000 })
//         //     .should('be.visible')
//         //     .click();
//         // cy.wait(2000);
  
//         // Hacer clic en checkout
//         cy.get('#checkout_button-checkout_button_1 > form > button', { timeout: 10000 })
//             .should('be.visible')
//             .should('not.be.disabled')
//             .click({ force: true });
  
//         // Esperar redirección y validar que está en la página de checkout
//         cy.wait(2000);
//         cy.url().should('include', '/checkout');
  
//         // Manejo de redirección fallida o error en el checkout
//         cy.wait('@checkoutRequest').then((interception) => {
//             if (interception.response.statusCode !== 200) {
//                 cy.log('Redirección o solicitud de checkout falló. Redirigiendo al carrito.');
//                 cy.go('back'); // Regresar al carrito si algo falla
//             }
//         });
//       });
//     });
//   });
  


//revisar el git