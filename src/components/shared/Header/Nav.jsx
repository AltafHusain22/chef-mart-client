/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContextProvider";
import "./Header.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { user, loggedOutUser, loading } = useContext(AuthContext);
  const location = useLocation();

  // logout
  const handleLogOut = () => {
    if (loading) {
      return (
        <button type="button" className="bg-indigo-500 ..." disabled>
          <svg
            className="animate-spin h-5 w-5 mr-3 ..."
            viewBox="0 0 24 24"
          ></svg>
          Loading...
        </button>
      );
    }

    loggedOutUser();
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-200 p-6">
      <div className="flex items-center flex-shrink-0 text-slate-700 mr-6">
        <Link to="/">
          <span className="font-semibold text-2xl tracking-tight text-red-700">
            Chefs-challenge
          </span>
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-slate-700 border-gray-400 hover:text-slate-700 hover:border-white"
          onClick={toggleMenu}
        >
          <FaBars className="h-6 w-6" />
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          showMenu ? "block" : "hidden"
        }`}
      >
        <div className="text-lg lg:flex-grow text-center">
          <NavLink
            activeClassName="active"
            to="/"
            className="block font-bold mt-4 lg:inline-block lg:mt-0 text-slate-700  mr-4"
          >
            Home
          </NavLink>
          <NavLink
            activeClassName="active"
            to="/blog"
            className="block font-bold mt-4 lg:inline-block lg:mt-0 text-slate-700  mr-4"
          >
            Blog
          </NavLink>
        </div>
        {user ? (
          <div className="flex justify-items-center items-center">
            <button
              onClick={handleLogOut}
              className="inline-block px-6 py-4  leading-none border rounded text-slate-100 font-bold hover:text-gray-900  mt-4 lg:mt-0 mr-4 bg-red-600  "
            >
              LogOut
            </button>
            <div className="avatar">
              <div className="w-10 rounded-full ring ring-danger ring-offset-base-100 ring-offset-2">
                <div>
                  {user.photoURL && (
                    <img
                      className="tooltip hover:tooltip-visible"
                      src={user.photoURL}
                      alt={user.displayName}
                      title={user.displayName}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center">
            <Link
              to="/login"
              className="inline-block px-6 py-4  leading-none border rounded text-slate-100 font-bold hover:text-gray-900  mt-4 lg:mt-0 mr-4 bg-red-600  "
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
