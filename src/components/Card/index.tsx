import useSetPokemonDetail from "../../hooks/useSetPokemonDetail";
import "./styles.css";
import { CardProps } from "./types";

const Card = ({ id, name, img, type }: CardProps) => {
  const { setPokemonDetail } = useSetPokemonDetail();
  const onClickHandler = () => {
    setPokemonDetail(id);
  };
  return (
    <div className={`card ${type}`} onClick={onClickHandler}>
      <img src={img} alt={name} className="card__img" />
      <p className="card__text"># {id}</p>
      <p className="card__text">{name}</p>
    </div>
  );
};

export default Card;
