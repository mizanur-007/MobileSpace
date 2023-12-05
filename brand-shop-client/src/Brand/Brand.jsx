import PropTypes from "prop-types";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Brand = ({ brand }) => {
  const { brand_name, image_url } = brand;
  const {handleBrand} = useContext(AuthContext);
  return (
    <Link to={`/brandproducts`} onClick={()=>handleBrand(brand_name)}>
      <div
        className=" transition-transform transform hover:scale-105 rounded-xl hover:animate-pulse"
        style={{ backgroundImage: `url(${image_url})` }}
      >
        <div className="hero-overlay bg-opacity-40 hover:bg-opacity-70 rounded-xl">
          <div className="pt-[240px] px-4 text-white text-center pb-4">
            <h1 className="font-bold text-2xl mb-1 text-lime-300">
              {brand_name}
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
};

Brand.propTypes = {};

export default Brand;
