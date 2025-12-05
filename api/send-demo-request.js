import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  const { name, email, firm, teamSize, phone } = req.body;

  // Validate required fields
  if (!name || !email || !firm || !teamSize) {
    return res.status(400).json({ 
      success: false, 
      message: 'Missing required fields' 
    });
  }

  // Email configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const emailBody = `
New Demo Request

Name: ${name}
Email: ${email}
Firm: ${firm}
Team Size: ${teamSize}
Phone: ${phone || 'Not provided'}

---
This is an automated message from the EZCHAT landing page.
  `.trim();

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'vandit@eztech.ai',
    subject: `New Demo Request from ${name} - ${firm}`,
    text: emailBody,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #3A7BD5;">New Demo Request</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr style="background-color: #f9fafb;">
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Name:</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Email:</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;"><a href="mailto:${email}">${email}</a></td>
          </tr>
          <tr style="background-color: #f9fafb;">
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Firm:</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${firm}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Team Size:</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${teamSize}</td>
          </tr>
          <tr style="background-color: #f9fafb;">
            <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: bold;">Phone:</td>
            <td style="padding: 10px; border: 1px solid #e5e7eb;">${phone || 'Not provided'}</td>
          </tr>
        </table>
        <p style="margin-top: 20px; color: #6b7280; font-size: 12px;">
          This is an automated message from the EZCHAT landing page.
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully to vandit@eztech.ai');
    res.json({ 
      success: true, 
      message: 'Email sent successfully' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Failed to send email',
      error: error.message 
    });
  }
}

