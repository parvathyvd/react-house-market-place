import React from "react";
import { Link } from "react-router-dom";
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";
import Slider from "./Slider";

const Explore = () => {
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Explore</p>
      </header>
      <Slider />
      <main>
        <p className="exploreCategoryHeading">Categories</p>
        <div className="expolreCategories">
          <Link to="/category/rent">
            <img
              src={rentCategoryImage}
              alt="rent"
              className="exploreCategoryImg"
            />
            <p className="expolreCategoryName">Places for Rent</p>
          </Link>
          <Link to="/category/rent">
            <img
              src={sellCategoryImage}
              alt="rent"
              className="exploreCategoryImg"
            />
            <p className="expolreCategoryName">Places for Sale</p>
          </Link>
        </div>
      </main>
      <h1>Explore</h1>
    </div>
  );
};

export default Explore;
