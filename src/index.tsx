import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { setupStore } from "./redux/store";
import Home from "./Screens/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={setupStore()}>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </Provider>
);
