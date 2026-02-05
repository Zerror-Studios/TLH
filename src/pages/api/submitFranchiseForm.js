import { google } from "googleapis";
import nodemailer from "nodemailer";

/* ---------------- Google Sheets Auth ---------------- */
async function authenticate() {
  if (!process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY) {
    throw new Error("Missing GOOGLE_PRIVATE_KEY");
  }

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
      private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  return google.sheets({ version: "v4", auth });
}

/* ---------------- API Handler ---------------- */
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const {
      name,
      email,
      phone,
      city,
      investment,
      profession,
      timeline,
      locationStatus,
    } = req.body;

    /* ---------- Validation ---------- */
    if (
      !name ||
      !email ||
      !phone ||
      !city ||
      !investment ||
      !profession ||
      !timeline ||
      !locationStatus
    ) {
      return res.status(400).json({ error: "All fields are required" });
    }

    /* ---------- Date (IST) ---------- */
    const formattedDate = new Date().toLocaleDateString("en-IN", {
      timeZone: "Asia/Kolkata",
    });

    /* ---------- Google Sheet ---------- */
    const sheets = await authenticate();

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
      range: "Franchise Form!A:H",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[
          formattedDate,
          name,
          email,
          phone,
          city,
          profession,
          investment,
          timeline,
          locationStatus,
        ]],
      },
    });

    /* ---------- Email ---------- */
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
      subject: "New Franchise Form Submission",
      html: `
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f6f8;padding:40px 0;font-family:Inter,Arial,sans-serif;">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08);">

        <tr>
          <td align="center" style="padding:16px;background:#0e1111;color:#ffffff;">
            <h1 style="margin:0;">THE LAUNDRY HOUSE</h1>
          </td>
        </tr>

        <tr>
          <td align="center" style="padding:24px;">
            <h2 style="margin:0;font-size:22px;color:#0e1111;">
              New Franchise Enquiry
            </h2>
            <p style="margin-top:8px;font-size:14px;color:#6b7280;">
              A new franchise enquiry has been received
            </p>
          </td>
        </tr>

        <tr><td style="padding:0 24px;"><hr style="border:none;border-top:1px solid #e5e7eb;" /></td></tr>

        <tr>
          <td style="padding:24px;">
            <table width="100%" style="font-size:14px;">
              <tr><td style="color:#6b7280;width:40%;">Name</td><td><b>${name}</b></td></tr>
              <tr><td style="color:#6b7280;width:40%;">Name</td><td><b>${email}</b></td></tr>
              <tr><td style="color:#6b7280;">Phone</td><td><b>${phone}</b></td></tr>
              <tr><td style="color:#6b7280;">City</td><td><b>${city}</b></td></tr>
              <tr><td style="color:#6b7280;">Profession</td><td><b>${profession}</b></td></tr>
              <tr><td style="color:#6b7280;">Investment Capacity</td><td><b>${investment}</b></td></tr>
              <tr><td style="color:#6b7280;">Timeline</td><td><b>${timeline}</b></td></tr>
              <tr><td style="color:#6b7280;">Location Status</td><td><b>${locationStatus}</b></td></tr>
            </table>
          </td>
        </tr>

        <tr>
          <td align="center" style="padding:20px;background:#f9fafb;font-size:12px;color:#9ca3af;">
            This is an automated email — please do not reply.<br/>
            © The Laundry House
          </td>
        </tr>

      </table>
    </td>
  </tr>
</table>
      `,
    });

    return res.status(200).json({
      message: "Franchise form submitted successfully",
    });
  } catch (error) {
    console.error("❌ Franchise API Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
