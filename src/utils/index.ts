export const capitalize = (string: string) => {
  const firstLetter = string.split("")[0].toUpperCase();
  return firstLetter + string.slice(1);
};

export const getId = (url: string) => {
  return url.split("pokemon/")[1].split("/")[0];
};

export const getImageUrl = (url: string) => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getId(
    url
  )}.png `;
};

export const colours = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

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