import Mail from 'nodemailer/lib/mailer';

interface EmailInput {
  username: string;
  email: string;
  uuid: string;
}

export const generateVerificationEmail = (credentials: EmailInput): Mail.Options => ({
  from: 'Test App <test-noreply@app.com>',
  to: credentials.email,
  subject: `Welcome to TestApp, ${credentials.username}!`,
  html: `<h1>Verify your account!</h1>\
            <p>Please click the link below to verify your account</p>\
            <a href="http://localhost:3000/api/confirm_account?id=${credentials.uuid}" target="_blank">Register Account</a>`,
});
