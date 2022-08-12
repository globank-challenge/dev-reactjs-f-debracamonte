import { PokemonFetch, PokemonNavigation } from "./types";

export const pokemonFetchDataAdapter = (
  pokemonFetch: PokemonFetch
): PokemonNavigation => ({
  count: pokemonFetch.count,
  next: pokemonFetch.next,
  previus: pokemonFetch.previous,
});
