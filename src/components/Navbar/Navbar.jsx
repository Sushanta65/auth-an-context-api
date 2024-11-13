import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
         <li><NavLink to='/'>Home</NavLink></li>
         <li><NavLink to='/about'>About</NavLink></li>
         <li><NavLink to='/login'>Login</NavLink></li>
         <li><NavLink to='/signup'>Sign Up</NavLink></li>
    </>
  return (
    <div className="w-full bg-gray-200">
      <div className="navbar w-4/5 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
             ---
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
             {
                navLinks
            }
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
                navLinks
            }
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
