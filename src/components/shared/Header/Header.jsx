/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='common-bg'>
		<nav className="navbar max-w-96 md:mx-auto flex justify-around items-center px-4 top-0 py-6">
			<div>
				
				<div className="dropdown">
					<label tabIndex={0} className="btn btn-ghost lg:hidden">
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
								Home
							</Link>
						</li>
			
						<li>
							<Link
								className="text-[#757575;] font-semibold hover:text-[#7E90FE]"
								to="/blogs"
							>
								Blog
							</Link>
						</li>
					</ul>
				</div>
				<Link to="/" className="text-2xl text-[#1A1919;] font-extrabold">
					Chefs-Mart
				</Link>
			</div>
			<div className="hidden lg:flex">
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
							to="/blogs"
						>
							Blog
						</Link>
					</li>
				</ul>
			</div>
		</nav>
		</div>
			);
};

export default Header;