import React from "react";
import "./About.css";
const About = () => {
  return (
    <div>
      <div className="cardmain">
        <div className="aboutcard">
          <span className="mainimage">
            <h1 className="aboutheading">OUR MISSION</h1>
            <h3 className="about-paragraph">
              Our mission is to create <br /> quality footwear at competitive
              prices with <br /> innovative technology.
            </h3>
          </span>{" "}
        </div>
      </div>
      <span className="aboutus">
        <h1 className="about-heading">Who We Are?</h1>
        <h5>
          The multiple small footwear industries launched in the mid-1970s were
          the first and core business of Universal Group. Operating under the
          name of Modern Slipper Industries Pvt. Ltd & Kiran Shoes
          Manufacturers, the group has established itself as the biggest
          footwear-producing group in Nepal. Launched in 1990, Goldstar Shoes is
          underpinned by three key features; Comfortable, Durable, and
          Affordable. Goldstar Shoes are crafted with genuine materials using
          innovative technology, for this reason, we are able to be part of each
          household in Nepal and India, as well as gaining popularity in Western
          countries. Next off the production line is Hawaii Slippers called
          HATHI, introduced in the early eighties and now widely available
          throughout the country. Various ranges of EVA sandals and Hawaii
          slippers are made under this brand. This pioneering brand is admired
          for over four decades for being one of the superior quality slippers
          in terms of style, durability, and price. “Hathi Balio Ki Hathi Chap
          Chappal” - is a very famous slogan among the users of this brand. We
          have always prioritized the R&D of new cutting-edge products,
          technology, and customer service to expand the business into a new
          market. We have formed strong relationships around India and
          throughout the country with our distributors and their customers who
          we greatly appreciate and thank them all for their support and
          loyalty. We have also been fortunate to have received national
          recognition as a progressive and extremely well-managed business
          through the best exporter award and best taxpayer in the export
          category. Our success at these awards is an endorsement of the high
          caliber and quality of footwear industries management and staff and
          their dedication to cutting-edge technologies in R&D which enhance the
          overall well-being, safety, and comfort of the company’s clients.
          Currently, more than 3000 people are employed directly in five
          different operating units in Kathmandu, producing more than 75000
          pairs every day.
        </h5>
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
  );
};

export default About;
