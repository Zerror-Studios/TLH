// src/libs/googleSheets.js  (SERVER ONLY)
// Same credentials and libraries as the existing contact / franchise routes.

import { GoogleAuth } from "google-auth-library";
import { sheets_v4 } from "@googleapis/sheets";

let client = null;

function getSheetsClient() {
  if (client) return client;
  const auth = new GoogleAuth({
    credentials: {
      client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
      private_key: (process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  client = new sheets_v4.Sheets({ auth });
  return client;
}

/**
 * Append one row. RAW input so "+91…" numbers and "=…" text are stored as plain text
 * (USER_ENTERED would turn them into formulas).
 */
export async function appendRow(tab, values) {
  await getSheetsClient().spreadsheets.values.append({
    spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
    range: `${tab}!A:A`,
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: [values] },
  });
}

export const nowIST = () => new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", hour12: false });
