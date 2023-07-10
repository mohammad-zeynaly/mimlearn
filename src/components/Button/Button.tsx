import { ReactNode } from "react";

const Button = ({
  className,
  children,
  onClick,
}: {
  className: string;
  children: string | ReactNode;
  onClick?: () => {};
}) => {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};

export default Button;
