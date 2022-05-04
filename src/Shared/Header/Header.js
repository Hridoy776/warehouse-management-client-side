import React from "react";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSingOut = () => {
    signOut(auth);
  };
  return (
    <div className="  navbar bg-[#4c064c] text-neutral-content">
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
                <NavLink  to="/home">Home</NavLink>
              </li>

              <li>
              <NavLink to="/blog">blog</NavLink>
            </li>
            
              {user && (
                <>
                  <NavLink to="/additem">add item</NavLink>
                  <NavLink to="/manage">manage item</NavLink>
                  <NavLink to="/myitem">my item</NavLink>
                </>
              )}
            
            <li>
              {user ? (
                <button onClick={handleSingOut}>signout</button>
              ) : (
                <NavLink to="/login">Login</NavLink>
              )}
            </li>
            </ul>
          </div>
          <NavLink to="/" className="  btn btn-ghost normal-case text-xl">
            daisyUI
          </NavLink>
        </div>
        <div className="navbar-end hidden lg:flex ">
          <ul className="menu menu-horizontal   px-20">
            <li>
              <NavLink to="/home">home</NavLink>
            </li>
            <li>
              <NavLink to="/blog">blog</NavLink>
            </li>
            
              {user && (
                <li>
                  <NavLink to="/additem">add item</NavLink>
                  <NavLink to="/manage">manage item</NavLink>
                  <NavLink to="/myitem">my item</NavLink>
                </li>
              )}
            
            <li>
              {user ? (
                <button onClick={handleSingOut}>signout</button>
              ) : (
                <NavLink to="/login">Login</NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
