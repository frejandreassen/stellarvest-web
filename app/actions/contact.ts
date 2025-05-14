'use server'

import nodemailer from 'nodemailer';

export async function submitContact(formData: FormData) {
  const recaptchaResponse = formData.get('g-recaptcha-response')

  try {
    // Verify reCAPTCHA
    const verificationURL = 'https://www.google.com/recaptcha/api/siteverify';
    const response = await fetch(verificationURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaResponse}`,
    });

    const data = await response.json();
    
    if (!data.success) {
      return { success: false, message: 'reCAPTCHA verification failed' };
    }

    // Process the form data
    const name = formData.get('first-name') as string;
    const surname = formData.get('last-name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone-number') as string;
    const team = formData.get('team') as string;
    const message = formData.get('message') as string;

    // Configure Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Determine recipient email
    const recipientEmail = team === 'Loans' ? 'clientes@stellarvest.pt' : 'info@stellarvest.pt';

    const mailOptions = {
      from: process.env.GMAIL_EMAIL, // sender address
      to: recipientEmail, // list of receivers
      replyTo: email, // Reply to the form submitter's email
      subject: `New Contact Form Submission - Team: ${team}`, // Subject line
      html: `
        <h1>New Contact Form Submission</h1>
        <p><strong>Name:</strong> ${name} ${surname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Selected Team:</strong> ${team}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');

    return { success: true, message: 'Form submitted and email sent successfully' };
  } catch (error) {
    console.error('Error submitting form or sending email:', error);
    // Check if the error is from reCAPTCHA or email sending
    if (error instanceof Error && error.message.includes('reCAPTCHA')) {
        return { success: false, message: error.message };
    }
    return { success: false, message: 'An error occurred while submitting the form or sending the email' };
  }
}