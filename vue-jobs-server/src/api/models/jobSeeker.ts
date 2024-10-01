import mongoose, { Document, Schema, Model } from "mongoose";

// Define the interface for the JobSeeker document
export interface IJobSeeker extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    profilePicture?: string; // Optional field
    phoneNumber: string;
    resetPasswordOTP?: string | null; // Optional field
    resetPasswordExpires?: Date | null; // Optional field
}

// Define the JobSeeker schema
const JobSeekerSchema: Schema<IJobSeeker> = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, unique: true, required: true },
        password: { type: String, required: true },
        profilePicture: { type: String, default: null }, // Optional
        phoneNumber: { type: String, required: true },

        // Fields for password reset
        resetPasswordOTP: { type: String, default: null }, // OTP field
        resetPasswordExpires: { type: Date, default: null }, // Expiration time for OTP
    },
    { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Export the JobSeeker model
const JobSeeker: Model<IJobSeeker> = mongoose.model<IJobSeeker>("JobSeeker", JobSeekerSchema);

export default JobSeeker;
