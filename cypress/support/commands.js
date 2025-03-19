

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


// Cypress.Commands.add('blockPopupRequests', () => {
//     // Bloquear todas las solicitudes de eventos relacionados con el popup
//     cy.intercept('POST', '**/user/events*metric=POPUP*', { statusCode: 200 }).as('blockedPopupPOST');
//     cy.intercept('GET', '**/user/events*metric=POPUP*', { statusCode: 200 }).as('blockedPopupGET');
// });



// ///

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





// //////

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

// Cypress.Commands.add('cerrarPopupSiAparece', () => {
//     // Interceptar el evento del popup
//     cy.intercept('POST', '**/user/events?shop=comfrtclothing.myshopify.com&metric=POPUP*').as('popupEvent');

//     // Aumentar la espera para capturar el popup
//     cy.wait('@popupEvent', { timeout: 60000 }).then(() => {
//         cy.log('⚠️ Popup detectado, intentando cerrarlo...');

//         // Buscar el popup y cerrarlo si está presente
//         cy.get('body').then(($body) => {
//             if ($body.find('#alia-eraqt2a5vgcxqcu2 > div > svg').length > 0) {
//                 cy.log('🔍 Se encontró la "X" del popup');
//                 cy.get('#alia-eraqt2a5vgcxqcu2 > div > svg')
//                     .should('be.visible')
//                     .click({ force: true })
//                     .then(() => cy.log('✅ Popup cerrado con la "X"'));
//             } else if ($body.find('#alia-5rle13a5zp5nzjal').length > 0) {
//                 cy.log('🔍 Se encontró el botón "No Thanks"');
//                 cy.get('#alia-5rle13a5zp5nzjal')
//                     .should('be.visible')
//                     .click({ force: true })
//                     .then(() => cy.log('✅ Popup cerrado con "No Thanks"'));
//             } else {
//                 cy.log('⚠️ El popup no se encontró en el DOM.');
//             }
//         });
//     });
// });


// Cypress.Commands.add('disablePopupLogs', () => {
//     // Interceptar la solicitud del popup y deshabilitar los logs
//     cy.intercept('POST', '**/user/events?shop=comfrtclothing.myshopify.com&metric=POPUP*', (req) => {
//         req.continue((res) => {
//             // Aquí puedes omitir cualquier log relacionado con la solicitud
//             res.send(); // Continuar la solicitud sin bloquearla, pero sin mostrarla
//         });
//     }).as('popupEvent');

//     // Esperar que se realice la solicitud (esto asegura que se detecte el popup)
//     cy.wait('@popupEvent', { timeout: 30000 }).then(() => {
//         cy.log('🚫 Popup interceptado y bloqueado');
//     });
// });


// Cypress.Commands.add('borrarDatos', () => {
//     cy.clearCookies();
//     cy.clearLocalStorage();
// });


// Cypress.Commands.add('bloquearPopup', () => {
//     cy.intercept('POST', '**/user/events?shop=comfrtclothing.myshopify.com&metric=POPUP*', {
//         statusCode: 204, // Respuesta vacía
//         body: {} // Sin datos
//     }).as('popupEvent');
// });

// Cypress.Commands.add('cerrarPopupSiAparece', () => {
//     cy.get('body').then(($body) => {
//         if ($body.find('#alia-eraqt2a5vgcxqcu2 > div > svg').length > 0) {
//             cy.get('#alia-eraqt2a5vgcxqcu2 > div > svg').click({ force: true });
//             cy.log('✅ Popup cerrado con la "X"');
//         } else if ($body.find('#alia-5rle13a5zp5nzjal').length > 0) {
//             cy.get('#alia-5rle13a5zp5nzjal').click({ force: true });
//             cy.log('✅ Popup cerrado con "No Thanks"');
//         } else {
//             cy.log('⚠️ No se encontró el popup.');
//         }
//     });
// });


// Cypress.Commands.add('cerrarPopupConEventos', () => {
//     cy.on('window:load', () => {
//         cy.log('🌐 Página cargada, monitoreando el popup...');
//     });

//     cy.on('window:alert', (str) => {
//         cy.log(`🚨 Se detectó una alerta: ${str}`);
//     });

//     // Monitorear cuando se agregan elementos nuevos al DOM (como el popup)
//     cy.document().then((doc) => {
//         const observer = new MutationObserver(() => {
//             cy.get('body').then(($body) => {
//                 if ($body.find('#alia-eraqt2a5vgcxqcu2 > div > svg').length > 0) {
//                     cy.log('🔍 Se detectó la "X" del popup, cerrándolo...');
//                     cy.get('#alia-eraqt2a5vgcxqcu2 > div > svg').click({ force: true });
//                 } else if ($body.find('#alia-5rle13a5zp5nzjal').length > 0) {
//                     cy.log('🔍 Se detectó el botón "No Thanks", cerrándolo...');
//                     cy.get('#alia-5rle13a5zp5nzjal').click({ force: true });
//                 }
//             });
//         });

//         observer.observe(doc.body, { childList: true, subtree: true });
//     });
// });



