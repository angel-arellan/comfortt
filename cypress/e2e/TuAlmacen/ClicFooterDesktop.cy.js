describe('Prueba haciendo clic en todas cada uno de los links del FOOTER', () => {
    const devices = [
        { name: 'Desktop 1920x1080', width: 1920, height: 1080 },
       // { name: 'Samsung S22', width: 360, height: 780 } // Tamaño típico del S22 en viewport
    ];
  
    devices.forEach((device) => {
        it(`Prueba haciendo clic en todas cada uno de los links del FOOTER ${device.name}`, () => {
            cy.viewport(device.width, device.height); // Configurar el tamaño del dispositivo
            cy.visit('https://www.tualmacen.com.ar'); // Visitar la web
            
            cy.wait(2000); // Esperar que cargue la página
  
            //clic en ENTENDIDO en las cookies
            cy.get('.mt-1 > .cursor-pointer')
            .click({force: true})
  
  
            cy.wait(2000);
  
  
            //Hacer clic en CÓMO TRABAJAMOS EN TUALMACEN
            cy.contains('Cómo trabajamos en TuAlmacén', { timeout: 10000 }) // Busca el texto en la página
      .scrollIntoView() // Hace scroll hasta ese texto
      .should('be.visible'); // Verifica que es visible
      cy.wait(3000)
            
      cy.get('.bottom-0 > .gap-4 > :nth-child(1)', {timeout: 2000})
            .should('be.visible')
            .click({force: true})
            cy.wait(2000);

            cy.url().should('include', '/company/como_trabajamos');

            cy.scrollTo('bottom', { duration: 3000 }); 
            cy.wait(3000);
            cy.scrollTo('top', { duration: 2000 });

            cy.go('back');

             //Hacer clic en Sobre Nosotros
             cy.contains('Sobre Nosotros', { timeout: 10000 }) // Busca el texto en la página
      .scrollIntoView() // Hace scroll hasta ese texto
      .should('be.visible'); // Verifica que es visible
      cy.wait(3000)
            

      cy.get('.bottom-0 > .gap-4 > :nth-child(2)', {timeout: 2000})
            .should('be.visible')
            .click({force: true})
            cy.wait(2000);

            cy.url().should('include', '/company/about_us');

            cy.scrollTo('bottom', { duration: 3000 }); 
            cy.wait(3000);
            cy.scrollTo('top', { duration: 2000 });

            cy.go('back');
            cy.wait(2000);

            //Hacer clic en Preguntas Frecuentes

            cy.contains('Preguntas Frecuentes', { timeout: 10000 }) // Busca el texto en la página
            .scrollIntoView() // Hace scroll hasta ese texto
            .should('be.visible'); // Verifica que es visible
            cy.wait(3000)

            cy.get('.gap-4 > :nth-child(3)', {timeout: 2000})
            .should('be.visible')
            .click({force: true})
            cy.wait(2000);

            cy.url().should('include', '/company/preguntas_frecuentes');

            cy.scrollTo('bottom', { duration: 3000 }); 
            cy.wait(3000);
            cy.scrollTo('top', { duration: 2000 });

            cy.go('back');


            //Hacer clic en Terminos y Condiciones

            cy.contains('Terminos y Condiciones', { timeout: 10000 }) // Busca el texto en la página
            .scrollIntoView() // Hace scroll hasta ese texto
            .should('be.visible'); // Verifica que es visible
            cy.wait(3000)

            cy.get('.gap-4 > :nth-child(4)', {timeout: 2000})
            .should('be.visible')
            .click({force: true})
            cy.wait(2000);

            cy.url().should('include', '/company/terminos_y_condiciones');

            cy.scrollTo('bottom', { duration: 3000 }); 
            cy.wait(3000);
            cy.scrollTo('top', { duration: 2000 });

            cy.go('back');

            //Hacer clic en Blog

            cy.contains('Blog', { timeout: 10000 }) // Busca el texto en la página
            .scrollIntoView() // Hace scroll hasta ese texto
            .should('be.visible'); // Verifica que es visible
            cy.wait(3000)

            cy.get('.gap-4 > :nth-child(5)', {timeout: 2000})
            .should('be.visible')
            .click({force: true})
            cy.wait(2000);

            cy.url().should('include', '/blog/1');

            cy.scrollTo('bottom', { duration: 3000 }); 
            cy.wait(3000);
            cy.scrollTo('top', { duration: 2000 });

            cy.go('back');
          });
        });
        });