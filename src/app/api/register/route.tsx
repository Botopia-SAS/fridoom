import { google } from "googleapis";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const auth = new google.auth.JWT(
  process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
  undefined,
  process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n") || "",
  SCOPES
);
const sheets = google.sheets({ version: "v4", auth });

export async function POST(req: Request) {
  try {
    const { name, email, country, city, whatsapp } = await req.json();

    if (!name || !email || !country || !city || !whatsapp) {
      return NextResponse.json({ success: false, error: "Todos los campos son obligatorios" }, { status: 400 });
    }

    // Guardar en Google Sheets
    const values = [[name, email, country, city, whatsapp, new Date().toISOString()]];
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID!,
      range: "Respuestas!A:F",
      valueInputOption: "RAW",
      requestBody: { values },
    });

    // Enviar correo de confirmación
    await sendConfirmationEmail(email, name);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error en la API:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}

// Función para enviar correo
async function sendConfirmationEmail(email: string, name: string) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"fridoom" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: `🎉 ¡Gracias por registrarte en fridoom! ${name}`,
    html: `
      <p>Hola <b>${name}</b>,</p>
      <p>Gracias por registrarte en Fridoom. 🎉</p>
      <p>Te avisaremos cuando el app esté al aire.</p>
      <p>Saludos,<br/>El equipo de fridoom 🚀</p>
    `,
  };

  await transporter.sendMail(mailOptions);
}