//Para seleccionar color y talla disponible en el bunddle
Cypress.Commands.add('seleccionarOpcionDisponible', () => {
    cy.get('#product_hero_complete_the_look-default-product-hero-complete-the-look_12_rc > div > div.qvNyIJ2f > div:nth-child(2) > div > div > form > button')
        .then(($btn) => {
            if ($btn.text().includes('Sold Out') || !$btn.is(':enabled')) {
                cy.log('Producto agotado. Intentando otra combinación.');

                // Cambiar color aleatorio
                cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(1) > div.v26a1W51 > label a')
                    .then(($colores) => {
                        let colorIndex = Cypress._.random(0, $colores.length - 1);
                        cy.wrap($colores.eq(colorIndex)).click({ force: true });
                    });

                cy.wait(1000); // Esperar antes de cambiar la talla

                // Cambiar talla aleatoria
                cy.get('#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(2) > div.v26a1W51 > label a span')
                    .then(($tallas) => {
                        let tallaIndex = Cypress._.random(0, $tallas.length - 1);
                        cy.wrap($tallas.eq(tallaIndex)).click({ force: true });
                    });

                cy.wait(2000);
                cy.seleccionarOpcionDisponible(); // Volver a verificar después del cambio
            } else {
                cy.log('Producto disponible. Agregando al carrito.');
                cy.wrap($btn).click();
            }
        });
});






// Cypress.Commands.add('monitorAndClosePopup', () => {
//     cy.document().then((doc) => {
//       const observer = new MutationObserver(() => {
//         cy.get('iframe[src*="customer-app.alia-cloudflare.com/popup"]', { timeout: 5000 })
//           .then(($iframe) => {
//             if ($iframe.length > 0 && $iframe.is(':visible')) {
//               cy.log('🟢 Se detectó el pop-up, intentando cerrarlo...');
              
//               cy.wrap($iframe).then(($loadedIframe) => {
//                 const iframeBody = $loadedIframe.contents().find('body');
                
//                 if (iframeBody.length > 0) {
//                   cy.wrap(iframeBody).within(() => {
//                     cy.get('#alia-eraqt2a5vgcxqcu2 > div > svg', { timeout: 3000 }) // Ajusta este selector si el botón de cierre es diferente
//                       .should('be.visible')
//                       .click({ force: true });
  
//                     cy.log('✅ Pop-up cerrado exitosamente');
//                   });
//                 }
//               });
//             }
//           });
//       });
  
//       // Inicia la observación de cambios en el DOM
//       observer.observe(doc.body, { childList: true, subtree: true });
  
//       // Detener la observación después de 60 segundos
//       setTimeout(() => {
//         observer.disconnect();
//         cy.log('🛑 Finalizó el monitoreo del pop-up.');
//       }, 60000);
//     });
//   });
  
/// este script es para excepciones, a veces cypress no maneja excepciones y da error sin motivo//
Cypress.on('uncaught:exception', (err, runnable) => {
    // Retorna false para prevenir que Cypress
    // falle la prueba
    return false;
  });
  
  
  //otro para popup
//   Cypress.Commands.add('monitorearPopup', () => {
//     cy.window().then((win) => {
//       // Configurar un intervalo para verificar el pop-up cada 1 segundo
//       const intervalId = setInterval(() => {
//         const iframe = win.document.querySelector('iframe[src*="customer-app.alia-cloudflare.com/popup"]');
  
//         if (iframe) {
//           const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
//           const popup = iframeDocument.querySelector('#alia-2vllydgye8f6f1df'); // Se mantiene un solo selector válido
          
//           if (popup) {
//             const botonCerrar = iframeDocument.querySelector('#alia-eraqt2a5vgcxqcu2 > div > svg');
//             if (botonCerrar) {
//               botonCerrar.click({ force: true });
//               console.log('✅ Pop-up cerrado correctamente.');
//               clearInterval(intervalId); // Detener el monitoreo una vez cerrado
//             } else {
//               console.log('❌ Botón de cerrar no encontrado.');
//             }
//           }
//         }
//       }, 500); // Verifica cada 0,5 segundo
  
//       // Guardar el ID del intervalo en la ventana para detenerlo si es necesario
//       win.popupMonitorInterval = intervalId;
//     });
// });


Cypress.Commands.add('hideDialog', () => {
    // Obtenemos el documento principal para configurarlo
    cy.document().then(document => {
      // Función para intentar ocultar el pop-up
      const hideDialog = () => {
        // Buscar el iframe con el popup
        const iframe = document.querySelector('iframe[src*="customer-app.alia-cloudflare.com/popup"]');
        if (iframe) {
          // Accedemos al contenido del iframe
          const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
          
          // Seleccionar el popup dentro del iframe, ajusta el selector si es necesario
          const popup = iframeDocument.querySelector('#alia-0wpzlmlujiopg85a');
          
          if (popup) {
            // Si encontramos el pop-up, intentamos ocultarlo
            const botonCerrar = iframeDocument.querySelector('#alia-eraqt2a5vgcxqcu2 > div > svg');
            if (botonCerrar) {
              // Hacemos clic para cerrar el pop-up
              botonCerrar.click({ force: true });
              console.log('✅ Pop-up cerrado correctamente.');
              return true;
            } else {
              console.log('❌ Botón de cerrar no encontrado.');
            }
          }
        }
        return false;
      };
  
      // Intentar cerrar el pop-up inmediatamente
      hideDialog();
  
      // Configuramos un MutationObserver para detectar cambios dinámicos
      const observer = new MutationObserver(() => {
        if (hideDialog()) {
          // Una vez cerrado el pop-up, desconectamos el observer
          // observer.disconnect();  // Opcional: puedes desconectar el observer si solo quieres que se ejecute una vez
        }
      });
  
      // Comenzamos a observar el documento
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true
      });
  
      // Limpiar el observer al finalizar el test
      Cypress.on('test:after:run', () => {
        observer.disconnect();
      });
    });
  });
  
  
  