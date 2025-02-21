

// Cypress.Commands.add('blockPopup', () => {
//     // Bloquear solicitudes GET y POST relacionadas con el popup
//     cy.intercept('GET', 'https://backend.alia-cloudflare.com/user/events*metric=POPUP*', { statusCode: 200 }).as('blockedPopup1');
//     cy.intercept('GET', 'https://backend.alia-cloudflare.com/user/events*metric=POPUP_VIEW*', { statusCode: 200 }).as('blockedPopup2');
//     cy.intercept('POST', 'https://backend.alia-cloudflare.com/user/events*metric=POPUP*', { statusCode: 200 }).as('blockedPopup3');
//     cy.intercept('POST', 'https://backend.alia-cloudflare.com/user/events*metric=POPUP_VIEW*', { statusCode: 200 }).as('blockedPopup4');
// });
// Cypress.Commands.add('blockClarityRequests', () => {
//     // Bloquear las solicitudes a Clarity que podrían estar relacionadas con el popup
//     cy.intercept('POST', 'https://s.clarity.ms/collect*', { statusCode: 204 }).as('blockedClarity');
// });

// Cypress.Commands.add('monitorAndClosePopup', () => {
//     cy.window().then((win) => {
//         // Crear un observer para monitorear el DOM
//         const observer = new win.MutationObserver((mutations) => {
//             mutations.forEach((mutation) => {
//                 // Si encontramos el popup, cerrarlo
//                 const popupCloseButton = mutation.target.querySelector('#alia-5rle13a5zp5nzjal, #alia-eraqt2a5vgcxqcu2 > div > svg');
//                 if (popupCloseButton) {
//                     cy.wrap(popupCloseButton).click({ force: true });
//                     observer.disconnect();  // Desconectar el observer una vez que se haya cerrado el popup
//                     cy.log('Popup cerrado');
//                 }
//             });
//         });

//         // Configuración del observer para monitorear el body
//         observer.observe(win.document.body, {
//             childList: true, 
//             subtree: true 
//         });
//     });
// });


Cypress.Commands.add('blockPopupRequests', () => {
    // Bloquear todas las solicitudes de eventos relacionados con el popup
    cy.intercept('POST', '**/user/events*metric=POPUP*', { statusCode: 200 }).as('blockedPopupPOST');
    cy.intercept('GET', '**/user/events*metric=POPUP*', { statusCode: 200 }).as('blockedPopupGET');
});



/////

//    // Intentamos cerrar el popup repetidamente durante el test
//    for (let i = 0; i < 20; i++) {
//     cy.closePopupIfAppears(); // Intenta cerrar el popup
// }





// /////
// Cypress.Commands.add('closePopupIfAppears', () => {
//     // Intentamos cerrar el popup en intervalos regulares
//     cy.get('body').then(($body) => {
//         const closeButtonSelector = '#alia-5rle13a5zp5nzjal'; // Selector del botón 'No thanks'
//         const closePopupSelector = '#alia-eraqt2a5vgcxqcu2 > div > svg'; // Selector de la X

//         // Cerrar si se encuentra alguno de los elementos
//         if ($body.find(closeButtonSelector).length > 0) {
//             cy.get(closeButtonSelector).click({ force: true });
//             cy.log('Popup cerrado con el botón "No thanks".');
//         } else if ($body.find(closePopupSelector).length > 0) {
//             cy.get(closePopupSelector).click({ force: true });
//             cy.log('Popup cerrado con la X.');
//         }
//     });

//     // Espera 1-2 segundos antes de revisar de nuevo si aparece el popup
//     cy.wait(1000);
// });





////////

// Cypress.Commands.add('blockRedirects', () => {
//     // Bloqueamos todas las solicitudes de redirección de página
//     cy.intercept('GET', '**/redirect*', { statusCode: 200 }).as('blockedRedirect');
// });



// Cypress.Commands.add('continuouslyCheckForPopup', () => {
//     cy.window().then((win) => {
//         setInterval(() => {
//             const closeButtonSelector = '#alia-5rle13a5zp5nzjal'; // Selector del botón 'No thanks'
//             const closePopupSelector = '#alia-eraqt2a5vgcxqcu2 > div > svg'; // Selector de la X

//             // Cerrar el popup si aparece
//             const closeButton = win.document.querySelector(closeButtonSelector);
//             const closePopup = win.document.querySelector(closePopupSelector);
            
//             if (closeButton) {
//                 closeButton.click();
//                 cy.log('Popup cerrado con el botón "No thanks".');
//             } else if (closePopup) {
//                 closePopup.click();
//                 cy.log('Popup cerrado con la X.');
//             }
//         }, 1000); // Revisar cada 1 segundo
//     });
// });
