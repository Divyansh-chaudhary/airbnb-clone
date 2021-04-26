import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

const CarouselPlaces = () => {
  const settings = {
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="live-anywhere">
      <h2 className="heading">Live Anywhere</h2>
      <div className="places">
        <Slider {...settings}>
          <Link to="/stays" className="slider-item">
            <div className="place">
              <div className="img-container">
                <img
                  src="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=240"
                  alt=""
                />
              </div>
              <h3 className="name">Outdoor Gateways</h3>
            </div>
          </Link>
          <Link to="/stays" className="slider-item">
            <div className="place">
              <div className="img-container">
                <img
                  src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=240"
                  alt=""
                />
              </div>
              <h3 className="name">Outdoor Gateways</h3>
            </div>
          </Link>
          <Link to="/stays" className="slider-item">
            <div className="place">
              <div className="img-container">
                <img
                  src="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=240"
                  alt=""
                />
              </div>
              <h3 className="name">Outdoor Gateways</h3>
            </div>
          </Link>
          <Link to="/stays" className="slider-item">
            <div className="place">
              <div className="img-container">
                <img
                  src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=240"
                  alt=""
                />
              </div>
              <h3 className="name">Outdoor Gateways</h3>
            </div>
          </Link>
        </Slider>
      </div>
    </div>
  );
};

export default CarouselPlaces;
