import React, { useState } from "react";
import Banner from "./Banner";
import Slider from "react-slick";
import CarouselPlaces from "./CarouselPlaces";

const Home = () => {
  const [nearby] = useState([
    {
      id: 1,
      src:
        "https://a0.muscache.com/im/pictures/9ff017f4-1a62-4727-b83e-4087336f8c4a.jpg?im_q=medq&im_w=240",
      location: "Mussoorie",
      drivingTime: "5-hour",
    },
    {
      id: 2,
      src:
        "https://a0.muscache.com/im/pictures/7d80bee1-a510-4950-a1a0-07a4fb25ec2e.jpg?im_q=medq&im_w=240",
      location: "Manali",
      drivingTime: "4-hour",
    },
    {
      id: 3,
      src:
        "https://a0.muscache.com/im/pictures/b948e0e0-c78f-4895-b433-c90401019981.jpg?im_q=medq&im_w=240",
      location: "Dehradun",
      drivingTime: "3-hour",
    },
  ]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
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
    <div className="home">
      <Banner />
      <div className="explore-nearby">
        <h2 className="heading">Explore nearby</h2>
        <div className="places">
          <Slider {...settings}>
            {nearby &&
              nearby.map((place) => (
                <div key={place.id} className="slider-item">
                  <div className="place">
                    <div className="img-container">
                      <img src={place.src} alt="" />
                    </div>
                    <div className="content">
                      <h3 className="location">{place.location}</h3>
                      <p className="drive-hour">{place.drivingTime} drive</p>
                    </div>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
      <CarouselPlaces />
      <div className="be-host">
        <div className="detail">
          <h2>Become a host</h2>
          <p>
            Earn extra income and unlock new opportunities by sharing your space
          </p>
          <button>Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
