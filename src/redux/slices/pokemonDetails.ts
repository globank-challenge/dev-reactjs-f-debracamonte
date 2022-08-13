import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PokemonDetailAdapted } from "../../adapters/types";

export interface PokemonDetailState {
  active: boolean;
  id: string;
  name: string;
  sprites: (string | undefined | null)[];
  types: string[];
  weight: string;
  abilities: string[];
}

const initialState: PokemonDetailState = {
  active: false,
  id: "",
  name: "",
  sprites: [undefined],
  types: [""],
  weight: "",
  abilities: [""],
};

export const pokemonDetailSlice = createSlice({
  name: "pokemonDetail",
  initialState,
  reducers: {
    setCurrentPokemon: (
      state,
      action: PayloadAction<PokemonDetailAdapted>
    ) => ({
      ...state,
      ...action.payload,
    }),
    setisActive: (state, action: PayloadAction<boolean>) => ({
      ...state,
      active: action.payload,
    }),
  },
});

export const { setCurrentPokemon, setisActive } = pokemonDetailSlice.actions;

export default pokemonDetailSlice.reducer;
