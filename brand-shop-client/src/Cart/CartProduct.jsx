import React from 'react';
import PropTypes from 'prop-types';
import { Rating } from '@mui/material';

const CartProduct = ({product,handleDelete}) => {
    const {name,brand, image, price, type, rating,_id} = product;
    const ratingInt = parseInt(rating);

    return (
        <div className='flex flex-col lg:flex-row h-auto lg:h-60 bg-light-blue-50 rounded-xl gap-8'>
            <div>
                <img className='h-2/3 lg:h-full w-full lg:w-60 rounded-l-xl' src={image} alt="" />
            </div>
            <div className='-mt-48 pl-3 pb-4 lg:mt-0 lg:pl-0 lg:pb-0'>
                <h1 className='text-2xl font-bold logofont pt-3'>{name}</h1>
                <h2 className='text-xl my-1'>{type}</h2>
                <h1 className='text-xl font-bold text-red-600'>Brand: {brand}</h1>
                <h1 className='text-2xl font-bold my-1 text-red-800'>Price: ${price}</h1>
                <Rating className='my-1' name="size-medium" defaultValue={ratingInt} />
                <br /> 
                <button onClick={()=>handleDelete(_id)} className='btn btn-outline btn-error text-xl font-bold'>Remove</button>
            </div>
            
        </div>
    );
};

CartProduct.propTypes = {
    
};

export default CartProduct;