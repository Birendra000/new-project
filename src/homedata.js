import React from "react";
import Data from "./Data";
import Footer from "./Footer";
const Homedata = () => {
  return (
    <>
      <Footer
        key={Data[0].id}
        img={Data[0].img}
        title={Data[0].title}
        category={Data[0].category}
        brand={Data[0].brand}
        price={Data[0].price}
      />
      <Footer
        key={Data[1].id}
        img={Data[1].img}
        title={Data[1].title}
        category={Data[1].category}
        brand={Data[1].brand}
        price={Data[1].price}
      />
      <Footer
        key={Data[2].id}
        img={Data[2].img}
        title={Data[2].title}
        category={Data[2].category}
        brand={Data[2].brand}
        price={Data[2].price}
      />
    </>
  );
};

export default Homedata;
