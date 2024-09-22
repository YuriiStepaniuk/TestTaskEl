import express, { Request, Response } from 'express';
import EventFromList from '../models/event';

const router = express.Router();

// Get a single event by ID
router.get('/events/:id', async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const event = await EventFromList.findById(id);
    if (!event) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.json(event);
  } catch (error) {
    console.error('Error fetching event:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
