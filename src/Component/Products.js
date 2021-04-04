import React, { useEffect, useState } from "react";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// axios
import axios from "axios";

// component
import ProductCard from "./ProductCard";

// css
import "../Css/App.css";
import "../Css/Products.css";

const Products = () => {
  // aos init
  AOS.init({
    duration: 1000,
    disable: "mobile",
  });

  // cosmetics data
  const [cosmeticsData, setCosmeticsData] = useState([]);

  // fetch and set cosmetics data
  useEffect(() => {
    axios
      .get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=l'oreal")
      .then((response) => {
        setCosmeticsData(response.data);
      });
  }, []);

  return (
    <>
      {/* main section */}
      <div className="main__section">
        {/* product banner */}
        <div className="product__banner">
          <h1>Welcome To Our Cosmetics Section</h1>
          <p data-aos="fade-right">
            The most beautiful makeup of a woman is passion. But cosmetics are
            easier to buy. Explore our latest collections.
          </p>
        </div>

        {/* product section */}
        <div className="product__section">
          <h1>Our Product Collection</h1>

          {/* product card section */}
          <div className="product__card__section">
            {cosmeticsData.map((eachCosmeticsData) => {
              return (
                <ProductCard
                  key={eachCosmeticsData.id}
                  img={eachCosmeticsData.image_link}
                  type={eachCosmeticsData.product_type}
                  name={eachCosmeticsData.name}
                  description={eachCosmeticsData.description}
                  price={Math.round(Number(eachCosmeticsData.price) * 75)}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* footer */}
      <p className="footer">CopyRight © 2021 eBeauty.</p>
    </>
  );
};

export default Products;
