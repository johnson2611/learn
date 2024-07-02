import React from "react";
import { useHistory } from "react-router-dom";
import { progDev } from "./DevData";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";


// css
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {

  const history = useHistory();

  const handleButtonCick = (card) => {
    if (card.title === "Web Development") {
      history.push({
        pathname: "/web",
        state: { detail: card },
      });
    } else if (card.title === "Python Programming") {
      history.push({
        pathname: "/python",
        state: {detail: card},
      });
    } else if (card.title === "Java Programming") {
      history.push({
        pathname: "/java",
        state: {detail: card},
      });
    } else if (card.title === "Data Science and Machine Learning") {
      history.push({
        pathname: "/science",
        state: {detail: card},
      });
    } else if (card.title === "Mobile App Development") {
      history.push({
        pathname: "/mobile",
        state: {detail: card},
      });
    } else if (card.title === "Blockchain Development") {
      history.push({
        pathname: "/blockChain",
        state: {detail: card},
      });
    } else if (card.title === "DevOps and Cloud Computing") {
      history.push({
        pathname: "/devOps",
        state: {detail: card},
      });
    }
  };

  const sliderSettings = {
    // fade:true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="content">
      <h3 className="course-title">Programming and Development</h3>
      <Slider {...sliderSettings}>
        {progDev.map((card, index) => (
          <div key={index} className="courset"   onClick={() => handleButtonCick(card,window.scrollTo(0, 0))}>
            <img
              alt={card.title}
              src={card.img}
              style={{ width: "300px", height: "200px" }}
            />
            <p className="coursetTitle">{card.title}</p>
            <h2 className="coursetDes">{card.description}</h2>
            <h5 className="coursetPrice">{card.price}</h5>
            <h5 className="courseRating">
              {card.rating}
              <span style={{ color: " #fff000", paddingLeft: "0.4rem" }}>
                <FaStar size={20} />
              </span>
              <span style={{ color: " #fff000", paddingLeft: "0.4rem" }}>
                <FaStar size={20} />
              </span>
              <span style={{ color: " #fff000", paddingLeft: "0.4rem" }}>
                <FaStar size={20} />
              </span>
              <span style={{ color: " #fff000", paddingLeft: "0.4rem" }}>
                <FaStar size={20} />
              </span>
              <span style={{ color: " #fff000", paddingLeft: "0.4rem" }}>
                <FaStar size={20} />
              </span>
            </h5>
          </div>
        ))}
      </Slider>
    </div>
  );
}
