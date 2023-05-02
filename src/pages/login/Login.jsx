/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { FaBeer, FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const handleGoogleLogin = () => {};
  const handleGithubleLogin = () => {};

  return (
    <div className="login-section w-3/5 mx-auto">
      <h2 className="my-10 text-center font-bold text-5xl">Login Here</h2>
      <div className="card card-side bg-base-200 shadow">
        <div className="card-body">
          <form className="flex gap-5 justify-center">
            <div>
              <label className="font-bold text-xl ">
                Email :
                <input
                  type="email"
                  placeholder="Type email"
                  className=" mt-4 input w-full max-w-xs mr-3"
                />
              </label>
            </div>
          <div>  <label className="font-bold text-xl ">
              Password :
              <input
                type="password"
                placeholder="Type password"
                className="mt-4 input w-full max-w-xs"
              />
            </label></div>
          </form>
          <h2 className="text-center mt-10 font-bold text-2xl">Or</h2>
          <div className="card-actions  mt-10">
            <div>
              <button
                onClick={() => handleGoogleLogin()}
                className="btn btn-white w-96"
              >
                <FaGoogle className="mr-3" /> Google Login
              </button>
            </div>

            <div>
              <button
                onClick={() => handleGithubleLogin()}
                className="btn btn-white w-96"
              >
                <FaGithub className="mr-3" /> GitHub Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
