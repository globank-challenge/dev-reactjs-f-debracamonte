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
