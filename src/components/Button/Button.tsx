import { ReactNode } from "react";

interface ButtonType {
  type?: "button" | "submit" | "reset" ;
  className: string;
  children: string | ReactNode;
  onClick?: () => {};
}

const Button = ({ type, className, children, onClick }: ButtonType) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
