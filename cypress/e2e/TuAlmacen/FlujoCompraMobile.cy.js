describe('Pruebas en dispositivos Desktop y Mobile en www.tualmacen.com.ar', () => {
    const devices = [
       // { name: 'Desktop 1920x1080', width: 1920, height: 1080 },
        { name: 'Samsung S22', width: 360, height: 780 } // Tamaño típico del S22 en viewport
    ];

    devices.forEach((device) => {
        it(`Visita y scrollea en ${device.name}`, () => {
            cy.viewport(device.width, device.height); // Configurar el tamaño del dispositivo
            cy.visit('https://www.tualmacen.com.ar'); // Visitar la web
            
            cy.wait(2000); // Esperar que cargue la página


             //clic en ENTENDIDO en las cookies
             cy.get('.mt-1 > .cursor-pointer')
             .click({force: true})

             cy.wait(2000);



             ///click en iniciar sesion///
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



        // click para cerrar  Popup de Bienvenida de TUalmacen//
        // Esperar y validar que el popup desapareció
        // cy.get('.popup-background')
        // .click({ force: true });

        cy.wait(2000);



        //Hacer clic en la categoría de banner header
        cy.get('#__next > main > div:nth-child(2) > div.mt-2.mb-5 > div > div > div.swiper-wrapper > div.swiper-slide.swiper-slide-active > div > a > img', { timeout: 10000 })
        .should('exist')
        .click({force: true})


        cy.wait(2000);



        //Validar que la url es la correcta
        cy.url().should('include', '/ofertas');



        // Desplázate y espera
        cy.scrollTo('bottom');
        cy.wait(2000);
        cy.scrollTo('top');

        cy.wait(2000);



        //Hacer clic en la categoria RECIEN AGREGADOS
        cy.get(':nth-child(3) > .text-xs')
        .should('be.visible')
        .click({force: true})

        cy.wait(2000);



        //Validar que la url es la correcta
        cy.url().should('include', '/recien-agregados');

        // Desplázate y espera
        cy.scrollTo('bottom');
        cy.wait(2000);
        cy.scrollTo('top');

        //Hacer clic en este producto
        cy.get('#__next > main > div.pb-4.md\\:pt-1.md\\:pb-0.lg\\:pb-\\[4\\.8rem\\] > div.grid.grid-cols-2.sm\\:grid-cols-3.md\\:grid-cols-4.lg\\:grid-cols-5.xl\\:grid-cols-7 > div:nth-child(3) > div > div.flex.justify-center.flex-col.items-center.cursor-pointer > span > img', { timeout: 10000 })
        .click({ force: true });
        //cy.url().should('include', '/producto/11810?data=');


        // Scroll hacia abajo lentamente
        cy.scrollTo('bottom', { duration: 3000 }); 
        cy.wait(2000);

        // Scroll hacia arriba
        cy.scrollTo('top', { duration: 2000 }); 

        cy.wait(2000);



        ///desplegar carrito

        cy.get('.lg\\:bg-success > .flex svg').click({ force: true });



        /// click en finalizar compra-pedido/

        cy.get('.shadow-xl').click({ force: true });

        cy.wait(3000);



        /// boton continuar para seleccionar tipo de envio a domicilio o retiro en tienda//

        cy.get(':nth-child(1) > .justify-center > .shadow-xl').click({ force: true });
        
        cy.wait(3000);

        ///clic en la direccion a domicilio numero 1//

        cy.get(':nth-child(2) > .ticket-card > .col-span-3').click({ force: true });


        cy.wait(2000);



         // clic en continuar en seccion de direccion de entrega, este caso es a domicilio//
        cy.get('.flex-col > .shadow-xl').click({force: true})


        cy.wait(2000);





        /// clic en boton "mi pedido" es el que está del lado superior derecho

        cy.get('#__next > main > div:nth-child(2) > div > div > div.w-full.md\\:w-1\\/2.lg\\:px-\\[0rem\\] > div.px-2.block.md\\:hidden.shadow-sm.rounded-3xl.rounded-t-none.pb-2.relative.z-10.bg-white > div > div.flex.justify-between.items-center > div.w-full.flex.space-x-2.justify-end.items-center > button')
        .click({ force: true });
      




//    /// Aumentar cantidad en producto Pechuga de Pollo Congelada//
//    cy.get('#__next > main > div:nth-child(2) > div > div > div.w-1\\/2.hidden.md\\:block > div > div > div.overflow-x-hidden.w-full.false > div > div > div > div:nth-child(2) > div > div:nth-child(1) > div > div > div:nth-child(3) button')
//    .should('be.visible')
//    .click({ force: true })
//    .click({ force: true });


    //      cy.wait(3000);
       


        // ///disminuir cantidad en producto Pechuga de Pollo Congelada//
       
        // cy.window().then((win) => {
        //     // Intentar seleccionar el elemento utilizando querySelector
        //     const el = win.document.querySelector(".h-\[100\%\] > .lg\:pb-4 > .overflow-x-hidden > .shop-container > .lg\:min-h-\[250px\] > .divide-y > :nth-child(2) > .lg\:space-x-4 > :nth-child(1) > :nth-child(1) > .grid > .ml-2 > .undefined");
            
        //     // Verificar si el elemento fue encontrado
        //     if (el) {
        //       // Envolver el elemento con Cypress para interactuar con él
        //       cy.wrap(el)
        //         .scrollIntoView() // Asegurarse de que el elemento esté en la vista
        //         .should('be.visible') // Verificar que el elemento sea visible
        //         .click({ force: true }); // Forzar el clic en caso de que haya superposiciones
        //     } else {
        //       // Registrar un mensaje en caso de que el elemento no sea encontrado
        //       cy.log("⚠️ No se encontró el elemento con el selector proporcionado.");
        //     }
        //   });
          



            
           
           
           
           
                  




    




 



 
  


    });
});
});