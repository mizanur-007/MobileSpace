import Swal from "sweetalert2";

const AddProduct = () => {

    const handleAddProduct = (e)=>{
        e.preventDefault();
        const form =  e.target;
        const name = form.name.value;
        const brand = form.brand.value;
        const image = form.image.value;
        const type = form.type.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const price = form.price.value;

        const product = {
            name,
            brand,
            image,
            type,
            description,
            rating,
            price
        }
        fetch("https://brand-shop-server-fq984txzu-md-mizanur-rahmans-projects.vercel.app/products",{
            method: "POST",
            headers : {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.acknowledged){
                Swal.fire({
                    title: 'Success!',
                    text: 'Product added',
                    icon: 'success',
                    confirmButtonText: 'Perfect'
                  });
                  form.reset();
            }
        })
    }
    return (
       <>
        <div className='w-full bg-orange-50 mb-5 pb-16 rounded-lg relative mt-6 lg:mt-0'>
            <h1 className='text-center text-2xl font-bold logofont pt-8 mb-5'>Mobile<span className='text-orange-900'>Space</span></h1>
            <h1 className='text-center text-2xl font-bold mb-6'>Add Product</h1>
            <div className='w-[90%] lg:w-[80%] mx-auto'>
                <form onSubmit={handleAddProduct} className='text-center flex justify-center flex-col gap-4'>
                    <div>
                    <input className='w-[80%] lg:w-[45%] mr-9 pl-2 py-1 mb-4 outline-double' type="text" placeholder="Name" name='name' required/>
                    
                    <input className='w-[80%] lg:w-[45%] mr-9 pl-2 py-1 mb-4 outline-double' type="text" placeholder="Brand Name" name='brand' required/>
                    <br />

                    <input className='w-[80%] lg:w-[45%] mr-9 pl-2 py-1 outline-double mb-4 lg:mb-0' type="text" placeholder="Image" name='image' required/>
                
                    <input className='w-[80%] lg:w-[45%] mr-9 pl-2 py-1 outline-double' type="text" placeholder="Type" name='type' required/>
                    </div>
                    <div>
                    <input className='w-[80%] lg:w-[45%] mr-9 pl-2 py-1 mb-4 outline-double' type="text" placeholder="Price" name='price' required/>
                    
                    <input className='w-[80%] lg:w-[45%] mr-9 pl-2 py-1 outline-double' type="text" placeholder="Short Description" name='description' required/>
                    <br />
                    <input className='w-[80%] lg:w-[45%] mr-9 pl-2 py-1 outline-double mt-4 lg:mt-0' type="number" placeholder="Rating" name='rating' required/>
                    </div>
                    <button className='btn btn-accent mt-5 w-[80%] ml-5 lg:w-auto md:ml-14 lg:ml-0' type='submit'>ADD</button>
                </form>
            </div>
            
        </div>

        <div className='absolute animate-pulse lg:animate-none top-28 lg:top-24 left-8 lg:left-36'>
            <img src="https://i.ibb.co/MkW2ZnL/rsz-blank-phone-screen-purple-background-fotor-bg-remover-20231018123154.png" alt="" />
        </div>
        <div className='absolute top-16 -right-4 lg:right-1'>
            <img src="https://i.ibb.co/m9bcMC1/rsz-laptop-with-blank-black-screen-white-table-fotor-bg-remover-20231018123617.png" alt="" />
        </div>
        <div className='absolute top-48 -left-6 hidden lg:block'>
            <img src="https://i.ibb.co/jrmjmsH/rsz-pink-headphones-wireless-digital-device-fotor-bg-remover-2023101812404.png" alt="" />
        </div>
       </>
    );
};

export default AddProduct;