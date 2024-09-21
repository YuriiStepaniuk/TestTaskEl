import express, { Request, Response } from 'express';
import EventFromList from '../models/event'; // Adjust the path to your Event model

const router = express.Router();

router.get('/events', async (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 12;

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

export default router;
