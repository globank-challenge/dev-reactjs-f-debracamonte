import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import useSetPokemonDetail from "../useSetPokemonDetail";

const SetPokemonDetailExample = () => {
  const { name } = useSelector((state: RootState) => state.pokemonDetail);
  const { setPokemonDetail, inputValue, onEnterHandler, onChangeHandler } =
    useSetPokemonDetail();
  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => onChangeHandler(e)}
        onKeyDown={(e) => onEnterHandler(e, setPokemonDetail)}
      />
      <h1>{name}</h1>
    </div>
  );
};

export default SetPokemonDetailExample;
