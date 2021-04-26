import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";

const PrevArrow = ({ onClick }) => (
  <div onClick={onClick} className="arrow-container left-arrow">
    <IoChevronBackOutline />
  </div>
);

export default PrevArrow;
