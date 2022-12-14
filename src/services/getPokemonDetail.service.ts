import axios from "axios";
import { pokemonDetailAdapter } from "../adapters/pokemonDetailAdapter";
import { PokemonDetailAdapted } from "../adapters/types";

export const getPokemonDetail = async (
  url: string
): Promise<PokemonDetailAdapted | undefined> => {
  try {
    if (url === null) return;
    const data = await axios.get(url);
    return pokemonDetailAdapter(data.data);
  } catch (error) {
    throw error;
  }
};
