import React from "react";
import "./index.css";
import { FaArrowRight } from "react-icons/fa";

export const Card = ({ img, title }) => {
  return (
    <div className="card">
      <img src={img} alt="" className="card__img" />
      <div className="card__body">
        <div className="card__text">
          <div className="card__title">{title}</div>
          <div className="card__muted">EXPLORE NOW!</div>
        </div>
        <div className="card__icon">
          <FaArrowRight style={{ width: "32px", marginRight: '15px', cursor: "pointer" }} className="card__icon" />
        </div>
      </div>
    </div>
  );
};