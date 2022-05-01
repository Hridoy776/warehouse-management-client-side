import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
    const [user]=useAuthState(auth);

    const handleSingOut=()=>{
       signOut(auth)
    }
  return (
    <div className="   navbar bg-neutral text-neutral-content">
      <div className="container mx-auto ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-zinc-900 rounded-box w-52"
          >
            <li>
              <Link to="/home">Home</Link>
            </li>

            <li>
              <Link to="/login">login</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="  btn btn-ghost normal-case text-xl">daisyUI</Link>
      </div>
      <div className="navbar-end hidden lg:flex ">
        <ul className="menu menu-horizontal   px-20">
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            <Link to="/home">home</Link>
          </li>
          <li>
            {
                user ? <button  onClick={handleSingOut}>signout</button>  : <Link to="/login">Login</Link>
            }
                
            
          </li>

          
        </ul>
      </div>
      
      </div>
    </div>
  );
};

export default Header;
