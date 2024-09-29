import bodyParser from 'body-parser';
import colors from 'colors';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import connectDB from './api/config/db';
import jobRoutes from './api/routes/JobRoutes';
import userRoutes from './api/routes/userRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: false }))


app.use('/api/jobs', jobRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(colors.cyan(`Server running on port ${PORT}`));
});

connectDB();
