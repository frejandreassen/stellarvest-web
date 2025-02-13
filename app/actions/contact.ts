'use server'

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
    const name = formData.get('first-name')
    const surname = formData.get('last-name')
    const email = formData.get('email')
    const phone = formData.get('phone-number')
    const team = formData.get('team')
    const message = formData.get('message')

    // Here you would typically save to database or send email
    console.log('Form data:', { name, surname, email, phone, team, message })

    return { success: true, message: 'Form submitted successfully' };
  } catch (error) {
    console.error('Error:', error);
    return { success: false, message: 'An error occurred while submitting the form' };
  }
}