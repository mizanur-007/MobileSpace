import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@mui/material';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';

const ProductDetails = () => {
    const loadedData = useLoaderData();
    const {brand, description, image, name, price, rating, type, _id} = loadedData;
    const {user} = useContext(AuthContext); 
            const client = user.email;
        console.log(client)
    const handleCart =()=>{
        const cartData = {brand, description, image, name, price, rating, type, client}
        fetch("https://brand-shop-server-fq984txzu-md-mizanur-rahmans-projects.vercel.app/cart",{
            method: "POST",
            headers : {
                'content-type': 'application/json'
            },
            body: JSON.stringify(cartData)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                Swal.fire({
                    title: 'Success!',
                    text: 'Added to Cart Successful',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
        }
         } );

            }
    const ratingInt = parseInt(rating);
    return (
        <div className='my-8 lg:my-16 px-3 lg:px-0'>
            <div className='flex flex-col lg:flex-row bg-teal-50 rounded-xl gap-6'>
                <div className='w-full lg:w-1/3'>
                    <img className='rounded-l-xl h-[350px] w-full lg:w-auto lg:h-[550px]' src={image} alt="" />
                </div>
                <div className='w-full lg:w-2/3 pb-6 lg:pb-10 px-3 lg:px-0'>
                    <h1 className='pt-6 text-2xl font-bold logofont'>{name}</h1>
                    <h1 className='text-xl my-1'>{type}</h1>
                    <h1 className='text-xl font-bold text-red-400'>Brand: {brand}</h1>
                    <Rating className='my-1' name="size-medium" defaultValue={ratingInt} />
                    <h1 className='text-2xl font-bold'>Price: ${price}</h1>
                    <h1 className='text-xl mt-3 mb-1 font-bold'>Details</h1>
                    <p className='text-lg font-medium'>{description}</p>
                    <button onClick={handleCart} className='btn btn-error mt-8'>ADD TO CART</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;