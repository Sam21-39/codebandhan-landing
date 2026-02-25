import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const SHEETS_SCOPE = ["https://www.googleapis.com/auth/spreadsheets"];

type LeadBody = {
  // Section A - Founder Info
  fullName: string;
  companyName: string;
  workEmail: string;
  linkedIn?: string;
  website?: string;
  
  // Section B - Product Info
  flutterVersion: string;
  appStage: string;
  teamSize: string;
  
  // Section C - Architecture Maturity
  stateManagement: string;
  enforceRules: string;
  biggestPain?: string;
  
  // Section D - Qualification
  revenueRange: string;
  paymentIntent: string;

  // Metadata
  interest: string;
  version: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  referrer?: string;
  landingPath?: string;
};

const clean = (value: unknown) => (value ? String(value).trim() : "");

export async function POST(req: NextRequest) {
  try {
    const body: LeadBody = await req.json();

    // 1. Validate Core Requirements
    if (!body.fullName || !body.workEmail || !body.companyName) {
      return NextResponse.json(
        { error: "Missing required contact information." },
        { status: 400 },
      );
    }

    // 2. Setup Google Auth
    const googleKey = process.env.GOOGLE_PRIVATE_KEY;
    const isPath = googleKey?.startsWith("/") || googleKey?.endsWith(".json");

    const auth = new google.auth.GoogleAuth({
      ...(isPath 
        ? { keyFile: googleKey } 
        : { 
            credentials: {
              client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
              private_key: googleKey?.replace(/\\n/g, "\n").replace(/^"|"$/g, ""),
            }
          }),
      scopes: SHEETS_SCOPE,
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

    if (!spreadsheetId) {
      console.error("GOOGLE_SHEETS_SPREADSHEET_ID not configured");
      return NextResponse.json(
        { error: "Form submission partially failed (Config Error)." },
        { status: 500 },
      );
    }

    // 3. Prepare Row Data
    const row = [
      new Date().toISOString(), // Timestamp
      clean(body.fullName),
      clean(body.workEmail),
      clean(body.companyName),
      clean(body.website),
      clean(body.linkedIn),
      
      clean(body.flutterVersion),
      clean(body.appStage),
      clean(body.teamSize),
      
      clean(body.stateManagement),
      clean(body.enforceRules),
      clean(body.biggestPain),
      
      clean(body.revenueRange),
      clean(body.paymentIntent),
      
      clean(body.interest), // "Apply for Beta" or "Book Audit"
      clean(body.version),  // "0.1.0-beta"
      
      clean(body.utmSource),
      clean(body.utmMedium),
      clean(body.utmCampaign),
      clean(body.referrer),
      clean(body.landingPath),
    ];

    // 4. Append to Sheet
    const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME || "Sheet1";
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: `${sheetName}!A:U`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [row],
      },
    });

    return NextResponse.json({ 
      success: true, 
      message: "Application submitted successfully." 
    });

  } catch (error) {
    console.error("API Error (apply):", error);
    return NextResponse.json(
      { error: "Internal server error during submission." },
      { status: 500 },
    );
  }
}
