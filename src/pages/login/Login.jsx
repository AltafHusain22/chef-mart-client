/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { FaBeer, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const handleGoogleLogin = () => {};
  const handleGithubleLogin = () => {};

  return (
    <div className="login-section mx-auto">
      <h2 className="my-10 text-center font-bold text-5xl">Login Here</h2>
      <div className="card card-side bg-base-200 shadow-lg md:w-3/5 sm:w-4/5 mx-auto">
        <div className="card-body">
          <form className="flex flex-col gap-5 justify-center">
            <div>
              <label className="font-bold text-xl">
                Email:
                <input
                  type="email"
                  placeholder="Type email"
                  className="mt-4 input w-full max-w-xs sm:max-w-md md:max-w-none"
                />
              </label>
            </div>
            <div>
              <label className="font-bold text-xl">
                Password:
                <input
                  type="password"
                  placeholder="Type password"
                  className="mt-4 input w-full max-w-xs sm:max-w-md md:max-w-none"
                />
              </label>
            </div>
            <button className="btn btn-primary md:w-64 mx-auto max-w-xs sm:max-w-md md:max-w-none">
              Login
            </button>
          </form>
          <h2 className="text-center mt-10 font-bold text-2xl">Or</h2>
          <div className="card-actions mt-10 flex flex-col sm:flex-row gap-5 justify-center">
            <div>
              <button
                onClick={() => handleGoogleLogin()}
                className="btn btn-white w-full max-w-xs sm:max-w-md md:max-w-none"
              >
                <FaGoogle className="mr-3" /> Google Login
              </button>
            </div>
            <div>
              <button
                onClick={() => handleGithubleLogin()}
                className="btn btn-white w-full max-w-xs sm:max-w-md md:max-w-none"
              >
                <FaGithub className="mr-3" /> GitHub Login
              </button>
            </div>
          </div>
          <p className="text-center mt-5">
            Are You New Here? Please{" "}
            <Link className="text-blue-600" to={"/register"}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
