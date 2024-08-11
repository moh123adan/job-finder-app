import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import jobRoutes from './routes/JobRoutes';
import connectDB from './config/db'
import colors from 'colors';
import errorHandler from './middleware/error_handler';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }))


app.use('/api', jobRoutes);

app.listen(PORT, () => {
  console.log(colors.cyan(`Server running on port ${PORT}`));
});

connectDB();
