import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentList, setLoading } from "../redux/slices/pokemonList";
import { RootState } from "../redux/store";
import { getPokemonList } from "../services/getPokemonList.service";

const useSetPokemonList = () => {
  const pokeList = useSelector((state: RootState) => state.pokemonList);
  const dispatch = useDispatch();
  const itsNextDisabled = () => {
    if (pokeList.next) return false;
    if (pokeList.loading) return false;
    return true;
  };
  const itsPreviusDisabled = () => {
    if (pokeList.previus) return false;
    if (pokeList.loading) return false;
    return true;
  };
  const nextPage = async (nextUrl: string) => {
    const data = await getPokemonList(nextUrl);
    dispatch(setCurrentList(data));
  };
  const previusPage = async (previusUrl: string) => {
    const data = await getPokemonList(previusUrl);
    dispatch(setCurrentList(data));
  };
  const nextPageHandler = () => {
    dispatch(setLoading(true));
    if (pokeList.next) nextPage(pokeList.next);
    dispatch(setLoading(false));
  };
  const previusPageHandler = () => {
    dispatch(setLoading(true));
    if (pokeList.previus) previusPage(pokeList.previus);
    dispatch(setLoading(false));
  };
  const useInitPokemonList = () => {
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
    itsNextDisabled,
    itsPreviusDisabled,
    useInitPokemonList,
  };
};

export default useSetPokemonList;
