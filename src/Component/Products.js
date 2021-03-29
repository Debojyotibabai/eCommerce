import React from "react";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// css
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
        {/* products banner */}
        <div className="products__banner">
          <h1>Welcome To Our Cosmetics Section</h1>
          <p data-aos="fade-right">
            The most beautiful makeup of a woman is passion. But cosmetics are
            easier to buy.
            <br />
            Explore our latest collections.
          </p>
        </div>
      </div>
    </>
  );
};

export default Products;
