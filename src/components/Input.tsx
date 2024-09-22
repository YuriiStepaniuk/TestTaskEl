const Input = ({
  inputTitle,
  title,
  value,
  onChange,
}: {
  inputTitle: string;
  title: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="m-4 flex flex-col justify-center items-start w-full">
      <label htmlFor={inputTitle} className="mb-1">
        {title}
      </label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="border-black border rounded-md p-2 w-3/4"
        placeholder={`${title}...`}
        required
      />
    </div>
  );
};

export default Input;
