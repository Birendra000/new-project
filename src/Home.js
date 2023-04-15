import React from "react";
import Homedata from "./homedata";

const Home = () => {
  return (
    <div className="homeheading">
      <div className="homecard">
        <div className="imaged">
          <img
            src={require("./Group1.png")}
            alt="already"
            className="goldyname"
          ></img>
        </div>
        <div className="home-head">
          <h1>JUST DO IT</h1>
        </div>
        <div className="home-par">
          <p>
            Goldstar Shoes has been your companion in happiness,
            <br /> both big and small, for over <br />
            40 years.Our roots are firmly grounded in Nepal <br />
            and with its people.
          </p>
        </div>
        <span className="latest">
          <h3>
            Latest Designs <hr />
          </h3>
        </span>
        <span className="solut">
          <Homedata />
        </span>
        <div className="mainfooter">
          <div className="footimage">
            <a href="https://www.facebook.com/" target="_blank">
              <img
                src={require("./facebook.png")}
                alt="facebookname"
                className="facebookimg"
              ></img>
            </a>
            <a href="https://www.instagram.com//" target="_blank">
              <img
                src={require("./instagram.png")}
                alt="instagram img"
                className="facebookimg"
              ></img>
            </a>
            <a href="https://twitter.com/" target="_blank">
              <img
                src={require("./twitter.png")}
                alt="twitter img"
                className="facebookimg"
              ></img>
            </a>
            <a href="https://www.github.com/" target="_blank">
              <img
                src={require("./github.png")}
                alt="github img"
                className="facebookimg"
              ></img>
            </a>
          </div>
          <span className="footer-copy">
            <p>Copyright © Nike Shoes Template</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Home;
