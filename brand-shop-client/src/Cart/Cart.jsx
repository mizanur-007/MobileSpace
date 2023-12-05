import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import CartProduct from './CartProduct';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Cart = () => {
    const loadedCart = useLoaderData();
    const [cartData, setCartData] = useState(loadedCart || []);
    const {user} = useContext(AuthContext); 
            const client = user.email;

            useEffect(()=>{
                fetch(`https://brand-shop-server-fq984txzu-md-mizanur-rahmans-projects.vercel.app/cart/client/${client}`)
                .then(res => res.json())
                .then(data => setCartData(data || []))
            },[])
            console.log(cartData);

    const handleDelete = (_id)=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              fetch(`https://brand-shop-server-fq984txzu-md-mizanur-rahmans-projects.vercel.app/cart/${_id}`,{
                      method : 'DELETE'
                  })
                  .then(res=> res.json())
                  .then(data =>{
                      const remaining = cartData.filter(product => product._id !=_id);
                      setCartData([...remaining]);
                      if(data.deletedCount > 0){
                          Swal.fire({
                              title: 'Success!',
                              text: 'Product Removed',
                              icon: 'success',
                              confirmButtonText: 'Perfect'
                            });
                      }
                  })
            }
          })
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 my-11 px-3 lg:px-0'>
            {
                cartData.map(product => <CartProduct key={product._id} product={product} handleDelete={handleDelete}></CartProduct>)
            }
        </div>
    );
};

export default Cart;