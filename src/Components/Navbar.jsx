import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { Authcontext } from '../Context/Authcontext';

const Navbar = () => {
    const {user,signOutFunc}=useContext(Authcontext)
    console.log(user)
   
    return (
       
<div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start mx-5 ">
   
  <p className='font-bold text-3xl'>Smart<span className='text-purple-600'>deals </span></p>
  </div>
  <div className="navbar-center gap-4 lg:flex">
   <NavLink to="/" className="  text-gray-700 hover:text-purple-600">Home</NavLink>
   <NavLink to="/allproducts" className="  text-gray-700 hover:text-purple-600">All Products</NavLink>
   <NavLink to="/myproducts" className="  text-gray-700 hover:text-purple-600">My Products</NavLink>
   <NavLink to="/mybids"   className="hidden lg:block text-gray-700 hover:text-purple-600"
>My Bids</NavLink>
   <NavLink to="/addproducts"   className="hidden lg:block text-gray-700 hover:text-purple-600"
>Create Products  </NavLink>
   
  </div>
  <div className="navbar-end gap-4">
    {
        user?<Link onClick={signOutFunc} to="/" className="btn">Sign Out</Link>:<div>
            <Link to="/login" className="btn">Log In</Link>
    <Link to="/register" className="btn btn-primary ml-3">Register</Link>
        </div>
    }
    
  </div>
</div>

    );
};

export default Navbar;