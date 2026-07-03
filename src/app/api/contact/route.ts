import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY || 're_mock_key_to_pass_build');
  
  try {
    const body = await request.json();
    const { path, name, email, firm, role, mind } = body;

    // Validate required fields
    if (!path || !name || !email || !mind) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Construct the email content based on the submitted data
    let textContent = `New Request Access Submission\n\n`;
    textContent += `Path: ${path}\n`;
    textContent += `Name: ${name}\n`;
    textContent += `Email: ${email}\n`;
    
    if (firm) textContent += `Firm: ${firm}\n`;
    if (role) textContent += `Role: ${role}\n`;
    
    textContent += `\nWhat's on your mind:\n${mind}\n`;

    let htmlContent = `<h2>New Request Access Submission</h2>
      <ul>
        <li><strong>Path:</strong> ${path}</li>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>`;

    if (firm) htmlContent += `<li><strong>Firm:</strong> ${firm}</li>`;
    if (role) htmlContent += `<li><strong>Role:</strong> ${role}</li>`;

    htmlContent += `</ul>
      <h3>What's on your mind:</h3>
      <p>${mind.replace(/\n/g, '<br>')}</p>`;

    // Send the email using Resend
    const data = await resend.emails.send({
      from: 'Catena Intake <onboarding@resend.dev>', // Update this when you have a verified domain
      to: process.env.CONTACT_EMAIL || 'brian.mcleod@primeelixirco.com', // Update with your actual destination email
      subject: `Catena Landing: New Submission from ${name} [${path}]`,
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email via Resend:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
