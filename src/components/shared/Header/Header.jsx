/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="common-bg px-10">
      <nav className="navbar max-w-100 md:mx-auto flex items-center justify-between   top-0 py-6">
        <div>
          {/* logo */}
          <Link to="/" className="text-2xl text-[#1A1919;] font-extrabold logo">
            Chefs-Challenge
          </Link>
        </div>

        {/* dekstop-1 */}
        <div className="hidden lg:flex ml-5">
          <ul className="flex items-center gap-6 px-1">
            <li>
              <Link
                className="text-[#757575;] font-semibold hover:text-[#7E90FE]"
                to="/"
              >
                Home 
              </Link>
            </li>
            <li>
              <Link
                className="text-[#757575;] font-semibold hover:text-[#7E90FE]"
                to="/blog"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* mobile menu */}
        <div className="flex ">
          <div className="dropdown mr-10 lg:hidden">
            <label tabIndex={0} className="btn btn-ghost">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  className="text-[#757575;] font-semibold hover:text-[#7E90FE]"
                  to="/"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  className="text-[#757575;] font-semibold hover:text-[#7E90FE]"
                  to="/blogs"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#757575;] font-semibold hover:text-[#7E90FE]"
                  to="/"
                >
                  home 1
                </Link>
              </li>
              <li>
                <Link
                  className="text-[#757575;] font-semibold hover:text-[#7E90FE]"
                  to="/"
                >
                  home 1
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* dekstop */}
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-6 px-1">
            <li>
              <Link
                className="text-[#757575;] font-semibold hover:text-[#7E90FE]"
                to="/"
              >
                LogOut
              </Link>
            </li>
            <li>
              <Link
                className="text-[#757575;] font-semibold hover:text-[#7E90FE]"
                to="/login"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
