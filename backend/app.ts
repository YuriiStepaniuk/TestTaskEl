import connectDB from './config/db';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import eventRoutes from './routes/eventRoutes';
import eventSingleRoute from './routes/eventSingleRoute';
import registrationRoutes from './routes/registrationRoutes';
import participantsRoutes from './routes/participantsRoute';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());

connectDB();

//Middleware
app.use(express.json());

// Routes
app.use('/api', eventRoutes);
app.use('/api', eventSingleRoute);
app.use('/api', registrationRoutes);
app.use('/api', participantsRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
