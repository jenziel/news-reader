import React from "react";
import "./Header.css";
import logo from "../../images/news-icon.png";
import { Link } from "react-router-dom";
function Header() {
    const linkStyle = {
        color: "inherit",
        textDecoration: "none",
       
      };
  return (
    <div className='header-container'>
      <div className='header-logo'>
        <img
          src={logo}
          alt='newspaper line drawing'
          className='header-image'
        ></img>
        <Link to='/' style={linkStyle}>
          <h1>News Reader</h1>
        </Link>
      </div>
    </div>
  );
}

export default Header;
