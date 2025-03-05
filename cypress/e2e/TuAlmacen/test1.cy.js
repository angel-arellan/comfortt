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


            cy.get('.mt-1 > .cursor-pointer').click({ force: true });
            
            // Scroll hacia abajo lentamente
            cy.scrollTo('bottom', { duration: 3000 }); 
            cy.wait(1000);

            // Scroll hacia arriba
            cy.scrollTo('top', { duration: 2000 }); 


             ///clieck en iniciar sesion///
             cy.get('.pl-6').click({ force: true });




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



        });
    });
});
