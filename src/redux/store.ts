import { configureStore } from "@reduxjs/toolkit";
import errorHandler from "./slices/errorHandler";
import pokemonDetails from "./slices/pokemonDetails";
import pokemonList from "./slices/pokemonList";

export const store = configureStore({
  reducer: {
    pokemonDetail: pokemonDetails,
    pokemonList: pokemonList,
    errorHandler: errorHandler,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
