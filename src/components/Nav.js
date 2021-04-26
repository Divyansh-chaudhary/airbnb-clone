import React from "react";
import { IoGlobeOutline, IoSearchOutline } from "react-icons/io5";
import Avatar from "react-avatar";
import Logo from "../img/airbnb.png";
import { Link } from "react-router-dom";

const Nav = ({ navPos }) => {
  return (
    <nav className="navbar" style={{ position: navPos }}>
      <Link to="/" className="logo">
        <img src={Logo} alt="" />
      </Link>
      <div className="center">
        <div className="search-container">
          <input type="text" placeholder="Start your search" />
          <div className="search-icon">
            <IoSearchOutline size="20" />
          </div>
        </div>
      </div>
      <div className="auth-items">
        <button className="be-host">
          <Link to="/stays">Become a host</Link>
        </button>
        <div className="globe-icon">
          <Link to="stays">
            <IoGlobeOutline size="25" />
          </Link>
        </div>
        <Avatar
          className="avatar-icon"
          src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"
          round
          size="35"
        />
      </div>
    </nav>
  );
};

export default Nav;
