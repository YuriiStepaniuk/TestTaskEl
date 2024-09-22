import express, { Request, Response } from 'express';
import Registration from '../models/registration';

interface Params {
  eventId: string;
}

const router = express.Router();

router.get(
  '/participants/:eventId',
  async (req: Request<Params>, res: Response) => {
    const { eventId } = req.params;

    try {
      const participants = await Registration.find({ eventId }).select(
        'fullname email'
      );
      console.log(participants);

      if (participants.length === 0) {
        return res
          .status(404)
          .json({ message: 'No participants found for this event' });
      }

      // Send back the list of participants
      res.status(200).json(participants);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  }
);

export default router;
