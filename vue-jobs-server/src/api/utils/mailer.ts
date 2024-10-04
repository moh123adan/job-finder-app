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