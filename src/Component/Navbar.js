import React from "react";
import { NavLink } from "react-router-dom";

// css
import "../Css/App.css";
import "../Css/Navbar.css";

const Navbar = () => {
  return (
    // navbar
    <div className="navbar">
      {/* logo */}
      <NavLink to="/" className="logo">
        eBeauty.
      </NavLink>

      {/* navlinks */}
      <ul>
        <li>
          <NavLink
            exact
            to="/"
            className="navlink"
            activeClassName="active__navlink"
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/cosmetics"
            className="navlink"
            activeClassName="active__navlink"
          >
            PRODUCTS
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/contact"
            className="navlink"
            activeClassName="active__navlink"
          >
            CONTACT
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/blog"
            className="navlink"
            activeClassName="active__navlink"
          >
            BLOG
          </NavLink>
        </li>
      </ul>

      {/* cart */}
      <NavLink to="" className="cart">
        CART
      </NavLink>
    </div>
  );
};

export default Navbar;
