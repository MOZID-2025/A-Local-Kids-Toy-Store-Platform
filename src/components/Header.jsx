import React from "react";
import { Link, NavLink } from "react-router";
import user1 from "../assets/user.png";
const Header = () => {
  const link = (
    <>
      <NavLink to="/">
        <li>
          <a href="">Home</a>
        </li>
      </NavLink>
      <NavLink to="/profile">
        <li>
          <a href="">My Profile</a>
        </li>
      </NavLink>
    </>
  );
  return (
    <div className="navbar max-w-[1280px] mx-auto ">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>

          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <Link to="/" className="text-xl">
          Kids Toy Store
        </Link>
      </div>
      <div className="navbar-end hidden md:flex items-center">
        <ul className="menu menu-horizontal px-1">
          {link}
          <img className="w-10 h-10 mr-2" src={user1} alt="" />
          <Link to='/login' className="btn btn-primary">Login </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
