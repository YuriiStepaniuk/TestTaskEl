import { useState } from 'react';

import Input from '../components/Input';
import { useNavigate, useParams } from 'react-router-dom';

const RegistrationPage = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();
  const navigation = useNavigate();

  const handleOptionChange = (event: any) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formattedDate = new Date(
      dateOfBirth.split('.').reverse().join('-')
    ).toISOString();

    const formObject = {
      fullname,
      email,
      dateOfBirth: formattedDate,
      eventId: id,
      selectedOption,
    };

    console.log(formObject);

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
      navigation('/events');
    } catch (error) {
      console.error('Error submitting the form:', error);
    }
  };

  return (
    <div className="flex flex-col items-start m-4">
      <h1 className="text-2xl">Event registration</h1>
      <form
        action="http://localhost:3001/api/register"
        method="POST"
        onSubmit={handleSubmitForm}
        className="flex flex-col items-start justify-start"
      >
        <input type="hidden" name="eventId" value={id} />{' '}
        {/* Hidden input to send event ID */}
        <Input
          inputTitle="fullname"
          title="Full Name"
          inputType="text"
          value={fullname}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFullname(e.target.value)
          }
          pattern="^[A-Z][a-z]+ [A-Z][a-z]+$"
          err="Please enter name in format 'John Doe'"
        />
        <Input
          inputTitle="email"
          inputType="email"
          title="Email"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
          err="Please enter valid email"
        />
        <Input
          inputTitle="dateOfBirth"
          inputType="date"
          title="Date of birth"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          err="Please enter valid date"
        />
        <p className="my-2 ml-4">Where did you hear about us ?</p>
        <div className="flex gap-2 ml-4">
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
        <button type="submit" className="text-blue-500 self-center my-2">
          submit
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
