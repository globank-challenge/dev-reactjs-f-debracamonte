import "./styles.css";
import { ButtonProps } from "./types";

const Button = ({
  text,
  disabled,
  icon,
  onClick,
  iconOnTheLeft,
}: ButtonProps) => {
  const clickHandler = () => {
    onClick();
  };
  return (
    <button
      onClick={clickHandler}
      disabled={disabled}
      className={`button ${disabled && "button--disabled"}`}
    >
      <div
        className={`button-content ${
          iconOnTheLeft && "button-content--icon-left"
        }`}
      >
        <span className="button__icon">{icon && icon}</span>
        {text}
      </div>
    </button>
  );
};

export default Button;
