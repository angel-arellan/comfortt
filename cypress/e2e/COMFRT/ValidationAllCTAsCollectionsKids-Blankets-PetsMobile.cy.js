
// describe('Prueba de validación de todos los CTA de las colecciones KIDS-BLANKETS-PETS-Mobile', () => {
//     const devices = [
//       { name: 'iPhone 15 Pro Max', width: 430, height: 932 },
//       /*{ name: 'Samsung Galaxy S24', width: 412, height: 915 }*/
//     ];
  
//     devices.forEach((device) => {
//      it(`Debería abrir el menú hamburguesa y navegar en ${device.name}`, () => {
//         // Configura la emulación para el dispositivo actual
//         cy.viewport(device.width, device.height);
//         cy.visit('https://www.comfrt.com');
  
//         // Espera a que el ícono del menú hamburguesa sea visible y haz clic en él
//         cy.get('#default_header-default-header_0 > header > label.hamburger > svg', { timeout: 10000 })
//           .should('be.visible')
//           .click({ force: true });
  
//         // Haz clic en la categoría "Kids"
//         cy.get('#menu-default > a:nth-child(4)', { timeout: 10000 })
//           .should('be.visible')
//           .click({ force: true });
  
//         // Verifica que la página de "Kids" se haya cargado correctamente
//         cy.url().should('include', 'content/kids');
  
//         // Desplázate y espera
//         cy.scrollTo('bottom');
//         cy.wait(2000);
//         cy.scrollTo('center');
//         cy.wait(2000);
//         cy.scrollTo('top');
//         cy.wait(2000);
  
//         // Haz clic en el CTA "Shop Now"
//         cy.get('#home_hero-kids-hero-draft_0 > div > div > a > button', { timeout: 10000 })
//           //.should('be.visible')
//           .click({ force: true });
  
//         // Verifica que la página se haya cargado correctamente
//         cy.url().should('include', 'collections/kids');
  
//         // Verifica que todos los elementos sean visibles
//         cy.get('#collections_with_pagination-default-collections-with-pagination_0')
//           .should('be.visible');
        
//         cy.wait(2000);
  
//         // Desplázate y espera
//         cy.scrollTo('bottom');
//         cy.wait(2000);
//         cy.scrollTo('center');
//         cy.wait(2000);
//         cy.scrollTo('top');
//         cy.wait(2000);
  
//         // Vuelve a la página anterior
//         cy.go('back'); 
//         cy.url().should('include', 'content/kids'); // Verifica que regresó correctamente

//         // Haz clic en el CTA "Shop All" en la sección Shop Kids Hoodies
//         cy.get('#featured_products_section-shop-kids-section-draft_2 > div > div.vMPtAMR0 > a > button', { timeout: 10000 })
//           .should('be.visible')
//           .click({ force: true });
  
//         // Verifica que la página se haya cargado correctamente
//         cy.url().should('include', 'collections/kids');
  
//         // Verifica que todos los elementos sean visibles
//         cy.get('#collections_with_pagination-default-collections-with-pagination_0')
//           .should('be.visible');
        
//         cy.wait(2000);
  
//         // Desplázate y espera
//         cy.scrollTo('bottom');
//         cy.wait(2000);
//         cy.scrollTo('center');
//         cy.wait(2000);
//         cy.scrollTo('top');
//         cy.wait(2000);
  
//         // Vuelve a la página anterior
//         cy.go('back'); 
//         cy.url().should('include', 'content/kids'); // Verifica que regresó correctamente
//         cy.contains('Shop Kids Sweatpants', { timeout: 10000 }) // Busca el texto en la página
//         .scrollIntoView() // Hace scroll hasta ese texto
//         .should('be.visible'); // Verifica que es visible
//         cy.wait(2000)


//         // Haz clic en el CTA "Shop All" en la sección Shop Kids Sweatpants
//         cy.get('#featured_products_section-shop-kids-sweatpants_3 > div > div.vMPtAMR0 > a > button', { timeout: 10000 })
//         .should('be.visible')
//         .click({ force: true });

//         // Verifica que la página se haya cargado correctamente
//         cy.url().should('include', 'collections/kids');

//         // Verifica que todos los elementos sean visibles
//         cy.get('#collections_with_pagination-default-collections-with-pagination_0')
//         .should('be.visible');

