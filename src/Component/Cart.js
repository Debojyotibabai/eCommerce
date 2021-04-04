import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// context
import { CartContext } from "../CartContext";

// component
import CartCard from "./CartCard";

// css
import "../Css/Cart.css";

const Cart = () => {
  // aos init
  AOS.init({
    duration: 1000,
  });

  // context cart items
  const [cart, setCart] = useContext(CartContext);

  // delete cart items
  const deleteCartItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  // cart items making
  const allCartItems = cart.map((eachItem, eachItemIndex) => {
    return (
      <CartCard
        key={eachItemIndex}
        img={eachItem.img}
        name={eachItem.name}
        price={eachItem.price}
        deleteCartCard={deleteCartItem.bind(this, eachItemIndex)}
      />
    );
  });

  return (
    <>
      {/* main section */}
      <div className="main__section">
        <h1 className="cart__header">Shopping Cart</h1>

        {/* check if cart is empty or not */}
        {cart.length === 0 ? (
          // empty cart
          <div className="empty__cart">
            <p>Your cart is empty</p>
            <NavLink className="empty__cart__button" to="/products">
              SHOP
            </NavLink>
          </div>
        ) : (
          // cart section
          <div className="cart__section">
            {/* cart items */}
            <div data-aos="fade-up" className="cart__items">
              {allCartItems}
            </div>

            {/* cart subtotal */}
            <div className="cart__subtotal">
              <h1>
                All orders are processed in INR at the most recent exchange rate
                available.
              </h1>
              <h2>
                Subtotal: ₹ {cart.reduce((acc, curr) => acc + curr.price, 0)}
              </h2>
              <button
                onClick={() => {
                  alert(
                    "Sorry, we are unable to check out at this moment. Try again later."
                  );
                }}
              >
                CHECK OUT
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
