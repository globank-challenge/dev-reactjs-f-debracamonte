import "./styles.css";
import Card from "../Card";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import useSetPokemonDetail from "../../hooks/useSetPokemonDetail";

const PokeList = () => {
  const pokeList = useSelector((state: RootState) => state.pokemonList);
  const { setPokemonDetail } = useSetPokemonDetail();
  return (
    <div className="pokeList">
      {pokeList.results.map((pokemon) => (
        <Card
          id={pokemon.id}
          name={pokemon.name}
          img={pokemon.img}
          type={pokemon.type}
          onClick={() => setPokemonDetail(pokemon.id)}
          key={pokemon.id}
        />
      ))}
    </div>
  );
};

export default PokeList;
