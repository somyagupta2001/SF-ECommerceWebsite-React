import React from "react";
import { Link } from "react-router-dom";
import coverImage from "../images/cover.jpg";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="cover">
        <img src={coverImage} alt="cover" className="cover-img" />
        <p className="subtitle">
          Getting all that you need
          <br />
          to your doorstep
          <br /> just a click away
        </p>
      </div>
      <div className="cat-intro">
        Check out the variety of products we have to offer:
      </div>
      <div className="category">
        <Link to="/Electronics">Electronics</Link>
        <Link to="/Fashion">Fashion</Link>
        <Link to="/Grocery">Grocery</Link>
      </div>
    </div>
  );
};

export default Homepage;
