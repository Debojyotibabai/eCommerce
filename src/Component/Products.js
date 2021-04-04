import React from "react";

// cosmetics data import
import cosmeticsData from "./cosmeticsData";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// component
import ProductCard from "./ProductCard";

// css
import "../Css/App.css";
import "../Css/Products.css";

const Products = () => {
  // aos init
  AOS.init({
    duration: 1000,
  });

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
            {cosmeticsData.map((eachCosmeticsData, eachCosmeticsIndex) => {
              return (
                <ProductCard
                  key={eachCosmeticsIndex}
                  img={eachCosmeticsData.img}
                  type={eachCosmeticsData.type}
                  name={eachCosmeticsData.name}
                  description={eachCosmeticsData.description}
                  price={Number(eachCosmeticsData.price)}
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
