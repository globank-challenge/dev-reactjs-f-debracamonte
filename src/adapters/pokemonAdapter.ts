import { capitalize } from "../utils";
import { PokemonAdapted, PokemonAdapterProps } from "./types";

export const pokemonAdapter = (
  pokemon: PokemonAdapterProps
): PokemonAdapted => ({
  id: String(pokemon.id),
  name: capitalize(pokemon.name),
  img: pokemon.sprites.front_default || "",
  type: pokemon.types[0].type.name,
});
