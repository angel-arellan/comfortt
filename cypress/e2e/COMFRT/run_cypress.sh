#!/bin/bash

# Configura las variables de entorno
export PATH=/usr/local/bin:$PATH

# Navega al directorio de Cypress
cd /Users/angelarellan/Documents/cypress/e2e/COMFRT

# Ejecuta Cypress
npx cypress run >> /Users/angelarellan/Documents/cypress/e2e/COMFRT/cypress.log 2>&1


#//no borrar//