import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import LatestProduct from './LatestProduct';

const LatestProducts = () => {
    const {products} = useContext(AuthContext)
    const latestProducts = products.slice(-4);
    return (
       <div className='mb-16'>
        <h1 className='text-2xl font-bold logofont text-center'>Latest Products</h1>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 lg:px-0'>
            {
                latestProducts.map(product => <LatestProduct key={product._id} product={product}></LatestProduct>)
                
                }
            
        </div>
       </div>
    );
};

export default LatestProducts;