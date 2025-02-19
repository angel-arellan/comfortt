// describe('Pruebas en dispositivos de escritorio en www.comfrt.com', () => {
//     const device = { name: 'Desktop 1920x1080', width: 1920, height: 1080 };

//     beforeEach(() => {
//         cy.viewport(device.width, device.height);
//         cy.visit('https://www.comfrt.com/products/cloud-zip-hoodie');
//     });

//     it('Hace clic en Cloud Zip Hoodie y valida los cambios de color en la URL', () => {
//         // Mapeo de colores con su selector y el variant esperado en la URL
//         const colores = [
//             { selector: 'label:nth-child(1) > a', variant: '41732312825900' }, // SNOW (ejemplo)
//             { selector: 'label:nth-child(2) > a', variant: '43121785143340' }, // WOLF GREY (ejemplo)
//             { selector: 'label:nth-child(3) > a', variant: '41732312858668' }, // STORM
//             { selector: 'label:nth-child(4) > a', variant: '41732312891436' }, // MIDNIGHT
//             { selector: 'label:nth-child(5) > a', variant: '43121785372716' }, // BLUE WILLOW
//             { selector: 'label:nth-child(6) > a', variant: '43694102970412' }, // LATTE
//             { selector: 'label:nth-child(7) > a', variant: '43694222737452' }, // Millstone Grey
//             { selector: 'label:nth-child(8) > a', variant: '44009719889964' }, // NAVY
//             { selector: 'label:nth-child(9) > a', variant: '43711081218092' }, // CRIMSON
//             { selector: '#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(2) > div.v26a1W51 > label:nth-child(1) > a', variant: '43983478489132' }, // OLIVE
//             { selector: '#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(2) > div.v26a1W51 > label:nth-child(2) > a', variant: '44020374667308' }, // PINE
//             { selector: '#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(2) > div.v26a1W51 > label:nth-child(3) > a', variant: '44020413792300' }, // ASTRO
//             { selector: '#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(2) > div.v26a1W51 > label:nth-child(4) > a', variant: '44020522680364' }, // MAROON
//         ];

//         // Función para cambiar de color y validar la URL
//         const validarCambioDeColor = (colorSelector, variantID) => {
//             cy.get(`#product_hero_options-default-product-hero-options_3_rc > div > fieldset:nth-child(1) > div.v26a1W51 > ${colorSelector}`)
//                 .click({ force: true });

//             cy.wait(2000); // Espera para que la URL cambie

//             cy.url().should('include', `variant=${variantID}`); // Valida que la URL contiene el variant correcto
//         };

//         // Validar cada color
//         colores.forEach((color) => {
//             validarCambioDeColor(color.selector, color.variant);
//         });
//     });
// });


