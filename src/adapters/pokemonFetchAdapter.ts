import { PokemonFetch, pokemonNavigation } from "./types";

export const pokemonFetchDataAdapter = (
  pokemonFetch: PokemonFetch
): pokemonNavigation => ({
  count: pokemonFetch.count,
  next: pokemonFetch.next,
  previus: pokemonFetch.previous,
});
