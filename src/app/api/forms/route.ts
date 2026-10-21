
import { NextResponse } from "next/server";
import { google } from "googleapis";

export const runtime = "nodejs";

const enquiryTypes = [
  "products",
  "retailer",
  "business",
  "other",
] as const;

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name =
      typeof body.name === "string" ? body.name.trim() : "";
    const email =
      typeof body.email === "string" ? body.email.trim() : "";
    const phone =
      typeof body.phone === "string" ? body.phone.trim() : "";
    const enquiryType =
      typeof body.enquiryType === "string"
        ? body.enquiryType
        : "";
    const message =
      typeof body.message === "string" ? body.message.trim() : "";

    // Validate submitted form data
    if (
      name.length < 2 ||
      name.length > 100 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      email.length > 254 ||
      !/^[0-9+\-\s()]{10,20}$/.test(phone) ||
      !enquiryTypes.includes(
        enquiryType as (typeof enquiryTypes)[number]
      ) ||
      message.length < 10 ||
      message.length > 2000
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check your form details.",
        },
        { status: 400 }
      );
    }

    // Read Google Sheets credentials from .env.local
    const spreadsheetId =
      process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    const clientEmail =
      process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey =
      process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

    
    console.log("Google Sheets environment check:", {
  spreadsheetIdPresent: Boolean(spreadsheetId),
  clientEmailPresent: Boolean(clientEmail),
  privateKeyPresent: Boolean(privateKey),
});

    if (!spreadsheetId || !clientEmail || !privateKey) {
      console.error(
        "Google Sheets configuration is missing. Check .env.local."
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "The form service is not configured. Please check the server configuration.",
        },
        { status: 500 }
      );
    }

    // Authenticate with Google
    const auth = new google.auth.JWT({
      email: clientEmail,
      key: privateKey,
      scopes: [
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    // Add the enquiry to Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:G",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [
          [
            new Date().toISOString(),
            name,
            email,
            phone,
            enquiryType,
            message,
            "New",
          ],
        ],
      },
    });

    return NextResponse.json({
      success: true,
      message: "Your enquiry has been submitted successfully.",
    });
  } catch (error) {
    console.error("Enquiry submission failed:", error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Unable to submit your enquiry. Please check the server logs.",
      },
      { status: 500 }
    );
  }
}
