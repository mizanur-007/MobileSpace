import Product from '../Products/Product';
import Slider from '../Slider/Slider';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const BrandProducts = () => {
    const [brandProducts, setBrandProducts] = useState([]);
    const {brandName} = useContext(AuthContext);
    useEffect(()=>{
        fetch(`https://brand-shop-server-fq984txzu-md-mizanur-rahmans-projects.vercel.app/products/brand/${brandName}`)
        .then(res => res.json())
        .then(data => setBrandProducts(data || []))
    },[])
   
    console.log(brandProducts);
    const sliderProduct = brandProducts.slice(0,3);
    console.log(sliderProduct)
    return (
        <div>
            <Swiper className="mySwiper rounded-2xl ">
                {
                    sliderProduct.map(sliderProduct => <>
                      <SwiperSlide className="px-3 lg:px-0 ">
          <div className="hero h-[450px] bg-no-repeat bg-cyan-100 rounded-2xl" style={{backgroundImage: `url(${sliderProduct.image})`,backgroundSize: 'contain', backgroundPosition: 'auto'}}>
  <div className="hero-overlay bg-opacity-30 rounded-2xl"></div>
  <div className="hero-content text-center text-neutral-content">
  </div>
</div>
          </SwiperSlide>
                    </>)
                }
                </Swiper>
            
            {
                brandProducts.length > 0 && <><h1 className='text-center font-bold logofont text-3xl mt-8 '>{brandProducts[0].brand}</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-6 mb-14 mt-3 px-3 lg:px-0'>
            {
                brandProducts.map(product =><Product product={product} key={product._id}> </Product>)
            }
            </div>
                </>
            }
            {
                brandProducts.length == 0 && <>
                <div className='mb-10 flex items-center justify-center'>
                    <img src="https://i.ibb.co/W56xS49/360-F-78205827-7o-Yoj-KCyx-Ihw0oitmk6gqo-Eo12m-Dk-Bdi.jpg" alt="" />
                </div>
                </>
            }
        </div>
    );
};

export default BrandProducts;