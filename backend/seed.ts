import connectDB from './config/db';
import EventFromList from './models/event';

const seedEvents = async () => {
  await connectDB(); // Connect to your database

  const events = Array.from({ length: 20 }, (_, index) => ({
    title: `Event Title ${index + 1}`,
    description: `Description for Event ${index + 1}`,
    eventDate: new Date(`2024-01-${index + 1}`), // Example dates
    organizer: `Organizer ${index + 1}`,
  }));

  try {
    await EventFromList.insertMany(events); // Insert all events at once
    console.log('Events added successfully!');
  } catch (error) {
    console.error('Error adding events:', error);
  } finally {
    process.exit(); // Exit the process after seeding
  }
};

seedEvents();
