interface InputProps {
  id: string;
  type: string;
  className?: string;
  placeholder?: string;
}

const Input = ({
  id,
  type,
  className,
  placeholder,
}: InputProps): JSX.Element => {
  return (
    <input
      id={id}
      className={
        className
          ? className
          : "p-2 focus:outline-none border border-solid border-[#dcdcdc] rounded-[4px] text-sm"
      }
      type={type}
      placeholder={placeholder}
    />
  );
};

export default Input;
