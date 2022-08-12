import PropTypes from "prop-types";
import { render as rtlRender } from "@testing-library/react";
import React, { ReactElement, PropsWithChildren } from "react";
import { Provider } from "react-redux";
import type { RenderOptions } from "@testing-library/react";
import type { PreloadedState } from "@reduxjs/toolkit";
import { setupStore } from "../redux/store";
import type { AppStore, RootState } from "../redux/store";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

function render(
  ui: ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }
  Wrapper.propTypes = {
    children: PropTypes.element.isRequired,
  };

  return { store, ...rtlRender(ui, { wrapper: Wrapper, ...renderOptions }) };
}

export * from "@testing-library/react";

export { render };
