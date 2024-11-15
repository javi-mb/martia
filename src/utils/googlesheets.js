const { google } = require("googleapis");
require("dotenv").config();

const credentials = JSON.parse(
  Buffer.from(
    process.env.GOOGLE_APPLICATION_CREDENTIALS_BASE64,
    "base64"
  ).toString("utf-8")
);

// Inicializa la librería cliente de Google y configura la autenticación con credenciales de la cuenta de servicio.
const auth = new google.auth.GoogleAuth({
  credentials,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"], // Alcance para la API de Google Sheets.
});

const spreadsheetId = "1HbkJrNM3sT_EWkbNmycI4A4RjuA1_G_GXSuZRqFaUCQ";

async function appendToSheet(values, range) {
  const sheets = google.sheets({ version: "v4", auth }); // Crea una instancia cliente de la API de Sheets.
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
