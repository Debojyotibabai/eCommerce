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
      <p>{props.heading}</p>
    </div>
  );
};

export default ProductCard;
