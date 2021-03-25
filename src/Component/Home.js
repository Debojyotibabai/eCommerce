import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// component
import ProductCard from "./ProductCard";

// css
import "../Css/App.css";
import "../Css/Home.css";

const Home = () => {
  // aos init
  AOS.init({
    duration: 1000,
  });

  // product section data
  const [productData] = useState([
    {
      img:
        "https://rubysorganics.in/wp-content/uploads/2020/04/Rani-Lipstick-Website-Primary-Image-600x600.jpg",
      heading: "Lipstick",
    },
    {
      img:
        "https://media.glamour.com/photos/5e499ef0ddc6df0008d748e2/master/w_1600%2Cc_limit/cote-nail-polish.jpg",
      heading: "Nail Polish",
    },
    {
      img:
        "https://cdn.shopify.com/s/files/1/0014/3514/0183/products/Coral_Blush_400x.jpg?v=1603201305",
      heading: "Blush",
    },
    {
      img:
        "https://images-na.ssl-images-amazon.com/images/I/71fG8Ny92FL._SL1500_.jpg",
      heading: "Eye Liner",
    },
  ]);

  return (
    <>
      {/* main section */}
      <div className="main__section">
        {/* banner section */}
        <div className="banner">
          {/* left side */}
          <div className="left__banner" data-aos="fade-right">
            <p>A Cosmetic Heaven</p>
            <img
              src="https://images.unsplash.com/photo-1576426863848-c21f53c60b19?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvc21ldGljfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>

          {/* right side */}
          <div className="right__banner" data-aos="fade-left">
            <img
              src="https://images.unsplash.com/photo-1560129986-baba295cf72c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y29zbWV0aWN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              vel rerum laboriosam aliquid ullam inventore totam recusandae
              tempore, nostrum fugiat perspiciatis dolores? Velit dolores
              doloribus dolorem, accusamus assumenda ipsa ipsum.
            </p>
            <NavLink className="banner__button" to="/cosmetics">
              SHOP NOW
            </NavLink>
          </div>
        </div>

        {/* product section */}
        <div className="product">
          <h1>Our Products</h1>
          <p>
            You can buy this type of products from our website. Feel free to
            explore.
          </p>
          <div>
            {productData.map((eachProduct, eachProductIndex) => {
              return (
                <ProductCard
                  key={eachProductIndex}
                  img={eachProduct.img}
                  heading={eachProduct.heading}
                />
              );
            })}
          </div>
        </div>

        {/* thoughts section */}
        <p className="thoughts" data-aos="fade-up">
          <span>"</span>
          Beauty is in the skin! Take care of it, oil it, clean it, scrub it,
          perfume it, and put on your best clothes, even if there is no special
          occasion, and you'll feel like a queen. If society is hard on you,
          fight back by pampering your skin. Skin is political. Otherwise why
          would the imams order us to hide it?
        </p>
      </div>
    </>
  );
};

export default Home;
