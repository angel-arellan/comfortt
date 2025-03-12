describe('Prueba en dispositivos móviles y desktop en www.comfrt.com', () => {
    const devices = [
        //{ name: 'iPhone 15 Pro Max', width: 430, height: 932 },
        //{ name: 'Samsung Galaxy S24', width: 412, height: 915 },
        { name: 'Desktop 1920x1080', width: 1920, height: 1080 }
    ];

    devices.forEach((device) => {
        it(`Prueba en el dispositivo ${device.name}`, () => {
            cy.intercept('GET', '**/private_access_tokens*', {
                statusCode: 200,
                body: { token: 'fake-token' }
            }).as('mockPrivateAccessToken');


            // Establecer el viewport antes de visitar la página
            cy.viewport(device.width, device.height);

            cy.visit('https://www.comfrt.com');




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
                if (err.message.includes('gtag is not a function')) {
                    return false;  // Ignora errores relacionados con gtag
                }
                return true;  // Deja que otros errores se manejen de manera predeterminada
            });

            

            // Haz clic en "Shop Your Hoodie"
            cy.get('#home_hero-shop-your-hoodie_0 > div > div > a > button', { timeout: 10000 })
                .click({ force: true });

            // Verifica que la URL es la correcta
            cy.url().should('include', '/collections/hoodies');

            // Espera para asegurar carga de productos
            cy.wait(2000);

            cy.contains('Tranquil Hoodie', { timeout: 10000 }).scrollIntoView();

            // Interactúa con el selector de colores de Tranquil Hoodie™
            cy.get(':nth-child(5) > .VtFAkf4R > .SJQFNexH > .v26a1W51 > :nth-child(2) > .N1cHTXJ7 > .XSvSsyWQ', { timeout: 10000 })
                .click({ force: true });
            cy.wait(2000);

            cy.get(':nth-child(5) > .VtFAkf4R > .SJQFNexH > .v26a1W51 > :nth-child(3) > .N1cHTXJ7 > .XSvSsyWQ', { timeout: 10000 })
            .click({ force: true });
            cy.wait(2000);

            cy.get(':nth-child(5) > .VtFAkf4R > .SJQFNexH > .v26a1W51 > :nth-child(8) > .N1cHTXJ7 > .XSvSsyWQ', { timeout: 10000 })
                .click({ force: true });
            cy.wait(2000);

            // Espera y clickea en la imagen del hoodie seleccionado
            cy.get('#collections_with_pagination-default-collections-with-pagination_0 > div > div > div:nth-child(5) > a > div.tK5FSRVg > img', { timeout: 10000 })
                .should('be.visible')
                .click({ force: true });

            // Verifica que se abrió la página del producto 
            cy.url().should('include', 'products/tranquil-hoodie?variant=44022218457132');

            // // Hacer scroll en la página del producto
            // cy.scrollTo('bottom'); 
            // cy.wait(2000);
            // cy.scrollTo('top'); 
            // cy.wait(2000);



            // Interactuar con las tallas
            // cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(3) > div.v26a1W51 > label:nth-child(1) > a > span', { timeout: 5000 })
            //     .click({ force: true });
         //   cy.wait(2000);

        //     cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(3) > div.v26a1W51 > label:nth-child(3) > a > span', { timeout: 5000 })
        //     .click({ force: true });
        // cy.wait(2000)

        //     cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(3) > div.v26a1W51 > label:nth-child(5) > a > span', { timeout: 5000 })
        //         .click({ force: true });
        //     cy.wait(2000);


        //     cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(3) > div.v26a1W51 > label:nth-child(6) > a > span', { timeout: 5000 })
        //     .click({ force: true });
        // cy.wait(2000);


        //     cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(3) > div.v26a1W51 > label:nth-child(7) > a > span', { timeout: 5000 })
        //         .click({ force: true });
        //     cy.wait(2000);


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
 




        //      // Verificar que el carrito se ha desplegado
        //     cy.get('#cart', { timeout: 5000 }).should('be.visible');
            
        //      // Cerrar el carrito
        //      cy.get('.f7qg_6Ph', { timeout: 10000 })
        //      .should('be.visible')
        //      .should('not.be.disabled')
        //      .click();
        //  cy.wait(2000); 


           

        //     // Abrir nuevamente el carrito
        //     cy.get('.eAZIp8me', { timeout: 10000 })
        //         .should('be.visible')
        //         .should('not.be.disabled')
        //         .click();
        //     cy.wait(2000);

            // Hacer clic en checkout
            cy.get('#checkout_button-checkout_button_1 > form > button', { timeout: 10000 })
                .should('be.visible')
                .should('not.be.disabled')
                .click({ force: true });

            // Esperar redirección y validar que está en la página de checkout
            cy.wait(2000);
            cy.url().should('include', '/checkout');

            cy.wait('@mockPrivateAccessToken').then((interception) => {
                if (interception.response.statusCode !== 200) {
                    cy.log('Redirección o solicitud de checkout falló. Redirigiendo al carrito.');
                    cy.go('back');
                }
            });
        });
    });
});



//está ok todo, ,falta remover popup 