import React, { useContext } from "react";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// css
import "../Css/ProductCard.css";

// context
import { CartContext } from "../CartContext";

const ProductCard = (props) => {
  // aos init
  AOS.init({
    duration: 1000,
  });

  // context cart items
  const [cart, setCart] = useContext(CartContext);

  // add to cart functionality
  const addToCart = () => {
    // check if the items is already in cart or not
    const isAlreadyInCart = cart.some((eachCartItem) => {
      return eachCartItem.name === props.name;
    });

    // add the items in cart
    if (isAlreadyInCart) {
      alert("You Added this item in cart");
    } else {
      setCart(() => {
        return [
          ...cart,
          { img: props.img, name: props.name, price: props.price },
        ];
      });
    }
  };

  return (
    <div className="product__card" data-aos="fade-up">
      <img src={props.img} alt="" />
      <div>
        <h1>{props.type}</h1>
        <h2>{props.name}</h2>
        <h3>{props.description}</h3>
        <h4>₹ {props.price}</h4>
        <button onClick={addToCart} className="product__card__button">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
