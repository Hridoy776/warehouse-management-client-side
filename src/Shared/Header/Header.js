import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>

            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">daisyUI</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
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
            <Link to="/home">home</Link>
          </li>

          
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn bg-rose-500">Get started</button>
      </div>
      </div>
    </div>
  );
};

export default Header;
