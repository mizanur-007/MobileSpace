import React from 'react';
import PropTypes from 'prop-types';
import { Rating } from '@mui/material';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {name,brand, image, price, description, rating, type, _id} = product;
    const ratingInt = parseInt(rating);
    return (
        <div className="card  card-compact bg-cyan-100 shadow-2xl">
  <figure><img className='h-72 w-full' src= {image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{type}</p>
    <h2>Brand: {brand}</h2>
    <p>Price: ${price}</p>
    <Rating name="size-medium" defaultValue={ratingInt} />
    <div className="card-actions justify-between">
      <Link to={`/details/${_id}`}><button className="btn btn-accent">Details</button></Link>
      <Link to={`/update/${_id}`}><button className="btn btn-secondary">Update</button></Link>
    </div>
  </div>
</div>
    );
};

Product.propTypes = {
    
};

export default Product;