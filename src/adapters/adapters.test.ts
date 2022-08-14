import {
  fakePoekonAdapted,
  fakePokemon,
  fakePokemonDetailAdapted,
  fakeResponse,
  fakeResponseAdapted,
  mockGetPokemonDetail,
} from "../utils/mockData";
import { pokemonAdapter } from "./pokemonAdapter";
import { pokemonDetailAdapter } from "./pokemonDetailAdapter";
import { pokemonFetchDataAdapter } from "./pokemonFetchAdapter";

describe("pokemonAdapter", () => {
  test("should returns the data with the correct format", () => {
    const mockData = fakePokemon;
    const mockDataAdapted = fakePoekonAdapted;
    expect(pokemonAdapter(mockData)).toEqual(mockDataAdapted);
  });
});
describe("pokemonDetailAdapter", () => {
  test("should returns the data with the correct format", () => {
    const mockData = mockGetPokemonDetail;
    const mockDataAdapted = fakePokemonDetailAdapted;
    expect(pokemonDetailAdapter(mockData)).toEqual(mockDataAdapted);
  });
});
describe("´pokemonFetchAdapter", () => {
  test("should returns the data with the correct format", () => {
    const mockData = fakeResponse;
    const mockDataAdapted = fakeResponseAdapted;
    expect(pokemonFetchDataAdapter(mockData)).toEqual(mockDataAdapted);
  });
});
