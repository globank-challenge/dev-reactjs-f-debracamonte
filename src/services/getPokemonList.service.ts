import axios from "axios";
import { pokemonAdapter } from "../adapters/pokemonAdapter";
import { pokemonFetchDataAdapter } from "../adapters/pokemonFetchAdapter";
import { baseUrl } from "../env";

export const getPokemonList = async (url: string) => {
  if (url === null) return;
  const { data } = await axios.get(url);
  const navigationData = pokemonFetchDataAdapter(data);
  const pokemonListPromises = await data.results.map(
    async (pokemon: { name: string; url: string }) => {
      const data = await axios.get(`${baseUrl}/pokemon/${pokemon.name}`);
      const pokeListDetailedAdapted = pokemonAdapter(data.data);
      return pokeListDetailedAdapted;
    }
  );
  const pokemonList = await Promise.all(pokemonListPromises);
  return { results: pokemonList, ...navigationData };
};
