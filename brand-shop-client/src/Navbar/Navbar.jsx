import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
    const [visible, setVisible] = useState(false);
  const {user, signout} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = ()=>{
    signout()
    .then(()=>{
        Swal.fire({
            title: 'Success!',
            text: 'Logout Successful',
            icon: 'success',
            confirmButtonText: 'Cool'
          });
      navigate('/');
    })
    .catch((err)=>{
        Swal.fire({
            title: 'Error!',
            text: err.message,
            icon: 'error',
            confirmButtonText: 'Try Again'
          });
    })
  }
    return (
        <>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown z-20">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li  className="text-xl font-bold"><NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
              }
            >
              Home
            </NavLink></li>
        <li className="text-xl font-bold"><NavLink
              to="/products"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
              }
            >
              Products
            </NavLink></li>
        <li className="text-xl font-bold"><NavLink
              to="/addproduct"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
              }
            >
              Add Product
            </NavLink></li>
        <li className="text-xl font-bold"><NavLink
              to="/cart"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
              }
            >
              My Cart
            </NavLink></li>
      </ul>
    </div>
<div className="flex items-center gap-2">
<img src="https://i.ibb.co/v3X21p6/logo.png" className="" alt="" />
<h1 className="text-2xl font-bold logofont">Mobile<span className="text-red-800">Space</span></h1>
</div>
  </div>
  <div className="navbar-center hidden lg:flex z-20">
    <ul className="menu menu-horizontal px-1">
    <li className="text-xl font-bold"><NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
              }
            >
              Home
            </NavLink></li>
        <li className="text-xl font-bold"><NavLink
              to="/products"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
              }
            >
              Products
            </NavLink></li>
            <li className="text-xl font-bold"><NavLink
              to="/addproduct"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
              }
            >
              Add Product
            </NavLink></li>
        <li className="text-xl font-bold"><NavLink
              to="/cart"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] font-bold underline" : ""
              }
            >
              My Cart
            </NavLink></li>
    </ul>
  </div>
  <div className="navbar-end space-x-2">
    {
      user && <>
      <div onClick={()=>setVisible(!visible)} className="relative cursor-pointer">
      <img className="w-12 h-12 rounded-full" src={user.photoURL || 'https://i.ibb.co/dcfzhjK/Windows-10-Default-Profile-Picture-svg.png'} alt="" />
        </div>
        {
        visible && <>
        <div className="absolute top-[74px] right-6 bg-blue-100 rounded-lg p-2 z-30">
        <h1 className="text-xl font-semibold text-blue-800 mb-2">{user.displayName}</h1>
        <button  className="btn btn-secondary text-white" onClick={handleLogOut}>Log Out</button>
        </div>
        </>
        }
        </>
    }
  {
    user? "" : <>
    <Link to='/login'><button className="btn btn-neutral">Login</button></Link></>
  }
  </div>
</div>
        </>
    );
};

export default Navbar;