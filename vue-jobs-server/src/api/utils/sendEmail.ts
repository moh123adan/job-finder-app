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


        const emailContent = `
        <div style="font-family: Arial, sans-serif; background-color: #f8f8f8; padding: 20px;">
          <div style="background-color: #ffffff; padding: 20px; border-radius: 5px;">
            <p style="text-align: center;">Hi ${user.firstName},</p>
            <h1 style="text-align: center; color: #333;">Your Password Reset Code</h1>
            <p style="text-align: center; color: #333;">
              Use the following code to reset your password: <strong>${otp}</strong>. 
              It is valid for 10 minutes.
            </p>
          </div>
        </div>
      `;

        const mailOptions = {
            from: process.env.EMAIL as string,
            to: user.email,
            subject: "Password Reset OTP",
            html: emailContent,
        };

        await transporter.sendMail(mailOptions);
        console.log("Password reset OTP sent successfully");
    } catch (error) {
        console.error("Error sending password reset OTP:", error);
        throw new Error("Failed to send password reset OTP.");
    }
});

export { sendPasswordResetEmail };