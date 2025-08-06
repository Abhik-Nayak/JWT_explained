import nodemailer from 'nodemailer';

const sendEmail = async (to: string, subject: string, html: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  });

  await transporter.sendMail({
    from: `"MERN Auth App" <${process.env.SMTP_USER}>`,
    to,
    subject,
    html,
  });
};

export default sendEmail;
