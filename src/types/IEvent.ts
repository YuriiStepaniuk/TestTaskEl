// Event type from db
interface IEvent {
  _id: string;
  title: string;
  description: string;
  eventDate: string;
  organizer: string;
}

export default IEvent;