//         cy.wait(2000);

//         // Desplázate y espera
//         cy.scrollTo('bottom');
//         cy.wait(2000);                              
//         cy.scrollTo('center');
//         cy.wait(2000);
//         cy.scrollTo('top');
//         cy.wait(2000);

    

//         // Vuelve a la página anterior
//         cy.go('back'); 
//         cy.url().should('include', 'content/kids'); // Verifica que regresó correctamente
//         cy.contains('BEST SELLER', { timeout: 10000 }) // Busca el texto en la página
//         .scrollIntoView() // Hace scroll hasta ese texto
//         .should('be.visible'); // Verifica que es visible
//         cy.wait(2000)
        
//         // Haz clic en el CTA "Shop now" en la sección BEST SELLER
//         cy.get('#home_featured_section-kids-featured-draft_6 > section > div:nth-child(1) > div.btVi5MCm > a', { timeout: 10000 })
//         .should('be.visible')
//         .click({ force: true });

//         // Verifica que la página se haya cargado correctamente
//         cy.url().should('include', 'products/signature-kids-hoodie');

//         // Verifica que todos los elementos sean visibles
//         cy.get('body')
//         .should('be.visible');

//         cy.wait(2000);

//         // Desplázate y espera
//         cy.scrollTo('bottom');
//         cy.wait(2000);                              
//         cy.scrollTo('center');
//         cy.wait(2000);
//         cy.scrollTo('top');
//         cy.wait(2000);



//         // Vuelve a la página anterior
//         cy.go('back'); 
//         cy.url().should('include', 'content/kids'); // Verifica que regresó correctamente
//         cy.contains('MATCHING MOMENTS', { timeout: 10000 }) // Busca el texto en la página
//         .scrollIntoView() // Hace scroll hasta ese texto
//         .should('be.visible'); // Verifica que es visible
//         cy.wait(2000)
        
//         // Haz clic en el CTA "Shop now" en la sección BEST SELLER
//         cy.get('#home_featured_section-kids-featured-draft_6 > section > div:nth-child(2) > div.btVi5MCm > a', { timeout: 10000 })
//         .should('be.visible')
//         .click({ force: true });

//         // Verifica que la página se haya cargado correctamente
//     //    cy.url().should('include', 'products/signature-kids-hoodie');

//         // Verifica que todos los elementos sean visibles
//         cy.get('body')
//         .should('be.visible');

//         cy.wait(2000);

//         // Desplázate y espera
//         cy.scrollTo('bottom');
//         cy.wait(2000);                              
//         cy.scrollTo('center');
//         cy.wait(2000);
//         cy.scrollTo('top');
//         cy.wait(2000);

//       }); 

//       it(`Debería abrir el menú hamburguesa y navegar en Blankets en ${device.name}`, () => {
//         // Configura la emulación para el dispositivo actual
//         cy.viewport(device.width, device.height);
//         cy.visit('https://www.comfrt.com');
  
//         // Espera a que el ícono del menú hamburguesa sea visible y haz clic en él
//         cy.get('#default_header-default-header_0 > header > label.hamburger > svg', { timeout: 10000 })
//           .should('be.visible')
//           .click({ force: true });
  
//         // Haz clic en la categoría "Blankets"
//         cy.get('#menu-default > a:nth-child(6)', { timeout: 10000 })
//           .should('be.visible')
//           .click({ force: true });

//           // Verifica que la página de "Blankets" se haya cargado correctamente
//         cy.url().should('include', 'content/blankets');
  
//         // Desplázate y espera
//         cy.scrollTo('bottom');
//         cy.wait(2000);
//         cy.scrollTo('center');
//         cy.wait(2000);
//         cy.scrollTo('top');
//         cy.wait(2000);
  
//         // Haz clic en el CTA "Shop Now"
//         cy.get('#home_hero-weighted-blanket-landing-page-hero_0 > div > div > a > button', { timeout: 10000 })
//           .should('be.visible')
//           .click({ force: true });
  
//         // Verifica que la página se haya cargado correctamente
//         cy.url().should('include', 'products/the-dreamer-blanket');

//         // Verifica que todos los elementos sean visibles
//         cy.get('body')
//           .should('be.visible');
        
//         cy.wait(2000);
  
