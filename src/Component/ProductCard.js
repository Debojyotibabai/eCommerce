import React from "react";
import { NavLink } from "react-router-dom";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// css
import "../Css/ProductCard.css";

const ProductCard = (props) => {
  // aos init
  AOS.init({
    duration: 1000,
  });

  return (
    <div className="product__card" data-aos="fade-up">
      <img src={props.img} alt="" />
      <div>
        <h1>{props.type}</h1>
        <h2>{props.name}</h2>
        <h3>{props.description}</h3>
        <h4>₹ {Math.round(Number(props.price) * 75)}</h4>
        <NavLink className="product__card__button" to="">
          Add To Cart
        </NavLink>
      </div>
    </div>
  );
};

export default ProductCard;
