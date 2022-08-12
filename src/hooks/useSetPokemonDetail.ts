import { useDispatch, useSelector } from "react-redux";
import { getPokemonDetail } from "../services/getPokemonDetail.service";
import { setCurrentPokemon, setisActive } from "../redux/slices/pokemonDetails";
import { setError } from "../redux/slices/errorHandler";
import { RootState } from "../redux/store";
import { ChangeEvent, useState } from "react";

const useSetPokemonDetail = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  const pokeList = useSelector((state: RootState) => state.pokemonList);

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onEnterHandler = (
    event: { key: string },
    onSearch: (pokemonName: string) => void
  ) => {
    if (event.key === "Enter") {
      onSearch(inputValue.toLowerCase());
      setInputValue("");
    }
  };

  const setPokemonDetail = async (id: string) => {
    try {
      const pokemonDetail = await getPokemonDetail(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      dispatch(setCurrentPokemon(pokemonDetail));
      dispatch(setisActive(true));
      dispatch(setError(false));
    } catch (error) {
      dispatch(setError(true));
    }
  };

  return {
    setPokemonDetail,
    pokeList,
    inputValue,
    onEnterHandler,
    onChangeHandler,
  };
};

export default useSetPokemonDetail;
