import { useNavigate } from 'react-router-dom';

const Button = ({
  btnText,
  navigateTo,
}: {
  btnText: string;
  navigateTo: string;
}) => {
  const navigate = useNavigate();

  const onButtonClick = () => {
    navigate(`/${navigateTo}`);
  };

  return (
    <button onClick={onButtonClick}>
      <span className="text-blue-500">{btnText}</span>
    </button>
  );
};

export default Button;
