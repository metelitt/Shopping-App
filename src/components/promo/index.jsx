import React from "react";
import "./index.css";
import promoImg from "../../assets/promoImg.webp";
export const Promo = () => {
  return (
    <section className="Promo">
      <div className="container">
        <div className="promo__content">
          <div className="promo__text">
            <div className="promo__title">
              <span className="highlight">
                <span>LET'S</span>
              </span>
              EXPLORE
              <span className="highlight highlight-yellow">
                <span>UNIQUE</span>
              </span>
              CLOTHES.
            </div>
            <div className="promo__desc"> Innovation fashion</div>
            <div className="promo__btn-wrapper">
              <a href="#">Shop now</a>
            </div>
          </div>
          <div className="promo__img">
            <img src={promoImg} alt="Promo" />
          </div>
        </div>
      </div>
    </section>
  );
};
