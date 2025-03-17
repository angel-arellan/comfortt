// describe("Flujo de navegación en la Home", () => {
//   const devices = [
//     //{ device: "Samsung Galaxy S23 Ultra", width: 412, height: 919 },
//    // { device: "iPhone 15 Pro Max", width: 430, height: 932 },
//     { device: 'MacBook Pro 16"', width: 1536, height: 960 },
//     //{ device: "Windows Full HD Monitor", width: 1920, height: 1080 },
//   ];

//   devices.forEach(({ device, width, height }) => {
//     context(`Pruebas en ${device}`, () => {
//       beforeEach(() => {
//         cy.viewport(width, height);
//         cy.visit("https://www.comfrt.com");
//       });

//       it("Debe hacer clic en 'Shop Your Hoodie' y volver a la Home", () => {
//         cy.get('#home_hero-shop-your-hoodie_0 > div > div > a > button').click({ force: true });
//         cy.url().should('include', 'collections/hoodies');
//         cy.go("back"); // Volver a la Home
//         cy.url().should('include', 'https://comfrt.com/');
        
 

//       });

//       it("Debe hacer scroll hasta la sección y hacer clic en el CTA View All", () => {
        
//         cy.contains('Shop Best Sellers', { timeout: 10000 }) // Busca el texto en la página
//       .scrollIntoView() // Hace scroll hasta ese texto
//       .should('be.visible'); // Verifica que es visible
//       cy.wait(3000)
        
        
//         //"Debe hacer clic en 'View All' en la sección de Shop Best Seller y volver a la Home", () => {
//         cy.get('#featured_products_section-alternative-home-featured-products_2 > div > div.vMPtAMR0 > a > button').click({ force: true });
//         cy.url().should('include', '/collections');
//         cy.go("back"); // Volver a la Home
//         cy.url().should('include', 'https://comfrt.com/');

        
//       });

//       it("Debe hacer scroll hasta la sección y hacer clic en el CTA Shop All Items", () => {
//         cy.contains('View Our Hoodies', { timeout: 10000 }) // Busca el texto en la página
//         .scrollIntoView() // Hace scroll hasta ese texto
//         .should('be.visible'); // Verifica que es visible
//         cy.wait(3000)
        
        
//         //"Debe scrollear hasta 'Shop All Items', hacer clic y validar la navegación",
    
//         cy.get('#full_with_image_section-view-our-hoodies-1_7 > div > div > a > button').click({ force: true });
//         cy.url().should('include', '/all-products');
//         cy.wait(3000)
        
//         // Vuelve a la página anterior
//         cy.go('back'); 
//         cy.url().should('include', 'https://comfrt.com/'); // Verifica que regresó correctamente

        
        
//       });
//     });
//   });
// });  /// funciona todo ok , hay q descomentarlo
