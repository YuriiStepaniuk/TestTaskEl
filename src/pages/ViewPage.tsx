import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Participant from '../components/Participant';
import IParticipant from '../types/IParticipant';

const ViewPage = () => {
  const [participants, setParticipants] = useState<IParticipant[]>([]);
  const [eventName, setEventName] = useState<string>('');
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/participants/${id}`
        );
        const data = await response.json();
        setParticipants(data);

        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  // Fetch event name
  useEffect(() => {
    const fetchEventName = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/events/${id}`);
        const eventData = await response.json();
        setEventName(eventData.title);
      } catch (error) {
        console.log('Error fetching event:', error);
      }
    };

    fetchEventName();
  }, [id]);

  return (
    <div className="m-4 gap-4 flex items-start justify-center flex-wrap flex-col">
      <h1>Participants</h1>
      <h1>{eventName}</h1>
      <div className="flex gap-4">
        {participants.length > 0 ? (
          participants.map((participant, id) => (
            <Participant
              key={id}
              name={participant.fullname}
              email={participant.email}
            />
          ))
        ) : (
          <h1>Seems like no one has joined this event yet :(</h1>
        )}
      </div>
    </div>
  );
};

export default ViewPage;
