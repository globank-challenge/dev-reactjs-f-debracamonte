import axios from "axios";
import { pokemonDetailAdapter } from "../adapters/pokemonDetailAdapter";

export const getPokemonDetail = async (url: string) => {
  if (url === null) return;
  const data = await axios.get(url);
  return pokemonDetailAdapter(data.data);
};
