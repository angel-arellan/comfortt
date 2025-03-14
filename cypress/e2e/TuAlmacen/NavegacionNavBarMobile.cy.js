describe('Pruebas en dispositivos Desktop y Mobile en www.tualmacen.com.ar', () => {
    const devices = [
        { name: 'iPhone 15 Pro Max', width: 430, height: 932 },
       // { name: 'Samsung S22', width: 360, height: 780 } // Tamaño típico del S22 en viewport
    ];

    devices.forEach((device) => {
        it(`Visita y scrollea en ${device.name}`, () => {
            cy.viewport(device.width, device.height); // Configurar el tamaño del dispositivo
            cy.visit('https://www.tualmacen.com.ar'); // Visitar la web
            
            cy.wait(2000); // Esperar que cargue la página

            //clic en ENTENDIDO en las cookies
            cy.get('.mt-1 > .cursor-pointer')
            .click({force: true})
            cy.wait(2000);  ///click en iniciar sesion///
            cy.get('.justify-between > :nth-child(5)').click({ force: true });
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
       cy.wait(4000);

            //Hacer clic en la categoria ofertones
        cy.get('#__next > main > div:nth-child(2) > div.mt-2.mb-5 > div > div > div.swiper-wrapper > div.swiper-slide.swiper-slide-active > div > a > img', { timeout: 10000 })
        .should('exist')
        .click({force: true})
        cy.wait(2000);

        //Validar que la url es la correcta
        cy.url().should('include', '/ofertas');
        cy.wait(2000);

        // Desplázate y espera
        cy.scrollTo('bottom', { duration: 3000 });
        cy.wait(2000);
        cy.scrollTo('top', { duration: 3000 });

         //Hacer clic en la categoria NUEVOS
         cy.get(':nth-child(3) > .text-xs', { timeout: 10000 })
         .should('exist')
         .click({force: true})
         cy.wait(2000);
 
         //Validar que la url es la correcta
         cy.url().should('include', '/recien-agregados');
         cy.wait(2000);
 
         // Desplázate y espera
         cy.scrollTo('bottom', { duration: 3000 });
         cy.wait(2000);
         cy.scrollTo('top', { duration: 3000 });

         //Hacer clic en la categoria TUS PRODUCTOS
         cy.get(':nth-child(4) > .text-xs', { timeout: 10000 })
         .should('exist')
         .click({force: true})
         cy.wait(2000);
 
         //Validar que la url es la correcta
         cy.url().should('include', '/tus-productos');
         cy.wait(2000);
 
         // Desplázate y espera
         cy.scrollTo('bottom', { duration: 3000 });
         cy.wait(2000);
         cy.scrollTo('top', { duration: 3000 });

        //Hacer clic en la categoria Cuenta
         cy.get(':nth-child(5) > .text-xs')
         .should('exist')
         .click({force: true})
         cy.wait(2000);
 
         //Validar que la url es la correcta
         cy.url().should('include', '/perfil');
         cy.wait(2000);
 
         // Desplázate y espera
         cy.scrollTo('bottom', { duration: 3000 });
         cy.wait(2000);
         cy.scrollTo('top', { duration: 3000 });
        });
    });
    });