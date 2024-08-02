import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../public/logo.png'

const NavBar = () => {

    const navLinks = (
        <>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/mobiles"}>Mobiles</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About Us</NavLink>
          </li>         
        </>
      );
    return (
        <div className="navbar w-11/12 mx-auto bg-base-100" >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a>
            <img src={logo} className='w-20 h-16 object-cover' alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex md:flex">
          <ul className="menu menu-horizontal px-5">{navLinks}</ul>
        </div>
        <div className="navbar-end">
        
           <button className="p-2 rounded bg-orange-600 text-white">Login</button>
        
        </div>
      </div>
          
      );
  };

export default NavBar;