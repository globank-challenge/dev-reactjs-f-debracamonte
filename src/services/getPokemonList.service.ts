import axios from "axios";
import { pokemonListAdapter } from "../adapters/pokemonListAdapter";

export const getPokemonList = async (url: string | null) => {
  if (url === null) return;
  const data = await axios.get(url);
  const pokemonList = await pokemonListAdapter(data.data);
  return pokemonList;
};
