import React from "react";

const Mainproduct = (abc) => {
  return (
    <div>
      (
      <div className="containerlasted">
        <div className="main-card">
          <img src={abc.img} className="image-card" alt="imagename" />
          <span className="img-card"></span>
          <span className="box-card">
            <p>{abc.brand}</p>
            <p>{abc.category}</p>
            <h5>{abc.price}</h5>
            <h3>{abc.title}</h3>
          </span>
        </div>
      </div>
      );
    </div>
  );
};

export default Mainproduct;
