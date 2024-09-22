import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Participant from '../components/Participant';
import IParticipant from '../types/IParticipant';

const ViewPage = () => {
  const [participants, setParticipants] = useState<IParticipant[]>([]);
  const [eventName, setEventName] = useState<string>('');
  const [searchName, setSeachName] = useState('');
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

  const filteredParticipants = participants.filter((participant) =>
    participant.fullname.toLowerCase().includes(searchName.toLowerCase())
  );

  return (
    <div className="m-4 gap-4 flex items-start justify-center flex-wrap flex-col">
      <div className="w-3/4 flex justify-between items-center">
        <h1 className="text-2xl">Participants</h1>
        <div className="flex items-center justify-center">
          <p className="mr-2">Type here to search for exact person: </p>
          <input
            className="border border-black p-1"
            type="text"
            placeholder="John Doe..."
            value={searchName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSeachName(e.target.value)
            }
          />
        </div>
      </div>

      <h1>{eventName}</h1>
      <div className="flex gap-4">
        {filteredParticipants.length > 0 ? (
          filteredParticipants.map((participant, id) => (
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
