import React from "react";
import testifyData from "./testimonialData";
import Slider from "react-slick";


// CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import './Carousel.css' ;
import "./Home.css";

export default function Carousel() {
  const sliderSettings = {
    // fade:true,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
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
    <div>
       <h3 className="testimonial-head">Testimonials</h3>
      <Slider {...sliderSettings} className="testimonial">
        {testifyData.map((card, index) => (
          <div className="testimonial-col">
            <img src={card.img} alt="mot" style={{width:"40px", height:"40px"}} className="testimonial-img"/>
            <h3 className="testimonial-title">{card.title}</h3>
            <p className="testimonial-des">{card.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}
