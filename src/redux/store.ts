import { combineReducers, configureStore } from "@reduxjs/toolkit";

import errorHandler from "./slices/errorHandler";
import pokemonDetails from "./slices/pokemonDetails";
import pokemonList from "./slices/pokemonList";
import type { PreloadedState } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  pokemonDetail: pokemonDetails,
  pokemonList: pokemonList,
  errorHandler: errorHandler,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
