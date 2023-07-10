const Input = ({ id, type }: { id: string; type: string }): JSX.Element => {
  return (
    <input
      id={id}
      className="p-2 focus:outline-none border border-solid border-[#dcdcdc] rounded-[4px]"
      type={type}
    />
  );
};

export default Input;
