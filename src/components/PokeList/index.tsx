import "./styles.css";
import Card from "../Card";

import useSetPokemonDetail from "../../hooks/useSetPokemonDetail";

const PokeList = () => {
  const { setPokemonDetail, pokeList } = useSetPokemonDetail();
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
