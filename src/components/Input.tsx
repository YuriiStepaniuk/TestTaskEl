import { useState } from 'react';

const Input = ({
  inputTitle,
  title,
  value,
  onChange,
  inputType,
  pattern = '',
  err = '',
}: {
  inputTitle: string;
  title: string;
  value: string;

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputType: string;
  pattern?: string;
  err?: string | null;
}) => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (inputType === 'date') {
      const inputDate = new Date(e.target.value);
      const today = new Date();
      today.setHours(0, 0, 0, 0); // Set time to midnight for comparison

      if (inputDate >= today) {
        setError(true);
        setErrorMessage(err || 'Date of Birth must be in the past.');
      } else {
        setError(false);
        setErrorMessage(null);
      }
    } else {
      const regex = new RegExp(pattern);
      const isValid = regex.test(e.target.value);
      setError(!isValid);
      setErrorMessage(isValid ? null : 'Must match the format.');
    }
  };

  return (
    <div className="m-4 flex flex-col justify-center items-start w-full">
      <label htmlFor={inputTitle} className="mb-1">
        {title}
      </label>
      <input
        type={inputType}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        className="border-black border rounded-md p-2 w-3/4"
        placeholder={`${title}...`}
        required
        pattern={pattern}
      />
      {error && <small className="text-red-500">{errorMessage}</small>}
    </div>
  );
};

export default Input;
