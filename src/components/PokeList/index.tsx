import "./styles.css";
import Card from "../Card";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const PokeList = () => {
  const pokeList = useSelector((state: RootState) => state.pokemonList);
  return (
    <div className="pokeList">
      {pokeList.results.map((pokemon) => (
        <Card
          id={pokemon.id}
          name={pokemon.name}
          img={pokemon.img}
          type={pokemon.type}
          key={pokemon.id}
        />
      ))}
    </div>
  );
};

export default PokeList;
