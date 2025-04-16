describe('Prueba haciendo clic en cada uno de los links del nav bar-Desktop', () => {
    const devices = [
        { name: 'Desktop 1920x1080', width: 1920, height: 1080 },
       // { name: 'Samsung S22', width: 360, height: 780 } // Tamaño típico del S22 en viewport
    ];

    devices.forEach((device) => {
        it(`Prueba haciendo clic en cada uno de los links del nav bar-Desktop ${device.name}`, () => {
            cy.viewport(device.width, device.height); // Configurar el tamaño del dispositivo
            cy.visit('https://www.tualmacen.com.ar'); // Visitar la web
            
            cy.wait(2000); // Esperar que cargue la página

            
             //clic en ENTENDIDO en las cookies
             cy.get('.mt-1 > .cursor-pointer')
             .click({force: true})
             cy.wait(2000);

              ///click en iniciar sesion///
              cy.get('.pl-6').click({ force: true });

              cy.wait(2000);
 

            // Ingresar email
        cy.get('.pt-0 > .pb-2 > .relative > #new-password')
        .should('be.visible')
        .type('angel.arellan@latechfactory.com', { force: true });
 
 
        cy.wait(2000);


      // Ingresar contraseña
      cy.get('.pt-4 > :nth-child(1) > .pb-2 > .relative > #new-password')
        .should('be.visible')
        .type('ang3l.DAN1EL', { force: true });

        cy.wait(2000);

      // Hacer clic en "Iniciar Sesión"
      cy.get('.mt-5 > .shadow-xl')
        .should('be.visible')
        .click({ force: true });


        cy.wait(2000);

        // // click en Popup de Bienvenida de TUalmacen//
        // // Esperar y validar que el popup desapareció
        // cy.get('#__next > main > div:nth-child(2) > div.my-9 > div > div > div.swiper-wrapper > div.swiper-slide.swiper-slide-active > div > a > img', { timeout: 10000 })
        // .click({ force: true });

// Desplázate y espera
        cy.scrollTo('bottom');
        cy.wait(2000);
        cy.scrollTo('top');

// //Hacer clic en la categoria ofertones
// cy.get('.sticky.top-0 > .flex-wrap')
// .should('exist')
// .click({force: true})

// cy.wait(2000);

// //Validar que la url es la correcta
// cy.url().should('include', '/ofertas');

// cy.wait(2000);


// // Desplázate y espera
// cy.scrollTo('bottom', { duration: 3000 });
// cy.wait(2000);
// cy.scrollTo('top', { duration: 3000 });


         //Hacer clic en la categoria RECIEN AGREGADOS
         cy.get(':nth-child(3) > .text-xs', {timeout: 2000})
         .should('be.visible')
         .click({force: true})
 
         cy.wait(2000);

         //Validar que la url es la correcta
         cy.url().should('include', '/recien-agregados');

         cy.wait(2000);

         // Desplázate y espera
         cy.scrollTo('bottom');
         cy.wait(2000);
         cy.scrollTo('top');

        cy.wait(2000);



          //Hacer clic en TUS PRODUCTOS
          cy.get(':nth-child(4) > .text-xs', {timeout: 2000})
        .should('be.visible')
        .click({force: true})


        cy.wait(2000);

        //Validar que la url es la correcta
        cy.url().should('include', '/tus-productos');
        cy.wait(2000);

        // // Desplázate y espera
        // cy.scrollTo('bottom');
        // cy.wait(2000);
        // cy.scrollTo('top');

     //Hacer clic en Perfil
        cy.get(':nth-child(5) > .text-xs')
        .should('be.visible')
        .click({force: true})

        //Validar que la url es la correcta
        cy.url().should('include', '/perfil');
        cy.wait(2000);

        // Desplázate y espera
        cy.scrollTo('bottom');
        cy.wait(2000);
        cy.scrollTo('top');

       //Hacer clic en el icono de TuAlmacen
       cy.get('#__next > div.sticky.top-0.z-50 > div.flex.bg-white.flex-wrap.lg\\:flex-nowrap.rounded-b-\\[3rem\\].false.border-solid.border-\\[\\#E7E7E7\\].lg\\:border-0.items-center.px-6.pb-4.justify-between.lg\\:pr-0.sticky.lg\\:pb-0.shadow-md.shadow-black\\/25 > div.basis-14.lg\\:order-first.self-start.cursor-pointer > svg > path:nth-child(2)', {timeout: 2000})
        .should('be.visible')
        .click({force: true})
       
      
        //Validar que la url es la correcta
        cy.url().should('include', 'https://tualmacen.com.ar/');

        // Desplázate y espera
        cy.scrollTo('bottom');
        cy.wait(2000);
        cy.scrollTo('top');

        

        // //Scrolear a la derecha los banners principales 
        // // Desplazarse al extremo derecho
        // cy.get('.swiper-slide-active > .banner-container > a > .h-\[18rem\]').scrollTo('right');
    });
});
});