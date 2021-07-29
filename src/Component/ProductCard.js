import React from "react";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// css
import "../Css/ProductCard.css";

// cart reducer actions
import { cartReducerActions } from "../redux/cartReducer";

// redux
import { useSelector, useDispatch } from "react-redux";

const ProductCard = (props) => {
  // aos init
  AOS.init({
    duration: 1000,
  });

  // cart reducer value
  const cartReducer = useSelector((state) => state.cartReducer);

  // dispatch
  const dispatch = useDispatch();

  // add to cart functionality
  const addToCart = () => {
    const isItemThere = cartReducer.some((eachItem) => {
      return eachItem.name === props.name;
    });

    if (isItemThere) {
      alert("This item is already added to cart");
    } else {
      dispatch(
        cartReducerActions.addCartItem({
          item: { img: props.img, name: props.name, price: props.price },
        })
      );
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
