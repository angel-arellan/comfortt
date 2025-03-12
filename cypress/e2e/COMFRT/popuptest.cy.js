// describe('Cerrar ventana emergente dentro de un iframe', () => {
//     it('Debe cerrar el pop-up dinámico si aparece', () => {
//       cy.visit('http://www.comfrt.com');
  
//       // Manejo de excepciones globales para evitar fallos innecesarios
//       cy.on('uncaught:exception', () => false);
  
//       // Esperar hasta que el iframe sea visible antes de interactuar
//       cy.get('iframe[src*="customer-app.alia-cloudflare.com/popup"]', { timeout: 30000 })
//         .should('exist')
//         .and('be.visible') // Espera hasta que el iframe sea visible
//         .then(($iframe) => {
//           const iframeBody = $iframe.contents().find('body');
  
//           // Asegurar que el iframe tiene contenido antes de interactuar
//           if (iframeBody.length > 0) {
//             cy.wrap(iframeBody).within(() => {
//               cy.get('#alia-eraqt2a5vgcxqcu2 > div > svg', { timeout: 20000 }) // Ajusta el selector si el botón de cierre no es un 'svg'
//                 .should('be.visible')
//                 .click({ force: true });
  
//               cy.log('Pop-up cerrado exitosamente');
//             });
//           }
//         });
  
//       // Continuar con la prueba después de manejar el pop-up
//       cy.wait(3000);
//       cy.get('.MuH8cxmA').type('Producto de prueba{enter}');
//       cy.wait(5000);
//     });
//   });
  