import { rest } from "msw";
import { fakeResponse, mockGetPokemonDetail } from "../mockData";

export const pokemonDetailService = rest.get(
  "https://pokeapi.co/api/v2/pokemon/*",
  async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(mockGetPokemonDetail), ctx.delay(250));
  }
);
export const pokemonListService = rest.get(
  "https://pokeapi.co/api/v2/pokemon-test",
  async (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(fakeResponse), ctx.delay(250));
  }
);

export const handlers = [pokemonDetailService];
