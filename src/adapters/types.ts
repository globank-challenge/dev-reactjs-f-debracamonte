export type PokemonAdapterProps = {
  id: number;
  name: string;
  sprites: Sprites;
  types: PokeTypes;
};
export type PokemonAdapted = {
  id: string;
  name: string;
  img: string;
  type: string;
};
export type PokemonDetail = {
  id: number;
  name: string;
  sprites: Sprites;
  types: PokeTypes;
  weight: number;
  abilities: Abilities;
};
export type PokemonDetailAdapted = {
  id: string;
  name: string;
  sprites: (string | undefined | null)[];
  types: string[];
  weight: string;
  abilities: string[];
};
type Sprites = {
  front_default: string | null;
  back_default?: string | null;
  back_shiny?: string | null;
  front_shiny?: string | null;
  front_female?: string | null;
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
export type PokemonFetch = {
  count: number;
  next: string;
  previous: string | null;
  results: Pokemon[];
};
export type PokemonNavigation = {
  count: number;
  next: string | null;
  previus: string | null;
};
