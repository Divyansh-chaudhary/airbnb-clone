import React from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="center">
        <div className="social-icons">
          <IoLogoTwitter className="icon" />
          <IoLogoFacebook className="icon" />
          <IoLogoInstagram className="icon" />
        </div>
        <ul>
          <li>
            <Link to="/stays">Privacy</Link>
          </li>
          <li>
            <Link to="/stays">Details</Link>
          </li>
          <li>
            <Link to="/stays">Host</Link>
          </li>
          <li>
            <Link to="/stays">Conditions</Link>
          </li>
        </ul>
        <p>Created By Divyansh Chaudhary</p>
      </div>
    </footer>
  );
};

export default Footer;
