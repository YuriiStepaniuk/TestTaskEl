import { useRef } from 'react';

const Input = ({
  inputTitle,
  title,
}: {
  inputTitle: string;
  title: string;
}) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <div className="m-4 flex flex-col justify-center items-start">
      <label htmlFor={inputTitle} className="mb-1">
        {title}
      </label>
      <input
        type="text"
        ref={ref}
        className="border-black border rounded-md p-2"
        placeholder={`${title}...`}
        required
      />
    </div>
  );
};

export default Input;
