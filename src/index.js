import React from "react";
import { render } from "react-dom";

import App from "./components/App";
// import reducer, { initialState } from "./components/Reducer";
import { StateProvider } from "./components/StateProvider";

// initialState={initialState} reducer={reducer}

render(
  <StateProvider>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
