import PropTypes from "prop-types";
import { render as rtlRender } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import React, { FC, ReactElement } from "react";
import { errorHandlerSlice } from "../redux/slices/errorHandler";
import { Provider } from "react-redux";

import { pokemonDetailSlice } from "../redux/slices/pokemonDetails";
import { pokemonListSlice } from "../redux/slices/pokemonList";

function render(
  ui: ReactElement,
  {
    preloadedState = {},
    store = configureStore({
      reducer: {
        errorHandler: errorHandlerSlice.reducer,
        pokemonDetail: pokemonDetailSlice.reducer,
        pokemonList: pokemonListSlice.reducer,
      },
    }),
    ...renderOptions
  } = {}
) {
  const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };
  Wrapper.propTypes = {
    children: PropTypes.element.isRequired,
  };
  return rtlRender(ui, {
    wrapper: Wrapper,
    ...renderOptions,
  });
}

export * from "@testing-library/react";

export { render };
