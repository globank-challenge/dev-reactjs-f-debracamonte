import { useDispatch } from "react-redux";
import { getPokemonDetail } from "../services/getPokemonDetail.service";
import { setCurrentPokemon, setisActive } from "../redux/slices/pokemonDetails";
import { setError } from "../redux/slices/errorHandler";
import { ChangeEvent, useState } from "react";

const useSetPokemonDetail = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value);
  };

  const onEnterHandler = (
    event: { key: string },
    onSearch: (pokemonName: string) => void
  ): void => {
    if (event.key === "Enter") {
      onSearch(inputValue.toLowerCase());
      setInputValue("");
    }
  };

  const setPokemonDetail = async (id: string): Promise<void> => {
    try {
      const pokemonDetail = await getPokemonDetail(
        `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      if (pokemonDetail) {
        dispatch(setCurrentPokemon(pokemonDetail));
        dispatch(setisActive(true));
        dispatch(setError(false));
      }
    } catch (error) {
      dispatch(setError(true));
    }
  };

  return {
    setPokemonDetail,
    inputValue,
    onEnterHandler,
    onChangeHandler,
  };
};

export default useSetPokemonDetail;
