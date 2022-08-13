import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PokemonList } from "../../services/types";

export interface pokemonListState {
  loading: boolean;
  count: number;
  next: string | null;
  previus: string | null;
  results: {
    type: string;
    id: string;
    name: string;
    img: string;
  }[];
}

const initialState: pokemonListState = {
  loading: true,
  count: 0,
  next: null,
  previus: null,
  results: [
    { id: "1", name: "", img: "", type: "" },
    { id: "2", name: "", img: "", type: "" },
    { id: "3", name: "", img: "", type: "" },
    { id: "4", name: "", img: "", type: "" },
  ],
};

export const pokemonListSlice = createSlice({
  name: "pokemonList",
  initialState,
  reducers: {
    setCurrentList: (state, action: PayloadAction<PokemonList>) => ({
      ...state,
      ...action.payload,
    }),
    setLoading: (state, action: PayloadAction<boolean>) => ({
      ...state,
      loading: action.payload,
    }),
  },
});

export const { setCurrentList, setLoading } = pokemonListSlice.actions;

export default pokemonListSlice.reducer;
