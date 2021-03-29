import React, { useState } from "react";

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

  // company details
  const [company] = useState([
    "l'oreal",
    "maybelline",
    "covergirl",
    "dior",
    "pacifica",
  ]);

  // product details
  const [product] = useState(["lipstick", "nail polish", "blush", "eyeliner"]);

  // select option values
  const [optionValue, setOptionValue] = useState({
    company: "",
    product: "",
  });

  // get option value function
  const getOptionValue = (e) => {
    setOptionValue(() => {
      return {
        ...optionValue,
        [e.target.name]: e.target.value,
      };
    });
  };

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

        {/* product selection section */}
        <div className="product__selection">
          <h1>Choose your product type</h1>
          <div className="product__selection__type">
            {/* company selection */}
            <div data-aos="fade-up">
              <p>Company</p>
              <select onChange={getOptionValue} name="company">
                {/* company otion making */}
                {company.map((eachComapny, eachCompanyIndex) => {
                  return (
                    <option key={eachCompanyIndex} value={eachCompanyIndex}>
                      {eachComapny}
                    </option>
                  );
                })}
              </select>
            </div>

            {/* product selection */}
            <div data-aos="fade-up">
              <p>Product</p>
              <select onChange={getOptionValue} name="product">
                {/* product option making */}
                {product.map((eachProduct, eachProductIndex) => {
                  return (
                    <option key={eachProductIndex} value={eachProductIndex}>
                      {eachProduct}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
