import mongoose from 'mongoose';
import colors from 'colors'

const connectDB = async (): Promise<void> => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI as string);
        console.log(colors.underline.yellow(`MongoDB Connected: ${conn.connection.host}`));
    } catch (error: any) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

export default connectDB;
