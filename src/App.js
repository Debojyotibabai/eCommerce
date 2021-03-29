import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// component
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Products from "./Component/Products";
import Contact from "./Component/Contact";

// css
import "./Css/App.css";

const App = () => {
  return (
    <>
      {/* navbar */}
      <Navbar />

      {/* paths */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
