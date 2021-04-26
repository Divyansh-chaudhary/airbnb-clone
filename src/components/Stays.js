import React, { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { IconButton } from "@material-ui/core";
import Pagination from "./Pagination";

const Stays = () => {
  const [stays] = useState([
    {
      id: 1,
      src:
        "https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=240",
      location: "Farm stay in Shimla",
      name: "Aman camps",
      assets: "8 Guests 4 bedrooms 8 beds 2 bathroom",
      rate: "$200",
    },
    {
      id: 2,
      src:
        "https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=240",
      location: "Farm stay in Dhura",
      name: "Metta Dhura",
      assets: "4 Guests studio 1 beds 1 bathroom",
      rate: "$3,000",
    },
    {
      id: 3,
      src:
        "https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg?im_w=240",
      location: "Dome house in Jari",
      name: "A Cozy Dome and Attic in Parvati Valley Itsy batsy",
      assets: "4 Guests 1 bedrooms 2 beds 1 bathroom",
      rate: "$3,071",
    },
    {
      id: 4,
      src:
        "https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=240",
      location: "Farm stay in New Delhi",
      name: "The Barm Farm Cottage",
      assets: "2 Guests 1 bedrooms 1 beds 1.5 bathroom",
      rate: "$5,371",
    },
  ]);
  return (
    <main className="stays-page">
      <div className="filter-container">
        <p className="total-stays">300+ Stays</p>
        <h2 className="heading">Unique Stays</h2>
        <ul>
          <button className="filter-btn">Cancellation Flexibility</button>
          <button className="filter-btn">Entire Place</button>
          <button className="filter-btn">Price</button>
          <button className="filter-btn">Rooms and Beds</button>
        </ul>
      </div>
      <div className="all-stays">
        {stays &&
          stays.map((stay) => (
            <div key={stay.id} className="single-stay">
              <div
                className="img-container"
                style={{
                  background: `url("${stay.src}")
            center center`,

                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="details">
                <div className="top">
                  <div className="top-left">
                    <p className="location">{stay.location}</p>
                    <h3 className="camp-name">{stay.name}</h3>
                    <p className="assets">{stay.assets}</p>
                  </div>
                  <div className="top-right">
                    <IconButton>
                      <IoHeartOutline size={30} />
                    </IconButton>
                  </div>
                </div>
                <div className="bottom">
                  <p className="price">
                    <b>{stay.rate} </b>/ night
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Pagination />
    </main>
  );
};

export default Stays;
