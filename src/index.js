import React from "react";
import ReactDOM from "react-dom";

// component
import App from "./App";

// redux store
import store from "./redux/store";

// redux provider
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
