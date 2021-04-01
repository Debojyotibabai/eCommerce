import React, { useContext } from "react";

// component
import CartCard from "./CartCard";

// css
import "../Css/Cart.css";

// context
import { CartContext } from "../CartContext";

const Cart = () => {
  // context cart items
  const [cart, setCart] = useContext(CartContext);

  // delete cart item
  const deleteCartItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  return (
    <div>
      {cart.map((eachItem, eachItemIndex) => {
        return (
          <CartCard
            key={eachItemIndex}
            img={eachItem.img}
            name={eachItem.name}
            price={eachItem.price}
            deleteCartCard={deleteCartItem.bind(this, eachItemIndex)}
          />
        );
      })}
    </div>
  );
};

export default Cart;
