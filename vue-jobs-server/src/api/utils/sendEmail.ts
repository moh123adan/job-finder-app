import nodemailer from "nodemailer";
import expressAsyncHandler from "express-async-handler";

interface User {
    firstName: string;
    email: string;
}

const sendPasswordResetEmail = expressAsyncHandler(async (user: User, otp: string): Promise<void> => {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL as string,
                pass: process.env.EMAIL_PASSWORD as string,
            },
            tls: {
                rejectUnauthorized: false, // Disable certificate validation for self-signed certs
            },
        });