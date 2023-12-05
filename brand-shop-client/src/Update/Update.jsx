import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
    const loadedData = useLoaderData();
    const {brand, description, image, name, price, rating, type, _id} = loadedData;

    const handleUpdate =(e)=>{
        e.preventDefault();
        const form =  e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const image = form.image.value;
        const type = form.type.value;
        const rating = form.rating.value;
        const price = form.price.value;

        const updatedProduct = {
            name,
            brand,
            image,
            type,
            rating,
            price
        }
        fetch(`https://brand-shop-server-fq984txzu-md-mizanur-rahmans-projects.vercel.app/products/${_id}`,{
            method: "PUT",
            headers : {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount>0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product Updated',
                    icon: 'success',
                    confirmButtonText: 'Perfect'
                  });
            }
        })
    }
    return (
        <div className="hero min-h-screen my-4 rounded-lg" style={{backgroundImage: 'url(https://i.ibb.co/wLRN9KH/workplace-with-blue-office-supplies.jpg)'}}>
  <div className="hero-overlay bg-opacity-50 rounded-lg"></div>

  <div className='w-[90%] lg:w-[80%] bg-color mb-5 pb-16 rounded-lg relative'>
            <h1 className='text-center text-2xl font-bold logofont pt-8 mb-5'>Mobile<span className='text-orange-900'>Space</span></h1>
            <h1 className='text-center text-2xl font-bold mb-6 text-orange-600'>Update Product</h1>
            <div className='w-full lg:w-[90%] mx-auto'>
                <form onSubmit={handleUpdate} className='text-center flex justify-center flex-col'>
                    <div className='flex flex-col lg:flex-row items-center justify-center gap-6'>
                    <input className='w-full lg:w-[48%] pl-2 py-1 -mb-1 lg:mb-4 outline-double rounded-r-lg' type="text" placeholder="Name" defaultValue={name} name='name' required/>
                    <input className='w-full lg:w-[48%] pl-2 py-1 mb-4 lg:mb-4 outline-double rounded-r-lg' type="text" placeholder="Brand Name" defaultValue={brand} name='brand' required/>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center justify-center gap-6'>
                    <input className='w-full lg:w-[48%] pl-2 py-1 outline-double rounded-r-lg' type="text" placeholder="Image" defaultValue={image} name='image' required/>
                    <input className='w-full lg:w-[48%] pl-2 py-1 outline-double rounded-r-lg -mt-2 lg:mt-0' type="text" placeholder="Type" defaultValue={type} name='type' required/>
                    </div>

                    <div className='flex flex-col lg:flex-row items-center justify-center gap-6'>
                    <input className='w-full lg:w-[48%] pl-2 py-1 -mb-2 lg:mb-4 outline-double mt-4 rounded-r-lg' type="text" placeholder="Price" defaultValue={price} name='price' required/>
                    <input className='w-full lg:w-[48%] pl-2 py-1 outline-double rounded-r-lg' type="text" placeholder="Rating" defaultValue={rating} name='rating' required/>
                    </div>
                    <button className='btn btn-info mt-5 font-bold text-2xl text-white' type='submit'>UPDATE</button>
                </form>
            </div>
  </div>
</div>
    );
};

export default Update;