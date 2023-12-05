import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

const LatestProduct = ({ product }) => {
  const { brand, image, name, price, rating, type, _id } = product;
  return (
    <div  className="hero my-4 rounded-lg" style={{backgroundImage: `url(${image})`}}>
      <div className="hero-overlay bg-opacity-40 hover:bg-opacity-70 rounded-lg">
        <div className="pt-[240px] px-4 text-red-200 text-center pb-4">
          <h1 className="font-bold text-xl mb-1">{name}</h1>
          <Link to={`/details/${_id}`}>
            <button className="font-bold text-2xl z-0">
              <HiArrowRight className="pt-1 animate-bounce"/>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

LatestProduct.propTypes = {};

export default LatestProduct;
