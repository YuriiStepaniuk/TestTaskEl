import connectDB from './config/db';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import eventRoutes from './routes/eventRoutes';
import registrationRoutes from './routes/registrationRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

connectDB();

//Middleware
app.use(express.json());

// Routes
app.use('/api', eventRoutes);
app.use('/api', registrationRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
