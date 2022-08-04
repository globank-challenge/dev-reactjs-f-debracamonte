export type PokemonAdapter = {
  id: string;
  name: string;
  img: string;
  type: string;
};
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

export type Pokemon = {
  name: string;
  url: string;
};
export type PokemonList = {
  count: number;
  next: string;
  previous: string | null;
  results: Pokemon[];
};
