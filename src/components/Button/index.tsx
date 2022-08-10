import "./styles.css";
import { ButtonProps } from "./types";

const Button = ({ children, disabled, onClick }: ButtonProps) => {
  const clickHandler = () => {
    onClick();
  };
  return (
    <button
      onClick={clickHandler}
      disabled={disabled}
      className={`button ${disabled && "button--disabled"}`}
    >
      {children}
    </button>
  );
};

export default Button;
