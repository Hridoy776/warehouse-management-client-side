import React, { useState }  from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import { MenuIcon, } from '@heroicons/react/solid'
const Header = () => {
  const [user] = useAuthState(auth);
  const [navbarOpen, setNavbarOpen]=useState(false)

  const handleSingOut = () => {
    signOut(auth);
  };
  const navLinkStyles=({isActive})=>{
    return{
      color:isActive ? '#bf25bf':'black'
    }
  }
  return (
    <nav className="fixed shadow-md z-50 top-0 w-full flex flex-wrap items-center justify-between px-2 py-3 bg-white  mb-3">
        <div className="container lg:px-32 px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-2xl font-medium leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase "
              to="/"
            >
              pristine perfumes
            </Link>
            <button
              className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
               <MenuIcon className="h-5 w-5 text-black"/> 
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              
              <li>
              <NavLink style={navLinkStyles} className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug  hover:opacity-75" to="/home">home</NavLink>
            </li>
            <li>
              <NavLink style={navLinkStyles} className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug  hover:opacity-75" to="/blog">blog</NavLink>
            </li>
            
              {user && (
                <li>
                  <NavLink style={navLinkStyles} className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug  hover:opacity-75" to="/additem">add item</NavLink>
                  
                </li>
              )}
              {user && (
                <li>
                  <NavLink style={navLinkStyles} className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug  hover:opacity-75" to="/manage">manage item</NavLink>
                  
                </li>
              )}
              {user && (
                <li>
                  <NavLink style={navLinkStyles} className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug  hover:opacity-75" to="/myitem">my item</NavLink>
                  
                </li>
              )}
              
                  
            
            <li>
              {user ? (
                <button className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75" onClick={handleSingOut}>signout</button>
              ) : (
                <NavLink style={navLinkStyles} className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug  hover:opacity-75" to="/login">Login</NavLink>
              )}
            </li>
              
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Header;
