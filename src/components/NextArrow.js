import React from "react";
import { IoChevronForwardOutline } from "react-icons/io5";

const NextArrow = ({ onClick }) => (
  <div onClick={onClick} className="arrow-container right-arrow">
    <IoChevronForwardOutline />
  </div>
);

export default NextArrow;
