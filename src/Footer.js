import React from "react";

const Footer = (props) => {
  return (
    <div className="containerlasted">
      <div className="main-card">
        <span className="img-card">
          <img src={props.img} className="image-card" alt="imagename"></img>
        </span>
        <span className="box-card">
          <h3>{props.title}</h3>
          <p>{props.category}</p>
          <p>{props.brand}</p>
          <h5>{props.price}</h5>
        </span>
      </div>
    </div>
  );
};

export default Footer;
