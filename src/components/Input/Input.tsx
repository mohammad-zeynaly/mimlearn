import { forwardRef } from "react";
interface InputProps {
  id: string;
  type: string;
  className?: string;
  placeholder?: string;
  onInput?: () => {} | void;
}

const Input = forwardRef(
  (
    { id, type, className, placeholder, onInput }: InputProps,
    ref: React.LegacyRef<HTMLInputElement> | undefined
  ): JSX.Element => {
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
        onInput={onInput}
        ref={ref}
      />
    );
  }
);

export default Input;
