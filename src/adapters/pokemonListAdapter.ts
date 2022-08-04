import { pokemonAdapter } from "./pokemonAdapter";

export type Pokemon = {
  name: string;
  url: string;
};
type PokemonList = {
  count: number;
  next: string;
  previous: string | null;
  results: Pokemon[];
};

export const pokemonListAdapter = (pokemonList: PokemonList) => ({
  count: pokemonList.count,
  next: pokemonList.next,
  previus: pokemonList.previous,
  results: pokemonList.results.map((pokemon) => pokemonAdapter(pokemon)),
});
