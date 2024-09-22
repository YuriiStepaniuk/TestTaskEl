import IEvent from '../types/IEvent';
import Button from './Button';

const Event: React.FC<IEvent> = ({
  _id,
  title,
  description,
  eventDate,
  organizer,
}) => {
  return (
    <div className="m-4 p-4 border-2 border-black w-64 h-48 flex flex-col justify-center">
      <h2 className="text-2xl">{title}</h2>
      <p className="mb-8">{description}</p>
      <div className="flex justify-between items-center">
        <Button btnText="Register" navigateTo={`register/${_id}`} />
        <Button btnText="View" navigateTo={`view/${_id}`} />
      </div>
    </div>
  );
};

export default Event;
