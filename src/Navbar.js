import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="heading">
        <img src={require("./img3.png")} alt="name" className="img1"></img>
        <span className="header">
          <Link to="/" className="linked">
            Home
          </Link>
          <Link to="/about" className="linked">
            About
          </Link>
          <Link to="/product" className="linked">
            Product
          </Link>
        </span>
      </div>
    </>
  );
};

export default Navbar;
