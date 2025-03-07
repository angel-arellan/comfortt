describe('Pruebas en dispositivos Desktop y Mobile en www.tualmacen.com.ar', () => {
    const devices = [
        { name: 'Desktop 1920x1080', width: 1920, height: 1080 },
       // { name: 'Samsung S22', width: 360, height: 780 } // Tamaño típico del S22 en viewport
    ];

    devices.forEach((device) => {
        it(`Visita y scrollea en ${device.name}`, () => {
            cy.viewport(device.width, device.height); // Configurar el tamaño del dispositivo
            cy.visit('https://www.tualmacen.com.ar'); // Visitar la web
            
            cy.wait(2000); // Esperar que cargue la página

             ///click en iniciar sesion///
             cy.get('.pl-6').click({ force: true });

             //clic en ENTENDIDO en las cookies
             cy.get('.mt-1 > .cursor-pointer')
             .click({force: true})

            // Ingresar email
        cy.get('.pt-0 > .pb-2 > .relative > #new-password')
        .should('be.visible')
        .type('angel.arellan@latechfactory.com', { force: true });

      // Ingresar contraseña
      cy.get('.pt-4 > :nth-child(1) > .pb-2 > .relative > #new-password')
        .should('be.visible')
        .type('ang3l.DAN1EL', { force: true });

      // Hacer clic en "Iniciar Sesión"
      cy.get('.mt-5 > .shadow-xl')
        .should('be.visible')
        .click({ force: true });

        // click en Popup de Bienvenida de TUalmacen//
        // Esperar y validar que el popup desapareció
        cy.get('#__next > main > div:nth-child(2) > div.my-9 > div > div > div.swiper-wrapper > div.swiper-slide.swiper-slide-active > div > a > img')
        .click({ force: true });


        //Hacer clic en la categoría OFERTONES
        cy.get('.sticky.top-0 > .flex-wrap')
        .should('exist')
        .click({force: true})

        //Validar que la url es la correcta
        cy.url().should('include', '/ofertas');

        // Desplázate y espera
        cy.scrollTo('bottom');
        cy.wait(2000);
        cy.scrollTo('top');

        //Hacer clic en la categoria RECIEN AGREGADOS
        cy.get(':nth-child(3) > .text-xs')
        .should('be.visible')
        .click({force: true})

        //Validar que la url es la correcta
        cy.url().should('include', '/recien-agregados');

        // Desplázate y espera
        cy.scrollTo('bottom');
        cy.wait(2000);
        cy.scrollTo('top');

        //Hacer clic en este producto
        cy.get('#__next > main > div.pb-4.md\\:pt-1.md\\:pb-0.lg\\:pb-\\[4\\.8rem\\] > div.grid.grid-cols-2.sm\\:grid-cols-3.md\\:grid-cols-4.lg\\:grid-cols-5.xl\\:grid-cols-7 > div:nth-child(3) > div > div.flex.justify-center.flex-col.items-center.cursor-pointer > span > img', { timeout: 10000 })
        .click({ force: true });
        cy.url().should('include', '/producto/11802?data=');

        //Hace clic en el botón de + dos veces, valida cantidad y hace clic en el botón de - y valida cantidad
         // Clic en el botón "+"
         cy.get('div.undefined').click({ force: true }); // Reemplazar selector
         cy.get('div.undefined').click({ force: true });
         cy.get('div.undefined').click({ force: true }, { timeout: 10000 }); 
        

         cy.wait(2000);
         
         // Validar que la cantidad en el input sea 3
         cy.get('.border-secondary > .text-sm') // Reemplaza con el selector correcto
           .should('have.value', '3');
 
         // Validar que el carrito muestra 3 productos
         cy.get('.lg\:space-x-4 > :nth-child(1) > :nth-child(1) > .grid > :nth-child(2)') // Reemplaza con el selector correcto
           .should('contain', '3');
 
         // Clic en el botón "-"
         cy.get('.border-disable').click({ force: true }); // Reemplazar selector
 
         // Validar que la cantidad en el input sea 2
         cy.get('.border-secondary > .text-sm')
           .should('have.value', '2');
 
         // Validar que el carrito muestra 2 productos
         cy.get('.carrito-cantidad')
           .should('contain', '2');
  


    });
});
});