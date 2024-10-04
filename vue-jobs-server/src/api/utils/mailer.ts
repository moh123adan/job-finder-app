import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();


// Set up transporter
const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: process.env.EMAIL as string, // Your Gmail email
        pass: process.env.EMAIL_PASSWORD as string, // The app password from Google
    },
    tls: {
        rejectUnauthorized: false, // Disable certificate validation for self-signed certs
    },
});


// Function to send an email
export const sendConfirmationEmail = async (email: string): Promise<void> => {
    try {
      const emailContent = `
        <div style="font-family: Arial, sans-serif; background-color: #f8f8f8; padding: 20px;">
          Email sent successfully
        </div>
      `;
  
      const mailOptions = {
        from: process.env.EMAIL as string,
        to: email,
        subject: "Welcome Email",
        html: emailContent,
      };
  
      await transporter.sendMail(mailOptions);
      console.log("Welcome email sent successfully");
    } catch (error) {
      console.error("Error sending welcome email:", error);
      throw new Error("Failed to send welcome email.");
    }
  };