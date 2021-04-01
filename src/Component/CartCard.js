import React from "react";

// css
import "../Css/CartCard.css";

const CartCard = (props) => {
  return (
    <div className="cart__card">
      <img src={props.img} alt="" />
      <div>
        <h1>{props.name}</h1>
        <h2>{props.price}</h2>
        <button onClick={props.deleteCartCard}>REMOVE</button>
      </div>
    </div>
  );
};

export default CartCard;
