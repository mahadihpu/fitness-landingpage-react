import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../../images/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="#main" smooth={true} duration="1000" className="logo">
        <img src={logo} alt="" />
      </Link>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="main" smooth={true} duration="1000">
            Header
          </Link>
        </li>
        <li>
          <Link to="features" smooth={true} duration="1000">
            Features
          </Link>
        </li>
        <li>
          <Link to="presentaion" smooth={true} duration="1000">
            Offers
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration="1000">
            About
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration="1000">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
