import express, { Request, Response } from 'express';
import Registration from '../models/registration';

const router = express.Router();

// Middleware to parse JSON
router.use(express.json());

router.post('/register', async (req: Request, res: Response) => {
  const { fullname, email, dateOfBirth, selectedOption, eventId } = req.body;

  try {
    const registration = new Registration({
      fullname,
      email,
      dateOfBirth,
      selectedOption,
      eventId,
    });

    const savedRegistration = await registration.save();
    res.status(201).json({
      message: 'Registration successful',
      registration: savedRegistration,
    });
  } catch (err) {
    if (err instanceof Error) {
      // If err is an instance of Error, you can access its message
      return res
        .status(500)
        .json({ message: 'Server error', error: err.message });
    }
    // Handle unexpected error type
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
