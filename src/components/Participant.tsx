const Participant = ({ name, email }: { name: string; email: string }) => {
  return (
    <div className="border border-black w-64 h-32 flex flex-col justify-center items-center">
      <h2 className="text-2xl">{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Participant;
