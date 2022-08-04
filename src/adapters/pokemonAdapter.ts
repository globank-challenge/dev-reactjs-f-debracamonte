import { capitalize, getId, getImageUrl } from "../utils";
import { Pokemon } from "./pokemonListAdapter";

export const pokemonAdapter = (pokemon: Pokemon) => ({
  id: getId(pokemon.url),
  name: capitalize(pokemon.name),
  img: getImageUrl(pokemon.url),
  type: "",
});
