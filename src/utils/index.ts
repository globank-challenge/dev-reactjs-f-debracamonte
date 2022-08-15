export const capitalize = (string: string): string => {
  const firstLetter = string.split("")[0].toUpperCase();
  return firstLetter + string.slice(1);
};

export const getId = (url: string): string => {
  return url.split("pokemon/")[1].split("/")[0];
};

export const getImageUrl = (url: string): string => {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getId(
    url
  )}.png `;
};
