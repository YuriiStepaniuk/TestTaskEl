import React, { useState, useEffect } from 'react';
import Event from '../components/Event';
import IEvent from '../types/IEvent';

const EventsListPage = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [sortBy, setSortBy] = useState('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEvents = async (page: number) => {
      try {
        const response = await fetch(
          `http://localhost:3001/api/events?page=${page}&limit=12&sortBy=${sortBy}`
        );
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        const allData = await response.json();
        const data = allData.events;
        console.log(allData);

        setEvents(data);
        setTotalPages(allData.totalPages);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchEvents(currentPage);
  }, [currentPage]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  console.log(events);

  return (
    <div className="flex flex-col justify-center items-start">
      <div className="w-full flex justify-between items-center">
        <h1 className="text-2xl m-4">Events</h1>
        <div className="w-48 flex items-center">
          <p className="mr-4">Sort by: </p>
          <select
            className="border border-black p-1"
            name="sort"
            id="sort"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              setSortBy(e.target.value)
            }
          >
            <option value="title">Title</option>
            <option value="eventDate">Event Date</option>
            <option value="organizer">Organizer</option>
          </select>
        </div>
      </div>

      <div className="flex flex-wrap">
        {events.map((event) => {
          return (
            <Event
              key={event._id}
              _id={event._id}
              title={event.title}
              description={event.description}
              eventDate={event.eventDate}
              organizer={event.organizer}
            />
          );
        })}
      </div>
      <div className="flex justify-center items-center self-center mt-2 mb-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="text-blue-500"
        >
          Previous
        </button>
        <span className="mx-4">
          {' '}
          Page {currentPage} of {totalPages}{' '}
        </span>
        <button
          className="text-blue-500"
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EventsListPage;
