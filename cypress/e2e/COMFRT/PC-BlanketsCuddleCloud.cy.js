
describe('Pruebas en dispositivos de escritorio y móviles en www.comfrt.com', () => {
    const devices = [
      { name: 'Desktop 1920x1080', width: 1920, height: 1080 },
      //{ name: 'iPhone 15 Pro Max', width: 430, height: 932 }
    ];
  
    devices.forEach((device) => {
      it(`Prueba en el dispositivo ${device.name}`, () => {
        cy.intercept('GET', '**/private_access_tokens*', {
            statusCode: 200,
            body: { token: 'fake-token' }
        }).as('mockPrivateAccessToken');
  
        cy.viewport(device.width, device.height);
        cy.visit('https://comfrt.com/products/cuddlecloud-weighted-blanket');  
    
       
       //POPUP QUERYSELECTOR
        // cy.document().then((doc) => {
        //     const observer = new MutationObserver((mutationsList) => {
        //       mutationsList.forEach((mutation) => {
        //         if (mutation.type === 'childList') {
        //           const popup = doc.querySelector('#alia-0wpzlmlujiopg85a');
        //           if (popup) {
        //             // Si el popup aparece, cerrarlo
        //             cy.wrap(popup).within(() => {
        //               cy.get('svg').contains('path', 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z').click();
        //               cy.log('✅ Pop-up cerrado correctamente');
        //             });
        //             observer.disconnect(); // Detener la observación después de cerrar el pop-up
        //           }
        //         }
        //       });
        //     });

        // Verificación de window.gtag para evitar el error
        cy.window().then((win) => {
            try {
                if (typeof win.gtag === 'function') {
                    win.gtag('event', 'page_view', {
                        page_location: win.location.href
                    });
                } else {
                    console.warn('gtag no es una función o no está definida.');
                }
            } catch (error) {
                console.error('Error al ejecutar gtag:', error);
            }
        });
  
        // Intercepta solicitudes y captura errores posibles
        cy.intercept('POST', '**/checkouts/**').as('checkoutRequest');
        cy.on('uncaught:exception', (err, runnable) => {
            // Evita que los errores en la consola interrumpan el flujo
            if (err.message.includes('gtag is not a function')) {
                return false;  // Ignora errores relacionados con gtag
            }
            return true;  // Deja que otros errores se manejen de manera predeterminada
        });
  

        //Interactúa con los colores
        // cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset > div.v26a1W51 > label:nth-child(1) > a', { timeout: 10000 })
        //  .should('be.visible')
        //   .click({ force: true });
        // cy.wait(4000);

        // cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset > div.v26a1W51 > label:nth-child(3) > a', { timeout: 10000 })
        //   .should('be.visible')
        //    .click({ force: true });
        //  cy.wait(4000);
 
         // Selecciona el botón de add to cart o pre-order según disponibilidad
         cy.get('#product_hero_add_to_cart_button-default-product-hero-add-to-cart-button_5_rc > form:nth-child(1) > button').then(($btn) => {
            // Verifica si el botón está habilitado
            if ($btn.is(':enabled')) {
                // Si el botón está habilitado, realiza una acción, como hacer clic
                cy.wrap($btn).click();
            } else {
                // Si el botón está deshabilitado, realiza una acción alternativa
                cy.log('El botón está deshabilitado. Realizando acción alternativa.');
                // Aquí puedes agregar la lógica para la acción alternativa
                cy.get('#product_hero_add_to_cart_button-default-product-hero-add-to-cart-button_5_rc > form:nth-child(2) > button', { timeout: 1000 })
                    .click({ force: true });
            }
        });
  
        // Verificar que el carrito se ha desplegado
        cy.get('#cart', { timeout: 10000 }).should('be.visible');


        // Cerrar el carrito
        cy.get('#cart > div > div.zUHyhS7e > div.mhTDcJGU > label > svg', { timeout: 10000 })
            .should('be.visible')
            .click({force: true});
       // cy.wait(2000);


        // Abrir nuevamente el carrito
        cy.get('#cart-icon-bubble > svg', { timeout: 10000 })
            //.should('be.visible')
            .click({ force: true });
        //cy.wait(2000);
  
        // Hacer clic en checkout
        cy.get('#checkout_button-checkout_button_2 > form > .e1yuB0Es', { timeout: 10000 })
            //.should('be.visible')
          .should('not.be.disabled')
            .click({ force: true });
  
        // Esperar redirección y validar que está en la página de checkout
       //cy.wait(2000);
        cy.url().should('include', '/checkout');
  
        // Manejo de redirección fallida o error en el checkout
        cy.wait('@checkoutRequest').then((interception) => {
            if (interception.response.statusCode !== 200) {
                cy.log('Redirección o solicitud de checkout falló. Redirigiendo al carrito.');
                cy.go('back'); // Regresar al carrito si algo falla
            }

            cy.wait(1000);
        });
      });
    });
  });



//revisar el git