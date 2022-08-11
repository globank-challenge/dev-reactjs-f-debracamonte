import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import "./styles.css";

const DetailCard = () => {
  const pokeDetail = useSelector((state: RootState) => state.pokemonDetail);

  const { id, name, types, weight, sprites, abilities } = pokeDetail;
  return (
    <div className={`detailCard ${types[0]}`}>
      <img
        src={sprites[0]}
        alt={`${name} front sprite`}
        className="detailCard__img"
      />
      <div className="detailCard__mainData">
        <span className="detailCard__id"># {id}</span>
        <p className="detailCard__name">{name}</p>
      </div>

      <div className="detailCard__extraInfo">
        <div className="detailCard__data">
          <p className="detailCard__label">Types</p>
          <p className="detailCard__info">{types.join(", ")}</p>
        </div>
        <div className="detailCard__data">
          <p className="detailCard__label">Peso</p>
          <p className="detailCard__info">{weight}kg</p>
        </div>
        <div className="detailCard__data">
          <p className="detailCard__label">Sprites</p>
          <div className="detailCard__sprites">
            {sprites
              .filter((sprite) => sprite !== null)
              .map((sprite) => (
                <img
                  src={sprite}
                  className="detailCard__sprite"
                  key={sprite}
                  alt="sprite"
                />
              ))}
          </div>
        </div>
        <div className="detailCard__data">
          <p className="detailCard__label">Movimientos</p>
          <p className="detailCard__info">{abilities.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
