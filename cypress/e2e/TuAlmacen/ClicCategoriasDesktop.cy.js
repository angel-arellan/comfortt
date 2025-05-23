describe('Prueba haciendo clic en todas las CATEGORIAS-Desktop', () => {
  const devices = [
      { name: 'Desktop 1920x1080', width: 1920, height: 1080 },
     // { name: 'Samsung S22', width: 360, height: 780 } // Tamaño típico del S22 en viewport
  ];

  devices.forEach((device) => {
      it(`Prueba haciendo clic en todas las CATEGORIAS-Desktop ${device.name}`, () => {
          cy.viewport(device.width, device.height); // Configurar el tamaño del dispositivo
          cy.visit('https://www.tualmacen.com.ar'); // Visitar la web
          
          cy.wait(2000); // Esperar que cargue la página

          //clic en ENTENDIDO en las cookies
          cy.get('.mt-1 > .cursor-pointer')
          .click({force: true})


          cy.wait(2000);


          //Hacer clic en Categorias

          cy.get('.relative > :nth-child(1) > .flex > .text-xs', {timeout: 2000})
          .should('be.visible')
          .click({force: true})
          cy.wait(2000);

          //Clic en Last Chance
          cy.contains('Last Chance')
          .should('be.visible')
          .click({force: true})
          cy.wait(2000);
        

          cy.get('[id="Last Chance"] > div > div > div > div > div.mt-9.grid.grid-cols-2 > div > div > div.cursor-pointer.hover\\:text-\\[\\#d3e7f9\\]', { timeout: 4000 })
  .should('exist')
 // .and('be.visible')
  .click({ force: true });

          cy.url().should('include', '/categoria/271/272');
         cy.wait(2000);


         cy.scrollTo('bottom', { duration: 3000 }); 
         cy.wait(3000);
         cy.scrollTo('top', { duration: 2000 });

 //Hacer clic en Categorias

 cy.get('.relative > :nth-child(1) > .flex > .text-xs', {timeout: 2000})
 .should('be.visible')
 .click({force: true})
 cy.wait(2000); 




         //Clic Almacen, Ver todos, validacion url y scroll
        //  cy.contains('Almacén',  {timeout: 2000})
        //  .should('be.visible')
        //  .click({force: true})
        //  cy.wait(2000);


         cy.get('#Almacén > li > div > p', {timeout: 2000})
         .should('be.visible')
         .click({force: true})
         cy.wait(2000);

         cy.get('#Almacén > div > div > div > div > div.flex.justify-between > div.text-right.text-white.underline.underline-offset-4.cursor-pointer', {timeout: 2000})
         .should('be.visible')
         .click({force: true})
         cy.wait(2000);


         cy.url().should('include', '/categoria/12/0');
         cy.wait(3000);


         cy.scrollTo('bottom', { duration: 3000 }); 
         cy.wait(3000);
         cy.scrollTo('top', { duration: 2000 });

         //Hacer clic en Categorias

         cy.get('.relative > :nth-child(1) > .flex > .text-xs', {timeout: 2000})
         .should('be.visible')
         .click({force: true})
         cy.wait(2000);


          //Clic Kiosko, Ver todos y validacion url
          cy.contains('Kiosko',  {timeout: 2000})
          .should('be.visible')
          .click({force: true})
          cy.wait(2000);
 
 
          cy.get('#Kiosko > div > div > div > div > div.flex.justify-between > div.text-right.text-white.underline.underline-offset-4.cursor-pointer', {timeout: 2000})
          .should('be.visible')
          .click({force: true})
          cy.wait(2000);
 
          cy.url().should('include', '/categoria/260/0');
          cy.wait(2000);

          cy.scrollTo('bottom', { duration: 3000 }); 
          cy.wait(3000);
          cy.scrollTo('top', { duration: 2000 });
       
//Hacer clic en Categorias

cy.get('.relative > :nth-child(1) > .flex > .text-xs', {timeout: 2000})
.should('be.visible')
.click({force: true})
cy.wait(2000);

          //Clic Bebidas, Ver todos y validacion url
          cy.contains('Bebidas',  {timeout: 2000})
          .should('be.visible')
          .click({force: true})
          cy.wait(2000);
 
 
          cy.get('#Bebidas > div > div > div > div > div.flex.justify-between > div.text-right.text-white.underline.underline-offset-4.cursor-pointer', {timeout: 2000})
          .should('be.visible')
          .click({force: true})
          cy.wait(2000);
 
          cy.url().should('include', '/categoria/60/0');
          cy.wait(2000);
         
          cy.scrollTo('bottom', { duration: 3000 }); 
          cy.wait(3000);
          cy.scrollTo('top', { duration: 2000 });
         
         
//Hacer clic en Categorias

cy.get('.relative > :nth-child(1) > .flex > .text-xs', {timeout: 2000})
.should('be.visible')
.click({force: true})
cy.wait(2000);          

           //Clic Frescos, Ver todos y validacion url
           cy.contains('Frescos',  {timeout: 2000})
           .should('be.visible')
           .click({force: true})
           cy.wait(2000);
  
  
           cy.get('#Frescos > div > div > div > div > div.flex.justify-between > div.text-right.text-white.underline.underline-offset-4.cursor-pointer', {timeout: 2000})
           .should('be.visible')
           .click({force: true})
           cy.wait(2000);
  
           cy.url().should('include', '/categoria/51/0');
           cy.wait(2000);

           cy.scrollTo('bottom', { duration: 3000 }); 
          cy.wait(3000);
          cy.scrollTo('top', { duration: 2000 });
  
 //Hacer clic en Categorias

 cy.get('.relative > :nth-child(1) > .flex > .text-xs', {timeout: 2000})
 .should('be.visible')
 .click({force: true})
 cy.wait(2000);          

           //Clic Fiambrería, Ver todos y validacion url
           cy.contains('Fiambrería',  {timeout: 2000})
           .should('be.visible')
           .click({force: true})
           cy.wait(2000);
  
  
           cy.get('#Fiambrería > div > div > div > div > div.flex.justify-between > div.text-right.text-white.underline.underline-offset-4.cursor-pointer', {timeout: 2000})
           .should('be.visible')
           .click({force: true})
           cy.wait(2000);
  
           cy.url().should('include', '/categoria/121/0');
           cy.wait(2000);

           cy.scrollTo('bottom', { duration: 3000 }); 
          cy.wait(3000);
          cy.scrollTo('top', { duration: 2000 });

//Hacer clic en Categorias

cy.get('.relative > :nth-child(1) > .flex > .text-xs', {timeout: 2000})
.should('be.visible')
.click({force: true})
cy.wait(2000);

            //Clic Carnicería, Ver todos y validacion url
            cy.contains('Carnicería',  {timeout: 2000})
            .should('be.visible')
            .click({force: true})
            cy.wait(2000);
   
   
            cy.get('#Carnicería > div > div > div > div > div.flex.justify-between > div.text-right.text-white.underline.underline-offset-4.cursor-pointer', {timeout: 2000})
            .should('be.visible')
            .click({force: true})
            cy.wait(2000);
   
            cy.url().should('include', '/categoria/146/0');
            cy.wait(2000);

            cy.scrollTo('bottom', { duration: 3000 }); 
          cy.wait(3000);
          cy.scrollTo('top', { duration: 2000 });
 
//Hacer clic en Categorias

cy.get('.relative > :nth-child(1) > .flex > .text-xs', {timeout: 2000})
.should('be.visible')
.click({force: true})
cy.wait(2000);            

            //Clic Congelados, Ver todos y validacion url
            cy.get('#Congelados > li > div > p', {timeout: 3000})
            .should('be.visible')
            .click({force: true})
            cy.wait(2000);
   
   
            cy.get('#Congelados > div > div > div > div > div.flex.justify-between > div.text-right.text-white.underline.underline-offset-4.cursor-pointer', {timeout: 2000})
            .should('be.visible')
            .click({force: true})
            cy.wait(2000);
   
            cy.url().should('include', '/categoria/122/0');
            cy.wait(2000);

            cy.scrollTo('bottom', { duration: 3000 }); 
          cy.wait(3000);
          cy.scrollTo('top', { duration: 2000 });
           
 //Hacer clic en Categorias

 cy.get('.relative > :nth-child(1) > .flex > .text-xs', {timeout: 2000})
 .should('be.visible')
 .click({force: true})
 cy.wait(2000);           

            //Clic Dietética, Ver todos y validacion url
            cy.contains('Dietética',  {timeout: 2000})
            .should('be.visible')
            .click({force: true})
            cy.wait(2000);
   
   
            cy.get('#Dietética > div > div > div > div > div.flex.justify-between > div.text-right.text-white.underline.underline-offset-4.cursor-pointer', {timeout: 2000})
            .should('be.visible')
            .click({force: true})
            cy.wait(2000);
   
            cy.url().should('include', '/categoria/95/0');
            cy.wait(2000);

            cy.scrollTo('bottom', { duration: 3000 }); 
          cy.wait(3000);
          cy.scrollTo('top', { duration: 2000 });

//Hacer clic en Categorias

cy.get('.relative > :nth-child(1) > .flex > .text-xs', {timeout: 2000})
.should('be.visible')
.click({force: true})
cy.wait(2000);

             //Clic Verduleria, Ver todos y validacion url
             cy.contains('Verdulería',  {timeout: 2000})
             .should('be.visible')
             .click({force: true})
             cy.wait(2000);
    
    
             cy.get('#Verdulería > div > div > div > div > div.flex.justify-between > div.text-right.text-white.underline.underline-offset-4.cursor-pointer', {timeout: 2000})
             .should('be.visible')
             .click({force: true})
             cy.wait(2000);
    
             cy.url().should('include', '/categoria/104/0');
             cy.wait(2000);

             cy.scrollTo('bottom', { duration: 3000 }); 
          cy.wait(3000);
          cy.scrollTo('top', { duration: 2000 });

//Hacer clic en Categorias

cy.get('.relative > :nth-child(1) > .flex > .text-xs', {timeout: 2000})
.should('be.visible')
.click({force: true})
cy.wait(2000);

             //Clic Hogar y Bazar, Ver todos y validacion url
             cy.contains('Hogar y Bazar',  {timeout: 2000})
             .should('be.visible')
             .click({force: true})
             cy.wait(2000);
    
    
             cy.get('[id="Hogar y Bazar"] > div > div > div > div > div.flex.justify-between > div.text-right.text-white.underline.underline-offset-4.cursor-pointer', { timeout: 4000 })
            .should('be.visible')
            .click({ force: true });
            cy.wait(2000);

             cy.url().should('include', '/categoria/229/0');
             cy.wait(2000);

             cy.scrollTo('bottom', { duration: 3000 }); 
          cy.wait(3000);
          cy.scrollTo('top', { duration: 2000 });
          
//Hacer clic en Categorias

cy.get('.relative > :nth-child(1) > .flex > .text-xs', {timeout: 2000})
.should('be.visible')
.click({force: true})
cy.wait(2000);

             //Clic Limpieza, Ver todos y validacion url
             cy.contains('Limpieza',  {timeout: 2000})
             .should('be.visible')
             .click({force: true})
             cy.wait(2000);
    
    
             cy.get('#Limpieza > div > div > div > div > div.flex.justify-between > div.text-right.text-white.underline.underline-offset-4.cursor-pointer', {timeout: 2000})
             .should('be.visible')
             .click({force: true})
             cy.wait(2000);
    
             cy.url().should('include', '/categoria/83/0');
             cy.wait(2000);

             cy.scrollTo('bottom', { duration: 3000 }); 
          cy.wait(3000);
          cy.scrollTo('top', { duration: 2000 });

//Hacer clic en Categorias

cy.get('.relative > :nth-child(1) > .flex > .text-xs', {timeout: 2000})
.should('be.visible')
.click({force: true})
cy.wait(2000);

             //Clic Perfumeria, Ver todos y validacion url
             cy.contains('Perfumeria',  {timeout: 2000})
             .should('be.visible')
             .click({force: true})
             cy.wait(2000);
    
    
             cy.get('#Perfumeria > div > div > div > div > div.flex.justify-between > div.text-right.text-white.underline.underline-offset-4.cursor-pointer', {timeout: 2000})
             //.should('be.visible')
             .click({force: true})
             cy.wait(2000);
    
             cy.url().should('include', '/categoria/70/0');
             cy.wait(2000);

             cy.scrollTo('bottom', { duration: 3000 }); 
          cy.wait(3000);
          cy.scrollTo('top', { duration: 2000 });

// //Hacer clic en Categorias //Categoría verano eliminada

// cy.get('.relative > :nth-child(1) > .flex > .text-xs', {timeout: 2000})
// .should('be.visible')
// .click({force: true})
// cy.wait(2000);

//              //Clic Verano, Ver todos y validacion url     
//              cy.contains('Verano',  {timeout: 2000})
//             // .should('be.visible')
//              .click({force: true})
//              cy.wait(2000);
    
    
//              cy.get('#Verano > div > div > div > div > div.flex.justify-between > div.text-right.text-white.underline.underline-offset-4.cursor-pointer', {timeout: 2000})
//              //.should('be.visible')
//              .click({force: true})
//              cy.wait(2000);
    
//              cy.url().should('include', '/categoria/257/0');
//              cy.wait(2000);

//              cy.scrollTo('bottom', { duration: 3000 }); 
//           cy.wait(3000);
//           cy.scrollTo('top', { duration: 2000 });
        });
      });
      });