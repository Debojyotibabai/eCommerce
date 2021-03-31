import React from "react";

// router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// component
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Products from "./Component/Products";
import Contact from "./Component/Contact";
import Cart from "./Component/Cart";

// css
import "./Css/App.css";

const App = () => {
  return (
    <Router>
      {/* navbar */}
      <Navbar />

      {/* paths */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/cart" component={Cart} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
