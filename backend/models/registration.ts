import mongoose from 'mongoose';

const registrationSchema = new mongoose.Schema({
  fullname: { type: String, required: true },
  email: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  selectedOption: { type: String, required: true },
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event',
    required: true,
  },
});

const Registration = mongoose.model('Registration', registrationSchema);

export default Registration;
