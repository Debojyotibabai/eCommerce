import React from "react";
import ReactDOM from "react-dom";

// component
import App from "./App";

// context
import { CartProvider } from "./CartContext";

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById("root")
);
