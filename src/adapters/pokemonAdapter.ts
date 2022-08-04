import { capitalize } from "../utils";

export type PokemonAdapter = {
  id: string;
  name: string;
  img: string;
  type: string;
};

export const pokemonAdapter = (pokemon: any): PokemonAdapter => ({
  id: String(pokemon.id),
  name: capitalize(pokemon.name),
  img: pokemon.sprites.front_default,
  type: pokemon.types[0].type.name,
});
