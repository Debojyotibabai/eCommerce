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
              The beauty of a woman is not in a facial mode but the true beauty
              in a woman is reflected in her soul. It is the caring that she
              lovingly gives the passion that she shows. The beauty of a woman
              grows with the passing years.
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
          The more often we see the things around us - even the beautiful and
          wonderful things - the more they become invisible to us. That is why
          we often take for granted the beauty of this world: the flowers, the
          trees, the birds, the clouds - even those we love. Because we see
          things so often, we see them less and less.
        </p>
      </div>
    </>
  );
};

export default Home;
