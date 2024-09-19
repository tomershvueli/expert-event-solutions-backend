import nodemailer from "nodemailer";
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT as string, 10),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendEmail = async (
  from: string,
  to: string,
  subject: string,
  text: string,
  replyTo: string,
) => {
  const mailOptions = {
    from,
    to,
    subject,
    text,
    replyTo,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Could not send email");
  }
};