//         // Desplázate y espera
//         cy.scrollTo('bottom');
//         cy.wait(2000);
//         cy.scrollTo('center');
//         cy.wait(2000);
//         cy.scrollTo('top');
//         cy.wait(2000);
  
//         // Vuelve a la página anterior
//         cy.go('back'); 
//         cy.url().should('include', 'content/blankets'); // Verifica que regresó correctamente
//         cy.contains('The CuddleCloud Blanket', { timeout: 10000 }) // Busca el texto en la página
//         .scrollIntoView() // Hace scroll hasta ese texto
//         .should('be.visible'); // Verifica que es visible
//         cy.wait(2000)

//         // Haz clic en el CTA "Shop Now" en la sección The CuddleCloud Blanket
//         cy.get('#home_featured_section-blankets-featured-section-draft_5 > section > div:nth-child(1) > div.btVi5MCm > a', { timeout: 10000 })
//         .should('be.visible')
//         .click({ force: true });

//         // Verifica que la página se haya cargado correctamente
//         cy.url().should('include', 'products/cuddlecloud-weighted-blanket');

//         // Verifica que todos los elementos sean visibles
//         cy.get('body')
//         .should('be.visible');

//         cy.wait(2000);

//         // Desplázate y espera
//         cy.scrollTo('bottom');
//         cy.wait(2000);                              
//         cy.scrollTo('center');
//         cy.wait(2000);
//         cy.scrollTo('top');
//         cy.wait(2000);

//         // Vuelve a la página anterior
//         cy.go('back'); 
//         cy.url().should('include', 'content/blankets'); // Verifica que regresó correctamente
//         cy.contains('The Perfect Gift', { timeout: 10000 }) // Busca el texto en la página
//         .scrollIntoView() // Hace scroll hasta ese texto
//         .should('be.visible'); // Verifica que es visible
//         cy.wait(2000)
        
//         // Haz clic en el CTA "Shop Now" en la sección The Perfect Gift
//         cy.get('#home_featured_section-blankets-featured-section-draft_5 > section > div:nth-child(2) > div.btVi5MCm > a', { timeout: 10000 })
//         .should('be.visible')
//         .click({ force: true });

//         // Verifica que la página se haya cargado correctamente
//         cy.url().should('include', 'products/the-dreamer-blanket');

//         // Verifica que todos los elementos sean visibles
//         cy.get('body')
//         .should('be.visible');

//         cy.wait(2000);

//         // Desplázate y espera
//         cy.scrollTo('bottom');
//         cy.wait(2000);                              
//         cy.scrollTo('center');
//         cy.wait(2000);
//         cy.scrollTo('top');
//         cy.wait(2000);
//       });



//       it(`Debería abrir el menú hamburguesa y navegar en Pets en ${device.name}`, () => {
//         // Configura la emulación para el dispositivo actual
//         cy.viewport(device.width, device.height);
//         cy.visit('https://www.comfrt.com');
  
//         // Espera a que el ícono del menú hamburguesa sea visible y haz clic en él
//         cy.get('#default_header-default-header_0 > header > label.hamburger > svg', { timeout: 10000 })
//           .should('be.visible')
//           .click({ force: true });
  
//         // Haz clic en la categoría "Pets"
//         cy.get('#menu-default > a:nth-child(8)', { timeout: 10000 })
//           .should('be.visible')
//           .click({ force: true });

//           // Verifica que la página de "Pets" se haya cargado correctamente
//         cy.url().should('include', 'content/pets');

//         // Desplázate y espera
//         cy.scrollTo('bottom');
//         cy.wait(2000);
//         cy.scrollTo('center');
//         cy.wait(2000);
//         cy.scrollTo('top');
//         cy.wait(2000);
  
//         // Haz clic en el CTA "Shop Now"
//         cy.get('#home_hero-pets-hero-draft_0 > div > div > a > button', { timeout: 10000 })
//           .should('be.visible')
//           .click({ force: true });
  
//         // Verifica que la página se haya cargado correctamente
//         cy.url().should('include', 'collections/paw-hoodies');

//         // Verifica que todos los elementos sean visibles
//         cy.get('#collections_with_pagination-default-collections-with-pagination_0')
//           .should('be.visible');
        
//         cy.wait(2000);
  
