import React from "react";
import logo from "../../assets/logo.jpg";
import "./index.css";
export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__row">
          <div className="header__logo">
            <img src={logo} alt="Fashion Killa" />
            <span>Fashion</span>
          </div>
          <div className="header__nav">
            <ul>
              <li><a href="">CATALOGUE</a></li>
              <li><a href="">FASHION</a></li>
              <li><a href="">FAVOURITE</a></li>
              <li><a href="">LIFESTYLE</a></li>
              <li><a href="">SIGN UP</a></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};
