import { IoCartOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../public/logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useCart from "../Hook/useCart";

const NavBar = () => {
  const [cart] =useCart()

  const {user, logOut} = useContext(AuthContext)

  const [showLogout, setShowLogout] = useState(false);
  console.log(user)
  const handleLogout = ()=>{
        logOut()
        setShowLogout(false)
        .then(result =>{
          console.log(result.user)
        })
        .catch(error =>{
          console.log(error)
        })
  }
  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };


  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/mobiles"}>Mobiles</NavLink>
      </li>
      <li>
        <NavLink to={"/add"}>Add Product</NavLink>
      </li>
      <li>
        <NavLink to={"/service"}>Services</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar w-full text-white  mx-auto md:bg-orange-500 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost bg-orange-600 lg:hidden">
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
            className="menu menu-sm dropdown-content  z-[1] p-2 shadow bg-orange-600 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a>
          <img src={logo} className="w-20 h-16 object-cover" alt="" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex md:flex">
        <ul className="menu menu-horizontal px-5">{navLinks}</ul>
      </div>
      <div className="navbar-end ">
        <div className="relative mr-4 flex justify-center items-center">
          <button className=" flex justify-center items-center">
          <Link to={'/cart'}>
            <IoCartOutline className="text-3xl text-white" />
          </Link>
          </button>
            <div className="badge absolute text-white -right-2 -top-2 bg-orange-700 p-1">+{cart.length}</div>

        </div>
        {/* {user ? (
          <button
            onClick={handleLogOut}
            className="p-2 rounded bg-orange-600 text-white"
          >
            Log Out
          </button>
        ) : (
          <Link to={"/login"}>
            <button className="p-2 rounded bg-orange-600 text-white">
              Login
            </button>
          </Link>
        )} */}

        {!user ? (
          <Link to={"/login"}>
            <button className="p-2 rounded bg-orange-600 text-white">
              Login
            </button>
          </Link>
          
        ) : (
          
            <div style={{ position: 'relative' }}>
              <img
                src={user?.photoURL} // Use user's photoURL or a placeholder
                alt="Avatar"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                }}
                onClick={toggleLogout}
              />
              {showLogout && (
                <button
                  onClick={handleLogout}
                  style={{
                    position: 'absolute',
                    top: '40px',
                    left: '-15px',
                    backgroundColor: 'red',
                    color: 'white',
                    border: 'none',
                    padding: '5px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Logout
                </button>
              )}
            </div>
          
        )}
      </div>
    </div>
  );
};

export default NavBar;