//         // Desplázate y espera
//         cy.scrollTo('bottom');
//         cy.wait(2000);
//         cy.scrollTo('center');
//         cy.wait(2000);
//         cy.scrollTo('top');
//         cy.wait(2000);

//         // Vuelve a la página anterior
//         cy.go('back'); 
//         cy.url().should('include', 'content/pets'); // Verifica que regresó correctamente
//         cy.contains('Shop Pets', { timeout: 10000 }) // Busca el texto en la página
//         .scrollIntoView() // Hace scroll hasta ese texto
//         .should('be.visible'); // Verifica que es visible
//         cy.wait(2000)
        
//         // Haz clic en el CTA "Shop All" en la sección Shop Pets
//         cy.get('#featured_products_section-shop-pets-draft_2 > div > div.vMPtAMR0 > a > button', { timeout: 10000 })
//         .should('be.visible')
//         .click({ force: true });

//         // Verifica que la página se haya cargado correctamente
//         cy.url().should('include', 'collections/paw-hoodies');

//         // Verifica que todos los elementos sean visibles
//         cy.get('#collections_with_pagination-default-collections-with-pagination_0')
//         .should('be.visible');

//         cy.wait(2000);

//         // Desplázate y espera
//         cy.scrollTo('bottom');
//         cy.wait(2000);                              
//         cy.scrollTo('center');
//         cy.wait(2000);
//         cy.scrollTo('top');
//         cy.wait(2000);

//         // Vuelve a la página anterior
//         cy.go('back'); 
//         cy.url().should('include', 'content/pets'); // Verifica que regresó correctamente
//         cy.contains('MATCHING MOMENTS', { timeout: 10000 }) // Busca el texto en la página
//         .scrollIntoView() // Hace scroll hasta ese texto
//         .should('be.visible'); // Verifica que es visible
//         cy.wait(2000)
        
//         // Haz clic en el CTA "Shop now" en la sección MATCHING MOMENTS
//         cy.get('#home_featured_section-pets-featured-section-draft_5 > section > div:nth-child(1) > div.btVi5MCm > a', { timeout: 10000 })
//         .should('be.visible')
//         .click({ force: true });

//         // Verifica que la página se haya cargado correctamente
//         cy.url().should('include', 'products/the-standard-paw-hoodie');

//         // Verifica que todos los elementos sean visibles
//         cy.get('body')
//         .should('be.visible');

//         cy.wait(2000);

//         // Desplázate y espera
//         cy.scrollTo('bottom');
//         cy.wait(2000);                              
//         cy.scrollTo('center');
//         cy.wait(2000);
//         cy.scrollTo('top');
//         cy.wait(2000);


//         // Vuelve a la página anterior
//         cy.go('back'); 
//         cy.url().should('include', 'content/pets'); // Verifica que regresó correctamente
//         cy.contains('COMING SOON', { timeout: 10000 }) // Busca el texto en la página
//         .scrollIntoView() // Hace scroll hasta ese texto
//         .should('be.visible'); // Verifica que es visible
//         cy.wait(2000)
        
//         // Haz clic en el CTA "Shop now" en la sección MATCHING MOMENTS
//         cy.get('#home_featured_section-pets-featured-section-draft_5 > section > div:nth-child(2) > div.btVi5MCm > a', { timeout: 10000 })
//         .should('be.visible')
//         .click({ force: true });

//         // Verifica que la página se haya cargado correctamente
//         cy.url().should('include', 'products/the-camo-paw-hoodie');

//         // Verifica que todos los elementos sean visibles
//         cy.get('body')
//         .should('be.visible');

//         cy.wait(2000);

//         // Desplázate y espera
//         cy.scrollTo('bottom');
//         cy.wait(2000);                              
//         cy.scrollTo('center');
//         cy.wait(2000);
//         cy.scrollTo('top');
//         cy.wait(2000);

//         // Vuelve a la página anterior
//         cy.go('back');

//         //Vuelve a la home
//         cy.get('#default_header-default-header_0 > header > a > img', { timeout: 10000 })
//         .should('be.visible')
//         .click({ force: true });

//         // Verifica que la página se haya cargado correctamente
//         cy.url().should('include', 'https://comfrt.com/');
//     });
//   });
// });

// ////


//revisar el git