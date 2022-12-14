import "./styles.css";
import { CardProps } from "./types";

const Card = ({ id, name, img, type, onClick }: CardProps): JSX.Element => {
  return (
    <div className={`card ${type}`} onClick={onClick}>
      <img src={img} alt={name} className="card__img" />
      <p className="card__id"># {id}</p>
      <p className="card__text">{name}</p>
    </div>
  );
};

export default Card;
