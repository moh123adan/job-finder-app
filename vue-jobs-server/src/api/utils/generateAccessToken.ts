import jwt from "jsonwebtoken";


// Define the type for the ID (adjust based on your actual ID type, e.g., string or number)
type UserID = string | number;

// Generate Access Token (No isAdmin)
export const generateAccessToken = (id: UserID): string => {
    if (!process.env.JWT_SECRET_KEY) {
      throw new Error("JWT_SECRET_KEY is not defined in the environment variables");
    }
