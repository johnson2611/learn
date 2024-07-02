import { SciData } from "./SciEngData";
import { useHistory } from "react-router-dom";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";

// CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

export default function Carousel() {
  const history = useHistory();

  const handleButtonCick = (card) => {
    if (card.title === "Physics") {
      history.push({
        pathname: "/physics",
        state: { detail: card },
      });
    } else if (card.title === "Chemistry") {
      history.push({
        pathname: "/chemistry",
        state: { detail: card },
      });
    } else if (card.title === "Biology") {
      history.push({
        pathname: "/biology",
        state: { detail: card },
      });
    } else if (card.title === "Mathematics") {
      history.push({
        pathname: "/mathematics",
        state: { detail: card },
      });
    } else if (card.title === "Robotics") {
      history.push({
        pathname: "/robotics",
        state: { detail: card },
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
      <h3 className="course-title">Science and Engineering</h3>
      <Slider {...sliderSettings}>
        {SciData.map((card, index) => (
          <div key={index} className="courset" onClick={() => handleButtonCick(card, window.scrollTo(0, 0))}>
            <img alt={card.title} src={card.img} style={{width:"300px", height:"200px"}} />
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
