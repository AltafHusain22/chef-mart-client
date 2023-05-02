import { useState } from "react";
import { FaBars, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-200 p-6">
      <div className="flex items-center flex-shrink-0 text-slate-700 mr-6">
        <Link to="/">
          <span className="font-semibold text-2xl tracking-tight">
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
          <Link
            to="/"
            className="block font-bold mt-4 lg:inline-block lg:mt-0 text-slate-700 hover:text-slate-600 mr-4"
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="block font-bold mt-4 lg:inline-block lg:mt-0 text-slate-700 hover:text-slate-600 mr-4"
          >
            Blog
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            to="/login"
            className="inline-block px-6 py-4  leading-none border rounded text-slate-100 font-bold hover:text-gray-900  mt-4 lg:mt-0 mr-4 bg-red-600  "
          >
            Login
          </Link>
          <FaUserCircle className="text-slate-700 h-8 w-8" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
