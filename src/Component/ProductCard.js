import React from "react";

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
    <div className="product__card" data-aos="zoom-in">
      <img src={props.img} alt="" />
      <div>
        <p>{props.type}</p>
        <h3>{props.name}</h3>
        <h1>₹ {Math.round(Number(props.price) * 72.64)}</h1>
      </div>
      <button>Add To Cart</button>
    </div>
  );
};

export default ProductCard;
