import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// css
import "../Css/App.css";
import "../Css/Navbar.css";

const Navbar = () => {
  // navbar open or not value
  const [isOpen, setIsOpen] = useState(false);

  return (
    // navbar
    <div className="navbar">
      {/* logo */}
      <NavLink to="/" className="logo">
        eBeauty.
      </NavLink>

      {/* navlinks */}
      <ul className={isOpen ? "nav__list nav__list__active" : "nav__list"}>
        <li className="nav__item">
          <NavLink
            exact
            to="/"
            className="nav__link"
            activeClassName="active__nav__link"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            HOME
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            exact
            to="/products"
            className="nav__link"
            activeClassName="active__nav__link"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            PRODUCTS
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            exact
            to="/contact"
            className="nav__link"
            activeClassName="active__nav__link"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            CONTACT
          </NavLink>
        </li>
      </ul>

      {/* menu */}
      <ul className="menu">
        <li className="menu__item">
          <NavLink to="/cart" className="cart">
            CART
          </NavLink>
        </li>
        <li className="menu__item">
          <button
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            className="menu"
          >
            {isOpen ? "CLOSE" : "MENU"}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
