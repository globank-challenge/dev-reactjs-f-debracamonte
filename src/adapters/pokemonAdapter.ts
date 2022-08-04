import { capitalize } from "../utils";
import { PokemonAdapter } from "./types";

export const pokemonAdapter = (pokemon: any): PokemonAdapter => ({
  id: String(pokemon.id),
  name: capitalize(pokemon.name),
  img: pokemon.sprites.front_default,
  type: pokemon.types[0].type.name,
});
