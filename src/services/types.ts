import { PokemonAdapted, PokemonNavigation } from "../adapters/types";

export type PokemonList =
  | (PokemonNavigation & { results: PokemonAdapted[] })
  | undefined;
