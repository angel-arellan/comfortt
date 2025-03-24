const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const reportDir = './mochawesome-report';

try {
    // Leer todos los archivos JSON en la carpeta mochawesome-report
    fs.readdirSync(reportDir)
      .filter(file => file.endsWith('.json')) // Filtrar solo archivos JSON
      .forEach(file => {
          const jsonFilePath = path.join(reportDir, file);
          const excelFilePath = path.join(reportDir, file.replace('.json', '.xlsx'));

          // Leer y parsear el archivo JSON
          const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

          if (!jsonData.results || jsonData.results.length === 0) {
              throw new Error(`El archivo ${file} no contiene resultados de pruebas.`);
          }

          // Extraer los datos relevantes
          const testResults = jsonData.results.flatMap(result =>
              result.suites.flatMap(suite =>
                  suite.tests.map(test => ({
                      Suite: suite.title || "Sin título",
                      Prueba: test.title || "Sin título",
                      Estado: test.state || "Desconocido",
                      Duración: test.duration || 0,
                      Intentos: test.attempts ? test.attempts.length : 0,
                      Mensaje: test.err?.message || "Sin errores"
                  }))
              )
          );

          // Crear el archivo Excel
          const worksheet = XLSX.utils.json_to_sheet(testResults);
          const workbook = XLSX.utils.book_new();
          XLSX.utils.book_append_sheet(workbook, worksheet, 'Resultados');
          XLSX.writeFile(workbook, excelFilePath);

          console.log(`✅ Reporte generado: ${excelFilePath}`);
      });

    console.log('🚀 Todos los reportes XLSX han sido generados correctamente.');
} catch (error) {
    console.error(`❌ Error al generar los reportes: ${error.message}`);
}
