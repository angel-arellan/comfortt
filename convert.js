// const fs = require('fs');
// const path = require('path');
// const XLSX = require('xlsx');

// const reportDir = './mochawesome-report';

// // Verifica que la carpeta exista
// if (!fs.existsSync(reportDir)) {
//     console.error('❌ La carpeta mochawesome-report no existe.');
//     process.exit(1);
// }

// const jsonFiles = fs.readdirSync(reportDir).filter(file => file.endsWith('.json'));

// if (jsonFiles.length === 0) {
//     console.error('❌ No se encontraron archivos JSON en mochawesome-report.');
//     process.exit(1);
// }

// jsonFiles.forEach(file => {
//     const jsonFilePath = path.join(reportDir, file);
//     const excelFilePath = jsonFilePath.replace('.json', '.xlsx');

//     try {
//         // Leer el archivo JSON
//         const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

//         // Validar que contiene datos
//         if (!jsonData.results || !Array.isArray(jsonData.results) || jsonData.results.length === 0) {
//             console.warn(`⚠️ El archivo ${file} no tiene resultados de pruebas.`);
//             return;
//         }

//         // Extraer los datos relevantes y manejar undefined en 'attempts'
//         const testResults = jsonData.results.flatMap(result =>
//             result.suites?.flatMap(suite =>
//                 suite.tests?.map(test => ({
//                     Suite: suite.title || "Sin título",
//                     Prueba: test.title || "Sin título",
//                     Estado: test.state || "Desconocido",
//                     Duración: test.duration || 0,
//                     Intentos: test.attempts ? test.attempts.length : 0,
//                     Mensaje: test.err?.message || "Sin errores"
//                 })) || []
//             ) || []
//         );

//         if (testResults.length === 0) {
//             console.warn(`⚠️ El archivo ${file} no tiene pruebas ejecutadas.`);
//             return;
//         }

//         // Crear el archivo Excel
//         const worksheet = XLSX.utils.json_to_sheet(testResults);
//         const workbook = XLSX.utils.book_new();
//         XLSX.utils.book_append_sheet(workbook, worksheet, 'Resultados');
//         XLSX.writeFile(workbook, excelFilePath);

//         console.log(`✅ Reporte generado: ${excelFilePath}`);
//     } catch (error) {
//         console.error(`❌ Error al procesar ${file}: ${error.message}`);
//     }
// });



const fs = require('fs');
const path = require('path');
const XLSX = require('xlsx');

const reportDir = './mochawesome-report';

// Verifica que la carpeta exista
if (!fs.existsSync(reportDir)) {
    console.error('❌ La carpeta mochawesome-report no existe.');
    process.exit(1);
}

const jsonFiles = fs.readdirSync(reportDir).filter(file => file.endsWith('.json'));

if (jsonFiles.length === 0) {
    console.error('❌ No se encontraron archivos JSON en mochawesome-report.');
    process.exit(1);
}

jsonFiles.forEach(file => {
    const jsonFilePath = path.join(reportDir, file);
    const excelFilePath = jsonFilePath.replace('.json', '.xlsx');

    try {
        // Leer el archivo JSON
        const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

        // Validar que contiene datos
        if (!jsonData.results || !Array.isArray(jsonData.results) || jsonData.results.length === 0) {
            console.warn(`⚠️ El archivo ${file} no tiene resultados de pruebas.`);
            return;
        }

        // Obtener información general del reporte
        const executionDate = new Date().toLocaleString(); // Fecha y hora de ejecución
        const browser = jsonData.meta?.browser?.name || "Desconocido";
        const device = jsonData.meta?.device || "Desconocido";

        // Extraer los datos relevantes
        const testResults = jsonData.results.flatMap(result =>
            result.suites?.flatMap(suite =>
                suite.tests?.map(test => ({
                    "Suite": suite.title || "Sin título",
                    "Prueba": test.title || "Sin título",
                    "Estado": test.state || "Desconocido",
                    "Duración (ms)": test.duration || 0,
                    "Intentos": test.attempts ? test.attempts.length : 0,
                    "Mensaje de error": test.err?.message || "Sin errores",
                    "Fecha de ejecución": executionDate,
                    "Navegador": browser,
                    "Dispositivo": device
                })) || []
            ) || []
        );

        if (testResults.length === 0) {
            console.warn(`⚠️ El archivo ${file} no tiene pruebas ejecutadas.`);
            return;
        }

        // Crear el archivo Excel
        const worksheet = XLSX.utils.json_to_sheet(testResults);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Resultados');
        XLSX.writeFile(workbook, excelFilePath);

        console.log(`✅ Reporte generado: ${excelFilePath}`);
    } catch (error) {
        console.error(`❌ Error al procesar ${file}: ${error.message}`);
    }
});
