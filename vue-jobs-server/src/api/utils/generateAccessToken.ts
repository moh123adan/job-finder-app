import jwt from "jsonwebtoken";


// Define the type for the ID (adjust based on your actual ID type, e.g., string or number)
type UserID = string | number;

// Generate Access Token (No isAdmin)
export const generateAccessToken = (id: UserID): string => {
    if (!process.env.JWT_SECRET_KEY) {
        throw new Error("JWT_SECRET_KEY is not defined in the environment variables");
    }

    const accessToken = jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
        expiresIn: "10m", // Access token expires in 10 minutes
    });
    return accessToken;
};

// Generate Refresh Token (No isAdmin)
export const generateRefreshToken = (id: UserID): string => {
    if (!process.env.JWT_REFRESH_SECRET_KEY) {
        throw new Error("JWT_REFRESH_SECRET_KEY is not defined in the environment variables");
    }

    const refreshToken = jwt.sign({ id }, process.env.JWT_REFRESH_SECRET_KEY, {
        expiresIn: "7d", // Refresh token expires in 7 days
    });
    console.log("Refresh Token:", refreshToken); // Log the refresh token
    return refreshToken;
};
