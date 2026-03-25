import { GoogleAuth } from "google-auth-library";
import { sheets_v4 } from "@googleapis/sheets";
import nodemailer from "nodemailer";

async function getSheetsClient() {
  const auth = new GoogleAuth({
    credentials: {
      client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
      private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return new sheets_v4.Sheets({ auth });
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      fullName,
      contact,
      email,
      reasonForDeletion,
      additionalComments,
      dataTypes,
      confirmed,
    } = req.body;

    if (!fullName || !contact || !email || !dataTypes?.length || !confirmed) {
      return res.status(400).json({ error: "Required fields missing" });
    }

    const formattedDate = new Date().toLocaleDateString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    /* ---------- GOOGLE SHEET ---------- */
    const sheets = await getSheetsClient();

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
      range: "Data Deletion Form!A:H",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[
          formattedDate,
          fullName,
          email,
          contact,
          dataTypes.join(", "),
          reasonForDeletion,
          additionalComments,
        ]],
      },
    });

    /* ---------- EMAIL ---------- */
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_EMAIL_USER,
      to: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
      subject: "New Data Deletion Request",
      html: `
      <h2>New Data Deletion Request</h2>
      <p><b>Name:</b> ${fullName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${contact}</p>
      <p><b>Data Types:</b> ${dataTypes.join(", ")}</p>
      <p><b>Reason:</b> ${reasonForDeletion}</p>
      <p><b>Comments:</b> ${additionalComments}</p>
      `,
    });

    return res.status(200).json({
      message: "Data deletion form submitted successfully",
    });

  } catch (err) {
    console.log("❌ Data Deletion API Error", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}