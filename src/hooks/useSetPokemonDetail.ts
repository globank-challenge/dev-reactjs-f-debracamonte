import { useDispatch } from "react-redux";

import { getPokemonDetail } from "../services/getPokemonDetail.service";
import { setCurrentPokemon, setisActive } from "../redux/slices/pokemonDetails";
import { setError } from "../redux/slices/errorHandler";

const useSetPokemonDetail = () => {
  const dispatch = useDispatch();
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

  return { setPokemonDetail };
};

export default useSetPokemonDetail;
