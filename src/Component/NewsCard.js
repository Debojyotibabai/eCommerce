import React from "react";

// aos
import AOS from "aos";
import "aos/dist/aos.css";

// css
import "../Css/NewsCard.css";

const NewsCard = (props) => {
  // aos init
  AOS.init({
    duration: 1000,
    disable: "mobile",
  });

  return (
    <a href={props.link} className="news__card" data-aos="zoom-out">
      <img src={props.img} alt="" />
      <p>{props.type}</p>
      <h1>{props.heading}</h1>
    </a>
  );
};

export default NewsCard;
