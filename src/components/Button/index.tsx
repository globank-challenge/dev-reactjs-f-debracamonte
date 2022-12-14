import "./styles.css";
import { ButtonProps } from "./types";

const Button = ({ children, disabled, onClick }: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={() => onClick()}
      disabled={disabled}
      className={`button ${disabled && "button--disabled"}`}
    >
      {children}
    </button>
  );
};

export default Button;
