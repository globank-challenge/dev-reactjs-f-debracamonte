import { capitalize } from "../utils";
import { PokemonDetail, PokemonDetailAdapted } from "./types";

export const pokemonDetailAdapter = (
  pokemon: PokemonDetail
): PokemonDetailAdapted => ({
  id: String(pokemon.id),
  name: capitalize(pokemon.name),
  sprites: [
    pokemon.sprites.front_default,
    pokemon.sprites.back_default,
    pokemon.sprites.back_shiny,
    pokemon.sprites.front_shiny,
    pokemon.sprites.front_female,
  ],
  types: pokemon.types.map((type) => type.type.name),
  weight: String(pokemon.weight),
  abilities: pokemon.abilities.map((ability) => ability.ability.name),
});
