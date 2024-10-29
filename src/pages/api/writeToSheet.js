// /pages/api/writeToSheet.js
import { appendToSheet } from "../../utils/googlesheets"; // Ajusta la ruta según tu estructura de proyecto

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { values } = req.body;

    try {
      const response = await appendToSheet(values);
      res.status(200).json({ success: true, data: response.data });
    } catch (error) {
      console.error("Error writing to sheet:", error);
      res.status(500).json({ success: false, error: "Error writing to sheet" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
