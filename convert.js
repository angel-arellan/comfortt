const fs = require('fs');
const XLSX = require('xlsx');

const jsonFilePath = './mochawesome-report/mochawesome.json';
const excelFilePath = './mochawesome-report/report.xlsx';

try {
    // Leer el archivo JSON
    const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

    // Validar que hay resultados en el JSON
    if (!jsonData.results || jsonData.results.length === 0) {
        throw new Error("El archivo JSON no contiene resultados de pruebas.");
    }

    // Extraer los datos relevantes y manejar casos donde `attempts` sea undefined
    const testResults = jsonData.results.flatMap(result =>
        result.suites.flatMap(suite =>
            suite.tests.map(test => ({
                Suite: suite.title || "Sin título",
                Prueba: test.title || "Sin título",
                Estado: test.state || "Desconocido",
                Duración: test.duration || 0,
                Intentos: test.attempts ? test.attempts.length : 0, // Manejo seguro de `attempts`
                Mensaje: test.err?.message || "Sin errores"
            }))
        )
    );

    // Crear el archivo Excel
    const worksheet = XLSX.utils.json_to_sheet(testResults);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Resultados');
    XLSX.writeFile(workbook, excelFilePath);

    console.log(`✅ Reporte generado correctamente en: ${excelFilePath}`);
} catch (error) {
    console.error(`❌ Error al generar el reporte: ${error.message}`);
}
