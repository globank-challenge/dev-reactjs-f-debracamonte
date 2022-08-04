import { createSlice } from "@reduxjs/toolkit";

export interface PokemonDetailState {
  active: boolean;
  id: string;
  name: string;
  sprites: string[];
  types: string[];
  weight: string;
  abilities: string[];
}

const initialState: PokemonDetailState = {
  active: false,
  id: "",
  name: "",
  sprites: [],
  types: ["ghost", "poison"],
  weight: "11",
  abilities: [
    "fire-punch",
    "ice-punch",
    "thunder-punch",
    "disable",
    "megra-drain",
  ],
};

export const pokemonDetailSlice = createSlice({
  name: "pokemonDetail",
  initialState,
  reducers: {
    setCurrentPokemon: (state, action) => ({ ...state, ...action.payload }),
    setisActive: (state, action) => ({ ...state, active: action.payload }),
  },
});

export const { setCurrentPokemon, setisActive } = pokemonDetailSlice.actions;

export default pokemonDetailSlice.reducer;
