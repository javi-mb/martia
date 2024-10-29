const { google } = require("googleapis");

// Inicializa la librería cliente de Google y configura la autenticación con credenciales de la cuenta de servicio.
const auth = new google.auth.GoogleAuth({
  keyFile: "./google.json", // Ruta al archivo de clave de tu cuenta de servicio.
  scopes: ["https://www.googleapis.com/auth/spreadsheets"], // Alcance para la API de Google Sheets.
});

const spreadsheetId = "1HbkJrNM3sT_EWkbNmycI4A4RjuA1_G_GXSuZRqFaUCQ";

async function appendToSheet(values) {
  const sheets = google.sheets({ version: "v4", auth }); // Crea una instancia cliente de la API de Sheets.
  const range = "A1"; // El rango en la hoja para empezar a agregar datos.
  const valueInputOption = "USER_ENTERED"; // Cómo se deben interpretar los datos de entrada.

  const resource = { values };

  try {
    const res = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption,
      resource,
    });
    return res; // Devuelve la respuesta de la API de Sheets.
  } catch (error) {
    console.error("error", error); // Registra errores.
  }
}

module.exports = { appendToSheet };
