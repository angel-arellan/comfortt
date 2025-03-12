// describe('Interacción con el Menú Hamburguesa en dispositivos móviles', () => {
//     const devices = [
//         { name: 'iPhone 15 Pro Max', width: 430, height: 932 },
//         //{ name: 'Samsung Galaxy S24', width: 412, height: 915 }
//     ];



//     devices.forEach((device) => {
//         it(`Debería abrir el menú hamburguesa y navegar en ${device.name}`, () => {
//             // Configura la emulación para el dispositivo actual
//             cy.viewport(device.width, device.height);
//             cy.visit('https://www.comfrt.com');

         

//             // Espera a que el ícono del menú hamburguesa sea visible y haz clic en él
//             cy.get('#default_header-default-header_0 > header > label.hamburger > svg', { timeout: 10000 })
//                 .should('be.visible')
//                 .click({ force: true });

         

//             // Haz clic en la categoría "Shop All"
//             cy.get('[href="https://comfrt.com/collections/all-products"]', { timeout: 10000 })
//                 .should('be.visible')
//                 .click({ force: true });

          
//             // Verifica que la página de "Shop All" se haya cargado correctamente
//             cy.url().should('include', '/collections/all-products');

//             cy.wait(2000);

//             // Reabre el menú hamburguesa
//             cy.get('#default_header-default-header_0 > header > label.hamburger > svg', { timeout: 10000 })
//                 .should('be.visible')
//                 .click({ force: true });

          

//             cy.wait(2000);

//             // Haz clic en la categoría "Hoodies"
//             cy.get(':nth-child(2) > .menuLabel > :nth-child(1)', { timeout: 10000 })
//                 .should('be.visible')
//                 .click({ force: true });

            

//             // Haz clic en la subcategoría "All Hoodies"
//             cy.get('[href="https://comfrt.com/collections/hoodies"]', { timeout: 10000 })
//                 .should('be.visible')
//                 .click({ force: true });

//             // Verifica la carga de "All Hoodies"
//             cy.url().should('include', '/collections/hoodies');

//             cy.wait(2000);

//             // Reabre el menú hamburguesa
//             cy.get('#default_header-default-header_0 > header > label.hamburger > svg', { timeout: 10000 })
//                 .should('be.visible')
//                 .click({ force: true });

            

//             cy.wait(2000);

//             // Haz clic en la categoría "Sweatpants"
//             cy.get(':nth-child(3) > .menuLabel > :nth-child(1)', { timeout: 10000 })
//                 .should('be.visible')
//                 .click({ force: true });

       

//             // Haz clic en la subcategoría "All Sweatpants"
//             cy.get('[href="https://comfrt.com/collections/sweatpants"]', { timeout: 10000 })
//                 .should('be.visible')
//                 .click({ force: true });

//             // Verifica la carga de "All Sweatpants"
//             cy.url().should('include', '/collections/sweatpants');

//             cy.wait(2000);

//             // Reabre el menú hamburguesa
//             cy.get('#default_header-default-header_0 > header > label.hamburger > svg', { timeout: 10000 })
//                 .should('be.visible')
//                 .click({ force: true });

           

//             cy.wait(2000);

//             // Haz clic en la categoría "Kids"
//             cy.get('[href="https://comfrt.com/content/kids"]', { timeout: 10000 })
//                 .should('be.visible')
//                 .click({ force: true });

           

//             // Verifica la carga de "Kids"
//             cy.url().should('include', '/content/kids');

//             cy.wait(2000);

//             // Reabre el menú hamburguesa
//             cy.get('#default_header-default-header_0 > header > label.hamburger > svg', { timeout: 10000 })
//                 .should('be.visible')
//                 .click({ force: true });

         

//             cy.wait(2000);

//             // Haz clic en la categoría "Loungewear"
//             cy.get('[href="https://comfrt.com/collections/loungewear"]', { timeout: 10000 }) 
//                 .should('be.visible')
//                 .click({ force: true });

         

//             // Verifica la carga de "Loungewear"
//             cy.url().should('include', '/collections/loungewear');

//             cy.wait(2000);

//             // Reabre el menú hamburguesa
//             cy.get('#default_header-default-header_0 > header > label.hamburger > svg', { timeout: 10000 })
//                 .should('be.visible')
//                 .click({ force: true });

          

//             cy.wait(2000);

//             // Haz clic en la categoría "Blankets"
//             cy.get('#menu-default > a:nth-child(6)', { timeout: 10000 }) 
//                 .should('be.visible')
//                 .click({ force: true });

//             // Verifica la carga de "Blankets"
//             cy.url().should('include', '/content/blankets');

//             cy.wait(2000);

//             // Reabre el menú hamburguesa
//             cy.get('#default_header-default-header_0 > header > label.hamburger > svg', { timeout: 10000 })
//                 .should('be.visible')
//                 .click({ force: true });



//             cy.wait(2000);

//             // Haz clic en la categoría "Accessories"
//             cy.get('#menu-default > div:nth-child(7) > label', { timeout: 10000 })
//                 .should('be.visible')
//                 .click({ force: true });

//                 cy.get('#menu-default > div:nth-child(7) > div > a:nth-child(2)', { timeout: 10000 })
//                 .should('be.visible')
//                 .click({ force: true });

//             // Verifica la carga de "All Accessories"
//             cy.url().should('include', '/collections/accessories');

//             cy.wait(2000);

//             // Reabre el menú hamburguesa
//             cy.get('#default_header-default-header_0 > header > label.hamburger > svg', { timeout: 10000 })
//                 .should('be.visible')
//                 .click({ force: true });

//             cy.wait(2000);

//             // Haz clic en la categoría "Pets"
//             cy.get('[href="https://comfrt.com/content/pets"]', { timeout: 10000 }) 
//                 .should('be.visible')
//                 .click({ force: true });


//             // Verifica la carga de "Pets"
//             cy.url().should('include', '/content/pets');

//             cy.wait(2000);

//          // Desplázate y espera
//           cy.scrollTo('bottom');
//           cy.wait(2000);
//           cy.scrollTo('top');

//         // Reabre el menú hamburguesa
//         cy.get('#default_header-default-header_0 > header > label.hamburger > svg', { timeout: 10000 })
//        .should('be.visible')
//        .click({ force: true });

//         cy.wait(3000);




// // Verifica que la página cargó correctamente
// cy.url().should('include', '/pages/ambassador');

// // Desplázate y espera
// cy.scrollTo('bottom');
// cy.wait(2000);
// cy.scrollTo('top');

// // Reabre el menú hamburguesa
// cy.get('#default_header-default-header_0 > header > label.hamburger > svg', { timeout: 10000 })
//   .should('be.visible')
//   .click({ force: true }); 

// // Espera a que el ícono del menú hamburguesa se cierre*/
//     });
// });
// });