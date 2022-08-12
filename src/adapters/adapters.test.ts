import { fakeResponse } from "../utils/mockData";
import { pokemonAdapter } from "./pokemonAdapter";
import { pokemonDetailAdapter } from "./pokemonDetailAdapter";
import { pokemonFetchDataAdapter } from "./pokemonFetchAdapter";

describe("pokemonAdapter", () => {
  test("should returns the data with the correct format", () => {
    const mockData = {
      id: 23,
      name: "ekans",
      sprites: {
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
      },
      types: [{ type: { name: "poison", url: "url" }, slot: 1 }],
    };
    const mockDataAdapted = {
      id: "23",
      name: "Ekans",
      img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
      type: "poison",
    };
    expect(pokemonAdapter(mockData)).toEqual(mockDataAdapted);
  });
});
describe("pokemonDetailAdapter", () => {
  test("should returns the data with the correct format", () => {
    const mockData = {
      abilities: [
        {
          ability: {
            name: "intimidate",
            url: "https://pokeapi.co/api/v2/ability/22/",
          },
          is_hidden: false,
          slot: 1,
        },
        {
          ability: {
            name: "shed-skin",
            url: "https://pokeapi.co/api/v2/ability/61/",
          },
          is_hidden: false,
          slot: 2,
        },
        {
          ability: {
            name: "unnerve",
            url: "https://pokeapi.co/api/v2/ability/127/",
          },
          is_hidden: true,
          slot: 3,
        },
      ],
      id: 23,
      name: "ekans",
      sprites: {
        back_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/23.png",
        back_female: null,
        back_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/23.png",
        back_shiny_female: null,
        front_default:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
        front_female: null,
        front_shiny:
          "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/23.png",
        front_shiny_female: null,
      },
      types: [
        {
          slot: 1,
          type: {
            name: "poison",
            url: "https://pokeapi.co/api/v2/type/4/",
          },
        },
      ],
      weight: 69,
    };
    const mockDataAdapted = {
      id: "23",
      name: "Ekans",
      sprites: [
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/23.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/23.png",
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/23.png",
        null,
      ],
      types: ["poison"],
      weight: "69",
      abilities: ["intimidate", "shed-skin", "unnerve"],
    };
    expect(pokemonDetailAdapter(mockData)).toEqual(mockDataAdapted);
  });
});
describe("´pokemonFetchAdapter", () => {
  test("should returns the data with the correct format", () => {
    const mockData = fakeResponse;
    const mockDataAdapted = {
      count: 1154,
      next: "https://pokeapi.co/api/v2/pokemon?offset=4&limit=4",
      previus: null,
    };
    expect(pokemonFetchDataAdapter(mockData)).toEqual(mockDataAdapted);
  });
});
