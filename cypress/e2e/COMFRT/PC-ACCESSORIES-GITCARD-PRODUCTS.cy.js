describe('Pruebas en dispositivos de escritorio y móviles en www.comfrt.com', () => {
    const devices = [
      { name: 'Desktop 1920x1080', width: 1920, height: 1080 },
      { name: 'iPhone 15 Pro Max', width: 430, height: 932 }
    ];
  
    devices.forEach((device) => {
      it(`Prueba en el dispositivo ${device.name}`, () => { // Se corrigió la interpolación de texto en `it(...)`
        cy.intercept('GET', '**/private_access_tokens*', {
            statusCode: 200,
            body: { token: 'fake-token' }
        }).as('mockPrivateAccessToken');
  
        cy.viewport(device.width, device.height);
        cy.visit('https://comfrt.com/products/comfrt-e-gift-card');  
        
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

        // Interactúa con los diferentes valores de Giftcards
        cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset > div.v26a1W51 > label:nth-child(2) > a > span', { timeout: 10000 })
          .should('be.visible')
          .click({ force: true });

        cy.wait(2000);

        cy.get(':nth-child(3) > .N1cHTXJ7 > .XSvSsyWQ', { timeout: 10000 })
          .should('be.visible')
          .click({ force: true });

        cy.wait(2000);



        cy.get(':nth-child(4) > .N1cHTXJ7 > .XSvSsyWQ', { timeout: 10000 })
          .should('be.visible')
          .click({ force: true });

        cy.wait(2000);


       
        // cy.get(':nth-child(1) > .N1cHTXJ7 > .XSvSsyWQ', { timeout: 10000 })
        //   .should('be.visible')
        //   .click({ force: true });

        cy.wait(2000);



        // Selecciona el botón de add to cart 
        cy.get('#product_hero_add_to_cart_button-default-product-hero-add-to-cart-button_5_rc > form > button')
        .click({ force: true });
            
      

        // // Verificar que el carrito se ha desplegado
        // cy.get('#cart', { timeout: 10000 }).should('be.visible');

        // // Obtener el input de cantidad en el carrito
        // cy.get('.JaPNtHML').as('cantidad'); 
        // cy.get('.RyV2qSnH').as('botonesCantidad');

        // cy.get('@cantidad')
        //   .invoke('val')
        //   .then((valorInicial) => {
        //     const cantidadInicial = parseInt(valorInicial);

        //     // Hacer clic en el botón de aumentar cantidad
        //     cy.get('@botonesCantidad').eq(1)
        //       .click({ force: true });

        //     cy.get('@cantidad')
        //       .invoke('val')
        //       .should('eq', String(cantidadInicial + 1)); // Corrección en la comparación

        // });

        // // Cerrar el carrito
        // cy.get('#cart > div > div.zUHyhS7e > div.mhTDcJGU > label > svg', { timeout: 10000 })
        //     .should('be.visible')
        //     .click();

        // cy.wait(2000);


       

        

        // // Verificar que el carrito se ha desplegado
        // cy.get('#cart', { timeout: 10000 }).should('be.visible');


        // // Cerrar y abrir el carrito
        // cy.get('#cart > div > div.zUHyhS7e > div.mhTDcJGU > label > svg', { timeout: 10000 })
        //     .should('be.visible')
        //     .click();
        // cy.wait(2000);

        // cy.get('#cart-icon-bubble > svg', { timeout: 10000 })
        //     .should('be.visible')
        //     .click();
        // cy.wait(2000);

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

          //   cy.get('#app > div:nth-child(1) > div > div.cm5pp._5ZebG.FeQiM._1fragemnf._1fragemnb._1fragemt5 > div.nMPKH.iYA3J > button > span > span._4ptW6 > span.a8x1wu2.a8x1wu1._1fragemok._1fragem1t._1fragemkk._1fragemka.a8x1wug.a8x1wuk.a8x1wui._1fragem2i._1fragemsy.a8x1wum.a8x1wul.a8x1wuy > svg', { timeout: 10000 })  
          //  // .should('be.visible')  
          //   .click({ force: true });
          

        });
      });
    });
});
