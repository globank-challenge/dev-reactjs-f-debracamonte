import { PokemonList } from "./types";

export const pokemonFetchDataAdapter = (pokemonList: PokemonList) => ({
  count: pokemonList.count,
  next: pokemonList.next,
  previus: pokemonList.previous,
});
