import { waitFor } from "@testing-library/react";
import { mswServer } from "../utils/mswServer";
import {
  pokemonDetailService,
  pokemonListService,
} from "../utils/mswServer/handlers";
import { getPokemonDetail } from "./getPokemonDetail.service";
import { getPokemonList } from "./getPokemonList.service";

beforeAll(() => mswServer.listen());
afterEach(() => mswServer.resetHandlers());
afterAll(() => mswServer.close());

describe("getPokemonDetail", () => {
  test("should return the expected data", async () => {
    mswServer.use(pokemonDetailService);
    const data = await getPokemonDetail(
      "https://pokeapi.co/api/v2/pokemon/testchu"
    );
    await waitFor(() => {
      expect(data).toEqual(
        expect.objectContaining({
          id: expect.any(String),
          name: expect.any(String),
          sprites: expect.any(Array),
          types: expect.any(Array),
          weight: expect.any(String),
          abilities: expect.any(Array),
        })
      );
    });
  });
});
describe("pokemonListService", () => {
  test("should return the expected data", async () => {
    mswServer.use(pokemonListService);
    mswServer.use(pokemonDetailService);
    const data = await getPokemonList("https://pokeapi.co/api/v2/pokemon-test");
    await waitFor(() => {
      expect(data).toEqual(
        expect.objectContaining({
          results: [
            {
              id: expect.any(String),
              name: expect.any(String),
              img: expect.any(String),
              type: expect.any(String),
            },
            {
              id: expect.any(String),
              name: expect.any(String),
              img: expect.any(String),
              type: expect.any(String),
            },
            {
              id: expect.any(String),
              name: expect.any(String),
              img: expect.any(String),
              type: expect.any(String),
            },
            {
              id: expect.any(String),
              name: expect.any(String),
              img: expect.any(String),
              type: expect.any(String),
            },
          ],
          count: expect.any(Number),
          next: expect.any(String),
          previus: null,
        })
      );
    });
  });
});
