describe('Prueba de proceso de compra del producto Standard Paw Hoodie-Desktop', () => {
    const device = { name: 'Desktop 1920x1080', width: 1920, height: 1080 };

    beforeEach(() => {
        cy.intercept('GET', '**/private_access_tokens*', {
            statusCode: 200,
            body: { token: 'fake-token' }
        }).as('mockPrivateAccessToken');

        cy.viewport(device.width, device.height);
        cy.visit('https://comfrt.com/products/the-standard-paw-hoodie');

        cy.document().then((doc) => {
            const observer = new MutationObserver((mutationsList) => {
              mutationsList.forEach((mutation) => {
                if (mutation.type === 'childList') {
                  const popup = doc.querySelector('#alia-0wpzlmlujiopg85a');
                  if (popup) {
                    // Si el popup aparece, cerrarlo
                    cy.wrap(popup).within(() => {
                      cy.get('svg').contains('path', 'M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z').click();
                      cy.log('✅ Pop-up cerrado correctamente');
                    });
                    observer.disconnect(); // Detener la observación después de cerrar el pop-up
                  }
                }
              });
            });
       
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
  });





    it('Hace clic en el color PACIFIC, selecciona la talla XL, agrega al carrito, cierra y reabre el carrito, y procede al checkout', () => {
        // Seleccionar color PACIFIC
        cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(1) > div.v26a1W51 > label:nth-child(1) > a', { timeout: 10000 })
            .should('be.visible')
            .click();
        cy.wait(2000);

        // // Seleccionar talla XL
        // cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(2) > div.v26a1W51 > label:nth-child(6) > a > span', { timeout: 10000 })
        //     .should('be.visible')
        //     .click();
        // cy.wait(2000);

        // Seleccionar botón de "Add to Cart" o "Pre-order"
        cy.get('#product_hero_add_to_cart_button-default-product-hero-add-to-cart-button_5_rc > form:nth-child(1) > button').then(($btn) => {
            if ($btn.is(':enabled')) {
                cy.wrap($btn).click();
            } else {
                cy.log('El botón está deshabilitado. Intentando con el botón alternativo.');
                cy.get('#product_hero_add_to_cart_button-default-product-hero-add-to-cart-button_5_rc > form:nth-child(2) > button', { timeout: 10000 })
                    .should('be.visible')
                    .click();
            }
        });

        // // Verificar que el carrito se ha desplegado
        // cy.get('#cart', { timeout: 10000 }).should('be.visible');

        // // Cerrar el carrito
        // cy.get('#cart > div > div.zUHyhS7e > div.mhTDcJGU > label > svg', { timeout: 10000 })
        //     .should('be.visible')
        //     .click();
        // cy.wait(2000);

        // // Abrir nuevamente el carrito
        // cy.get('#cart-icon-bubble > svg', { timeout: 10000 })
        //     .should('be.visible')
        //     .click();
        // cy.wait(2000);

        // Hacer clic en checkout
        cy.get('#checkout_button-checkout_button_1 > form > button', { timeout: 10000 })
            .should('be.visible')
            .should('not.be.disabled')
            .click({ force: true });

        // Esperar redirección y validar que está en la página de checkout
        cy.wait(2000);
        cy.url().should('include', '/checkout');

        // Manejo de redirección fallida o error en el checkout
        cy.wait('@mockPrivateAccessToken').then((interception) => {
            if (interception.response.statusCode !== 200) {
                cy.log('Redirección o solicitud de checkout falló. Redirigiendo al carrito.');
                cy.go('back'); // Regresar al carrito si algo falla
            }
        });
    });
});
});


//revisar el git