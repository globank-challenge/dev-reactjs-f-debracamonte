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

export const pokemonFetchDataAdapter = (pokemonList: PokemonList) => ({
  count: pokemonList.count,
  next: pokemonList.next,
  previus: pokemonList.previous,
});
