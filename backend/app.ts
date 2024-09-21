import connectDB from './config/db';
import express, { Request, Response } from 'express';

import EventFromList from './models/event';

const app = express();
const port = 3000;

connectDB();
const addFirstEvent = async () => {
  const firstEvent = new EventFromList({
    title: 'Tech Conference 2024',
    description: 'An annual conference focusing on the latest tech trends.',
    eventDate: new Date('2024-03-15'),
    organizer: 'Tech Innovators Inc.',
  });

  try {
    const savedEvent = await firstEvent.save();
    console.log('Event saved:', savedEvent);
  } catch (error) {
    console.error('Error saving event:', error);
  }
};

addFirstEvent();

app.get('/events', async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;

  try {
    const events = await EventFromList.find()
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await EventFromList.countDocuments();
    res.json({
      events,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
