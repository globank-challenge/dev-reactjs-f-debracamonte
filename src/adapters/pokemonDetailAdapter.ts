import { capitalize } from "../utils";

export type PokemonDetail = {
  id: string;
  name: string;
  sprites: Sprites;
  types: PokeTypes;
  weight: string;
  abilities: Abilities;
};
type Sprites = {
  front_default: string;
  back_default?: string;
  back_shiny?: string;
  front_shiny?: string;
  front_female?: string;
};
type PokeTypes = { type: { name: string; url: string }; slot: number }[];
type Abilities = {
  ability: { name: string; url: string };
  is_hidden: boolean;
  slot: number;
}[];

export const pokemonDetailAdapter = (pokemon: PokemonDetail) => ({
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
