import { useState } from 'react';

import Button from '../components/Button';
import Input from '../components/Input';
import { useParams } from 'react-router-dom';

const RegistrationPage = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const { id } = useParams();

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(`http://localhost:3001/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formObject),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div className="flex flex-col items-start m-4">
      <h1>Event registration</h1>
      <form
        action="http://localhost:3001/api/register"
        method="POST"
        onSubmit={handleSubmitForm}
      >
        <input type="hidden" name="eventId" value={id} />{' '}
        {/* Hidden input to send event ID */}
        <Input inputTitle="fullname" title="Full Name" />
        <Input inputTitle="email" title="Email" />
        <Input inputTitle="dateOfBirth" title="Date of birth" />
        <p>Where did you hear about us ?</p>
        <div className="flex">
          <label>
            <input
              type="radio"
              name="selectedOption"
              value="Social media"
              checked={selectedOption === 'Social media'}
              onChange={handleOptionChange}
            />
            Social media
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="selectedOption"
              value="Friends"
              checked={selectedOption === 'Friends'}
              onChange={handleOptionChange}
            />
            Friends
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="selectedOption"
              value="Found myself"
              checked={selectedOption === 'Found myself'}
              onChange={handleOptionChange}
            />
            Found myself
          </label>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default RegistrationPage;
