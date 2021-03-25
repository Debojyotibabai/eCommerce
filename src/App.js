import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// component
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Cosmetics from "./Component/Cosmetics";
import Contact from "./Component/Contact";
import Blog from "./Component/Blog";

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
        <Route exact path="/cosmetics" component={Cosmetics} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/blog" component={Blog} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
