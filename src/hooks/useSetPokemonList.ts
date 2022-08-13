import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentList, setLoading } from "../redux/slices/pokemonList";
import { RootState } from "../redux/store";
import { getPokemonList } from "../services/getPokemonList.service";

const useSetPokemonList = () => {
  const pokeList = useSelector((state: RootState) => state.pokemonList);
  const dispatch = useDispatch();

  const itsDisabled = (name: string): boolean => {
    let pokelink;
    if (name === "next") {
      pokelink = pokeList.next;
    }
    if (name === "previous") {
      pokelink = pokeList.previus;
    }
    if (pokelink !== null && !pokeList.loading) return false;
    return true;
  };

  const nextPageHandler = async (): Promise<void> => {
    dispatch(setLoading(true));
    if (pokeList.next) {
      const data = await getPokemonList(pokeList.next);
      dispatch(setCurrentList(data));
    }
    dispatch(setLoading(false));
  };

  const previusPageHandler = async (): Promise<void> => {
    dispatch(setLoading(true));
    if (pokeList.previus) {
      const data = await getPokemonList(pokeList.previus);
      dispatch(setCurrentList(data));
    }
    dispatch(setLoading(false));
  };

  const useInitPokemonList = (): void => {
    useEffect(() => {
      getPokemonList("https://pokeapi.co/api/v2/pokemon?offset=0&limit=4").then(
        (response) => dispatch(setCurrentList(response))
      );
      dispatch(setLoading(false));
    }, []);
  };

  return {
    nextPageHandler,
    previusPageHandler,
    itsDisabled,
    useInitPokemonList,
  };
};

export default useSetPokemonList;
