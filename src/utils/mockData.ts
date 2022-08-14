export const fakeResponse = {
  count: 1154,
  next: "https://pokeapi.co/api/v2/pokemon?offset=4&limit=4",
  previous: null,
  results: [
    {
      name: "Bulbasaur",
      url: "https://pokeapi.co/api/v2/pokemon/1/",
    },
    {
      name: "Ivysaur",
      url: "https://pokeapi.co/api/v2/pokemon/2/",
    },
    {
      name: "Venusaur",
      url: "https://pokeapi.co/api/v2/pokemon/3/",
    },
    {
      name: "Charmander",
      url: "https://pokeapi.co/api/v2/pokemon/4/",
    },
  ],
};

export const fakeResponseAdapted = {
  count: 1154,
  next: "https://pokeapi.co/api/v2/pokemon?offset=4&limit=4",
  previus: null,
};

export const fakePokemon = {
  id: 23,
  name: "ekans",
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
  },
  types: [{ type: { name: "poison", url: "url" }, slot: 1 }],
};

export const fakePoekonAdapted = {
  id: "23",
  name: "Ekans",
  img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
  type: "poison",
};

export const mockGetPokemonDetail = {
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
export const fakePokemonDetailAdapted = {
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
  abilities: ["intimidate", "shed-skin", "unnerve"],
  weight: "69",
};

export const mockNavigationData = {
  count: 1154,
  next: "https://pokeapi.co/api/v2/pokemon?offset=4&limit=4",
  previus: null,
};
export const mockResultData = [
  {
    id: "23",
    name: "Ekans",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    type: "poison",
  },
  {
    id: "24",
    name: "Arbok",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    type: "poison",
  },
  {
    id: "25",
    name: "Pikachu",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    type: "electric",
  },
  {
    id: "26",
    name: "Raichu",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    type: "electric",
  },
];
