import React, { useState } from 'react';
import Banner from '../Banner/Banner';
import { useLoaderData } from 'react-router-dom';
import Brand from '../Brand/Brand';
import Deal from '../Deal/Deal';
import LatestProducts from '../Latest/LatestProducts';


const Home = () => {
    const brands = useLoaderData();
    return (
        <div>
            <Banner></Banner>

            <h1 className='text-center logofont text-3xl font-bold mb-5 mt-16'>Which Brand Define You?</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 px-2 lg:px-0'>
                {
                    brands.map(brand => <Brand brand={brand} key={brand.id}></Brand>)
                }
            </div>

            <Deal></Deal>
            <LatestProducts></LatestProducts>
        </div>
    );
};

export default Home;