describe('Pruebas en dispositivos de escritorio y móviles en www.comfrt.com', () => {
    const devices = [
      //{ name: 'Desktop 1920x1080', width: 1920, height: 1080 },
     { name: 'iPhone 15 Pro Max', width: 430, height: 932 }
    ];
  
    devices.forEach((device) => {
      it(`Prueba en el dispositivo ${device.name}`, () => { // Se corrigió la interpolación de texto en `it(...)`
        cy.intercept('GET', '**/private_access_tokens*', {
            statusCode: 200,
            body: { token: 'fake-token' }
        }).as('mockPrivateAccessToken');
  
        cy.viewport(device.width, device.height);
        cy.visit('https://comfrt.com/products/french-terry-oversized-tee');  
        
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
        cy.on('uncaught:exception', (err) => {
            if (err.message.includes('gtag is not a function')) {
                return false;  
            }
            return true;  
        });

        // Interactúa con los colores
        cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(1) > div.v26a1W51 > label:nth-child(2) > a', { timeout: 10000 })
          .should('be.visible')
          .click({ force: true });

        cy.wait(2000);

        cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(1) > div.v26a1W51 > label:nth-child(5) > a', { timeout: 10000 })
          .should('be.visible')
          .click({ force: true });

        cy.wait(2000);

        // Interactúa con las tallas
        cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(2) > div.v26a1W51 > label:nth-child(1) > a > span', { timeout: 10000 })
          .should('be.visible')
          .click({ force: true });

        cy.wait(2000);

        cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(2) > div.v26a1W51 > label:nth-child(4) > a > span', { timeout: 10000 })
          .should('be.visible')
          .click({ force: true });

        cy.wait(2000);

        // Selecciona el botón de add to cart o pre-order según disponibilidad
        cy.get('#product_hero_add_to_cart_button-default-product-hero-add-to-cart-button_5_rc > form:nth-child(1) > button').then(($btn) => {
            if ($btn.is(':enabled')) {
                cy.wrap($btn).click();
            } else {
                cy.log('El botón está deshabilitado. Realizando acción alternativa.');
                cy.get('#product_hero_add_to_cart_button-default-product-hero-add-to-cart-button_5_rc > form:nth-child(2) > button', { timeout: 1000 })
                    .click({ force: true });
            }
        });

        // Verificar que el carrito se ha desplegado
        cy.get('#cart', { timeout: 10000 }).should('be.visible');

        // Obtener el input de cantidad en el carrito
        cy.get('.JaPNtHML').as('cantidad'); 
        cy.get('.RyV2qSnH').as('botonesCantidad');

        cy.get('@cantidad')
          .invoke('val')
          .then((valorInicial) => {
            const cantidadInicial = parseInt(valorInicial);

            // Hacer clic en el botón de aumentar cantidad
            cy.get('@botonesCantidad').eq(1)
              .click({ force: true });

            cy.get('@cantidad')
              .invoke('val')
              .should('eq', String(cantidadInicial + 1)); // Corrección en la comparación

            // Hacer clic en el botón de disminuir cantidad
            cy.get('@botonesCantidad').eq(0)
              .should('be.visible')
              .click();

            cy.get('@cantidad')
              .invoke('val')
              .should('eq', String(cantidadInicial)); // Corrección en la comparación

            cy.wait(2000);
        });

        // Cerrar el carrito
        cy.get('#cart > div > div.zUHyhS7e > div.mhTDcJGU > label > svg', { timeout: 10000 })
            .should('be.visible')
            .click();

        cy.wait(2000);

        // Ir a otro producto después de cerrar el carrito
        cy.visit('https://comfrt.com/products/the-camo-paw-hoodie');  
        cy.wait(2000);

        // Interactuar con colores y tallas
        cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(1) > div.v26a1W51 > label:nth-child(2) > a', { timeout: 10000 })
          .should('be.visible')
          .click({ force: true });

        cy.wait(2000);

        cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(2) > div.v26a1W51 > label:nth-child(1) > a > span', { timeout: 10000 })
          .should('be.visible')
          .click({ force: true });

        cy.wait(2000);

        // Agregar al carrito y verificar
        cy.get('#product_hero_add_to_cart_button-default-product-hero-add-to-cart-button_5_rc > form:nth-child(1) > button').then(($btn) => {
            if ($btn.is(':enabled')) {
                cy.wrap($btn).click();
            } else {
                cy.log('El botón está deshabilitado. Realizando acción alternativa.');
                cy.get('#product_hero_add_to_cart_button-default-product-hero-add-to-cart-button_5_rc > form:nth-child(2) > button', { timeout: 1000 })
                    .click({ force: true });

                cy.get('#cart', { timeout: 1000 }).should('be.visible');
            }
        });

        // Cerrar y abrir el carrito
        cy.get('#cart > div > div.zUHyhS7e > div.mhTDcJGU > label > svg', { timeout: 10000 })
            .should('be.visible')
            .click();
        cy.wait(2000);

        cy.get('#cart-icon-bubble > svg', { timeout: 10000 })
            .should('be.visible')
            .click();
        cy.wait(2000);

        // Hacer clic en checkout
        cy.get('#checkout_button-checkout_button_1 > form > button', { timeout: 10000 })
            .should('be.visible')
            .should('not.be.disabled')
            .click({ force: true });

        cy.wait(2000);
        cy.url().should('include', '/checkout');

        // Manejo de redirección fallida o error en el checkout
        cy.wait('@checkoutRequest').then((interception) => {
            if (interception.response.statusCode !== 200) {
                cy.log('Redirección o solicitud de checkout falló. Redirigiendo al carrito.');
                cy.go('back'); 
            }
        });
      });
    });
});


//En desktop funciona todo Ok, hay q cerrar el popup mannualmente porque sino da error. 
//En mobile da un error en la línea para aumentar y disminuir cantidad