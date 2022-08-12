import axios from "axios";
import { pokemonDetailAdapter } from "../adapters/pokemonDetailAdapter";
import { PokemonDetailAdapted } from "../adapters/types";

export const getPokemonDetail = async (
  url: string
): Promise<PokemonDetailAdapted | undefined> => {
  if (url === null) return;
  const data = await axios.get(url);
  return pokemonDetailAdapter(data.data);
};
