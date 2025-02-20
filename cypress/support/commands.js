Cypress.Commands.add('closePopupOnAppearance', () => {
  cy.window().then((win) => {
    const closeButtonSelector = '#alia-eraqt2a5vgcxqcu2 > div > svg'; // Selector del botón de cierre

    const closePopup = () => {
      const closeButton = win.document.querySelector(closeButtonSelector);
      if (closeButton) {
        cy.wrap(closeButton).click({ force: true }).then(() => {
          cy.log('Popup detectado y cerrado.');
        });
      }
    };

    // Revisar cada 500ms durante 40 segundos si el pop-up aparece
    let attempts = 0;
    const intervalId = setInterval(() => {
      closePopup();
      attempts += 1;
      if (attempts >= 80) { // 40 segundos (80 intentos de 500ms)
        clearInterval(intervalId);
      }
    }, 500);
  });
});
