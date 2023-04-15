import React from "react";
import Data from "./Data";
import Product from "./product";

const Solution = () => {
  const cardd = Data.map((item) => {
    return (
      <Product
        key={item.id}
        img={item.img}
        title={item.title}
        category={item.category}
        brand={item.brand}
        price={item.price}
      />
    );
  });

  return <div className="solution1">{cardd}</div>;
};

export default Solution;
