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
        cy.url().should('include', '/producto/11808?data=');


        // Scroll hacia abajo lentamente
        cy.scrollTo('bottom', { duration: 3000 }); 
        cy.wait(1000);

        // Scroll hacia arriba
        cy.scrollTo('top', { duration: 2000 }); 



        ///desplegar carrito

        cy.get('.lg\\:bg-success > .flex svg').click({ force: true });

        /// click en finalizar compra-pedido/

        cy.get('.shadow-xl').click({ force: true });

        cy.wait(3000);
        /// boton continuar de tipo de envio a domicilio o retiro en tienda//

        cy.get(':nth-child(1) > .justify-center > .shadow-xl').click({ force: true });
        
        cy.wait(3000);

        ///clic en la direccion a domicilio numero 1//

        cy.get(':nth-child(2) > .ticket-card > .col-span-3').click({ force: true });


        cy.wait(3000);

        /// clic en continuar//
        cy.get('.flex-col > .shadow-xl').click({force: true})


        cy.wait(3000);


       /// Aumentar cantidad en producto Pechuga de Pollo Congelada//
        cy.get('#__next > main > div:nth-child(2) > div > div > div.w-1\\/2.hidden.md\\:block > div > div > div.overflow-x-hidden.w-full.false > div > div > div > div:nth-child(2) > div > div:nth-child(1) > div > div > div:nth-child(3) button')
       .should('be.visible')
       .click({ force: true })
       .click({ force: true });



         cy.wait(3000);
       


             ///disminuir cantidad en producto Pechuga de Pollo Congelada//

             cy.window().then((win) => {
              const el = win.document.querySelector("#__next > main > div:nth-child(2) > div > div > div.w-1\\/2.hidden.md\\:block > div > div > div.overflow-x-hidden.w-full.false > div > div > div > div:nth-child(2) > div > div:nth-child(1) > div > div > div.border.w-6.h-6.ml-2.rounded-full.flex.items-center.justify-center.border-disable > button");
              if (el) {
                cy.wrap(el)
                  .scrollIntoView()
                  .should('be.visible')
                  .click({ force: true });
              } else {
                cy.log("⚠️ No se encontró el elemento con el selector proporcionado.");
              }
            });
            
           
           
           
             cy.wait(2000);
                  




    
 ///desplegar carrito

 cy.get('.lg\\:bg-success > .flex svg').click({ force: true });



 



 
  


    });
});
});