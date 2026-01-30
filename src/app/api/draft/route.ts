import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { promisify } from 'util';

const execPromise = promisify(exec);

export async function POST(request: Request) {
  try {
    const { to, subject, body } = await request.json();
    
    // Construct the gog command
    // We use a temporary file for the body to avoid shell escaping issues with large drafts
    const bodyEscaped = body.replace(/'/g, "'\\''");
    const command = `gog gmail drafts create --to "${to}" --subject "${subject}" --body-file - <<'EOF'\n${body}\nEOF`;

    console.log('Executing gog command:', command);
    
    const { stdout, stderr } = await execPromise(command);
    
    if (stderr && !stdout) {
      console.error('Gog Error:', stderr);
      return NextResponse.json({ error: stderr }, { status: 500 });
    }

    return NextResponse.json({ success: true, result: stdout });
  } catch (error: any) {
    console.error('Draft Creation Failed:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
