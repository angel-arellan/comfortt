// describe('Prueba de proceso de compra de Blankets Cuddle Cloud', () => {
//     const devices = [
//         { name: 'Desktop 1920x1080', width: 1920, height: 1080 },
//         // { name: 'iPhone 15 Pro Max', width: 430, height: 932 }
//     ];

//     devices.forEach((device) => {
//         it(`Prueba en el dispositivo ${device.name}`, () => {
//             cy.intercept('GET', '**/private_access_tokens*', {
//                 statusCode: 200,
//                 body: { token: 'fake-token' }
//             }).as('mockPrivateAccessToken');

//             cy.viewport(device.width, device.height);
//             cy.visit('https://comfrt.com/products/cuddlecloud-weighted-blanket');

//             // Observador para el popup
//             cy.document().then((doc) => {
//                 const observer = new MutationObserver((mutationsList) => {
//                     mutationsList.forEach((mutation) => {
//                         if (mutation.type === 'childList') {
//                             const popup = doc.querySelector('#alia-root');
//                             if (popup) {
//                                 console.log('📌 Encontré el popup');
//                               popup.style.display = 'none';
//                              //   observer.disconnect(); // Detener la observación después de cerrar el pop-up
//                             }
//                         }
//                     });
//                 });

//                 // Iniciar la observación del body para detectar cambios
//                 observer.observe(doc.body, { childList: true, subtree: true });
//             });

//             // Verificación de window.gtag para evitar errores
//             cy.window().then((win) => {
//                 try {
//                     if (typeof win.gtag === 'function') {
//                         win.gtag('event', 'page_view', {
//                             page_location: win.location.href
//                         });
//                     } else {
//                         console.warn('⚠️ gtag no está definido.');
//                     }
//                 } catch (error) {
//                     console.error('❌ Error al ejecutar gtag:', error);
//                 }
//             });

//             // Intercepta solicitudes y captura errores posibles
//             cy.intercept('POST', '**/checkouts/**').as('checkoutRequest');
//             cy.on('uncaught:exception', (err) => {
//                 if (err.message.includes('gtag is not a function')) {
//                     return false; // Ignora errores relacionados con gtag
//                 }
//                 return true;
//             });

//             // Selecciona el botón de add to cart o pre-order según disponibilidad
//             cy.get('#product_hero_add_to_cart_button-default-product-hero-add-to-cart-button_5_rc > form:nth-child(1) > button').then(($btn) => {
//                 if ($btn.is(':enabled')) {
//                     cy.wrap($btn).click();
//                 } else {
//                     cy.log('⚠️ El botón está deshabilitado. Probando acción alternativa.');
//                     cy.get('#product_hero_add_to_cart_button-default-product-hero-add-to-cart-button_5_rc > form:nth-child(2) > button', { timeout: 1000 })
//                         .click({ force: true });
//                 }
//             });

//             // Verificar que el carrito se ha desplegado
//             cy.get('#cart', { timeout: 10000 }).should('be.visible');

//             // Cerrar el carrito
//             cy.get('#cart > div > div.zUHyhS7e > div.mhTDcJGU > label > svg', { timeout: 10000 })
//                 .should('be.visible')
//                 .click({ force: true });

//             // Abrir nuevamente el carrito
//             cy.get('#cart-icon-bubble > svg', { timeout: 10000 }).click({ force: true });

//             // Hacer clic en checkout
//             cy.get('#checkout_button-checkout_button_2 > form > .e1yuB0Es', { timeout: 10000 })
//               //  .should('not.be.disabled')
//                 .click({ force: true });

//             // Esperar redirección y validar que está en la página de checkout
//             cy.url().should('include', '/checkout');

//             // Manejo de redirección fallida o error en el checkout
//             cy.wait('@checkoutRequest').then((interception) => {
//                 if (interception.response.statusCode !== 200) {
//                     cy.log('❌ Redirección fallida. Volviendo al carrito.');
//                     cy.go('back'); // Regresar al carrito si algo falla
//                 }
//                 cy.wait(1000);
//             });
//         });
//     });
// });
