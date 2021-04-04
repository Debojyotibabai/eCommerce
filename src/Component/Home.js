import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// axios
import axios from "axios";

// material icon
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

// component
import HomeProductCard from "./HomeProductCard";
import NewsCard from "./NewsCard";

// css
import "../Css/App.css";
import "../Css/Home.css";

const Home = () => {
  // aos init
  AOS.init({
    duration: 1000,
  });

  // home product section data
  const [homeProductData] = useState([
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
      heading: "Eyeliner",
    },
  ]);

  // news section data
  const [newsData, setNewsData] = useState([]);

  // news section data fetch
  useEffect(() => {
    axios
      .get(
        "https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=3ejR0h7hGF0in8X71O6RtW5psJgYxfjL"
      )
      .then((response) => {
        setNewsData(response.data.results.slice(0, 3));
      });
  }, []);

  // news letter input value
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      {/* main section */}
      <div className="main__section">
        {/* home banner section */}
        <div className="home__banner">
          {/* left banner */}
          <div className="left__banner">
            <p>A Cosmetic Heaven</p>
            <img
              src="https://images.unsplash.com/photo-1576426863848-c21f53c60b19?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTl8fGNvc21ldGljfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>

          {/* right banner */}
          <div className="right__banner" data-aos="fade-right">
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
            <NavLink className="banner__button" to="/products">
              SHOP NOW
            </NavLink>
          </div>
        </div>

        {/* home product section */}
        <div className="home__product">
          <h1>Our Main Products</h1>
          <p>
            You can buy this type of products from our website. Feel free to
            explore.
          </p>
          <div>
            {homeProductData.map((eachProduct, eachProductIndex) => {
              return (
                <HomeProductCard
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

        {/* news section */}
        <div className="news">
          <h1>The Press</h1>
          <p>Top fashion news from all over the world.</p>
          <div>
            {newsData.map((eachNews, eachNewsIndex) => {
              return (
                <NewsCard
                  key={eachNewsIndex}
                  link={eachNews.url}
                  img={eachNews.multimedia[0].url}
                  type={eachNews.section}
                  heading={eachNews.title}
                />
              );
            })}
          </div>
        </div>

        {/* news letter section */}
        <div className="news__letter">
          {/* left news letter*/}
          <div className="left__news__letter">
            <a href="https://www.linkedin.com/in/debojyoti-ghosh-7003671a4/">
              LinkedIn
            </a>
            <a href="https://www.facebook.com/profile.php?id=100008004977942">
              Facebook
            </a>
            <a href="https://www.instagram.com/debojyoti.ghosh98/">Instagram</a>
          </div>

          {/* right news letter*/}
          <div className="right__news__letter">
            <h1>
              Subscribe to our news letter for latest news, deals and more.
            </h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                inputValue !== ""
                  ? alert("Subscribed successfully")
                  : alert("Please enter your email address");
                setInputValue("");
              }}
            >
              <input
                type="email"
                value={inputValue}
                onChange={(e) => {
                  setInputValue(e.target.value);
                }}
              />
              <button data-aos="fade-right" type="submit">
                <ArrowRightAltIcon fontSize="large" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* footer */}
      <p className="footer">CopyRight © 2021 eBeauty.</p>
    </>
  );
};

export default Home;
