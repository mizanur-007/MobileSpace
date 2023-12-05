import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Product from './Product';
import Slider from '../Slider/Slider';

const Products = () => {
    const {products} = useContext(AuthContext);
    return (
        <div>
            <Slider></Slider>
            <h1 className='text-center font-bold logofont text-3xl mt-16 lg:mt-8 '>All Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-6 mb-14 mt-3 px-3 lg:px-0'>
            {
                products.map(product =><Product product={product} key={product._id}> </Product>)
            }
            
        </div>
        </div>
    );
};

export default Products;