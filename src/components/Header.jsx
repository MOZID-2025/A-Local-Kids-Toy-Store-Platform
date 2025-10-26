import React, { use } from "react";
import { Link, NavLink } from "react-router";
import user1 from "../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
const Header = () => {
  const { user, logOut } = use(AuthContext);
  const link = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/profile">My Profile</NavLink>
      </li>
    </>
  );
  const handleLogout = () => {
    console.log("user trying to logout");
    logOut()
      .then(() => {
        alert("Your Logged Out Successfully ");
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
          <img
            className="w-10 h-10 mr-2 border rounded-full"
            src={`${user ? user.photoURL : user1}`}
            alt=""
          />

          {user ? (
            <button onClick={handleLogout} className="btn btn-primary">
              Logout
            </button>
          ) : (
            <Link to="/auth/login" className="btn btn-primary">
              Login{" "}
            </Link>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
