import { google } from 'googleapis';

const GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const GOOGLE_SHEETS_SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
const GOOGLE_SHEETS_SHEET_NAME = process.env.GOOGLE_SHEETS_SHEET_NAME || 'Leads';

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: GOOGLE_PRIVATE_KEY,
  },
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

export async function appendToSheet(data: any[]) {
  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: GOOGLE_SHEETS_SPREADSHEET_ID,
      range: `${GOOGLE_SHEETS_SHEET_NAME}!A:O`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [data],
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error appending to Google Sheet:', error);
    throw error;
  }
}

export async function saveApplication(data: any) {
  const row = [
    new Date().toISOString(),
    data.fullName,
    data.email,
    data.company || '',
    data.techStack.join(', '),
    data.teamSize,
    data.architectureConcern,
    data.linkedin || ''
  ];
  return appendToSheet(row);
}
