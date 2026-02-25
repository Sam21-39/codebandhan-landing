import { NextRequest, NextResponse } from 'next/server';
import { applicationSchema } from '@/lib/validation';
import { saveApplication } from '@/lib/google-sheets';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    
    // 1. Validate Input
    const validatedData = applicationSchema.parse(body);

    // 2. Append to Google Sheets
    await saveApplication(validatedData);

    // 3. (Optional) Slack Notification
    const slackUrl = process.env.SLACK_WEBHOOK_URL;
    if (slackUrl) {
      await fetch(slackUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          text: `🚀 *New Beta Access Request: ${validatedData.fullName}*`,
          blocks: [
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: `🚀 *New Beta Access Request*\n*Name:* ${validatedData.fullName}\n*Email:* ${validatedData.email}\n*Team Size:* ${validatedData.teamSize}\n*Tech Stack:* ${validatedData.techStack.join(', ')}`
              }
            },
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: `*Architecture Concern:*\n${validatedData.architectureConcern}`
              }
            }
          ]
        }),
      }).catch(err => console.error('Slack error:', err));
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error: any) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' }, 
      { status: error.name === 'ZodError' ? 400 : 500 }
    );
  }
}
