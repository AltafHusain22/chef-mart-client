/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import {  FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContextProvider";

const Login = () => {
  const { logInUser, loading, googleLogin, githubLogin } =
  useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state?.from?.pathname || '/' ;
  

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

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
    // login with email and password
    logInUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setSuccess(" LoggedIn success !");
        form.reset();
        navigate(from)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage, errorCode);
      });
  };

  // login with google
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  // login with github
  const handleGithubleLogin = () => {
    githubLogin()
      .then((result) => {
        const user = result.user;

      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="login-section mx-auto">
      <h2 className="my-10 text-center font-bold text-5xl">Login Here</h2>
      <div className="card card-side bg-base-200 shadow-lg md:w-3/5 sm:w-4/5 mx-auto">
        <div className="card-body">
          {/* error and success message  */}
          {error ? (
            <div>
              <p className="text-red-600 text-center font-bold text-xl">
                {error}
              </p>
            </div>
          ) : (
            <p className="text-green-600 text-center font-bold text-xl">
              {success}
            </p>
          )}

          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-5 justify-center"
          >
            <div>
              <label className="font-bold text-xl">
                Email:
                <input
                  type="email"
                  placeholder="Type email"
                  name="email"
                  className="mt-4 input w-full max-w-xs sm:max-w-md md:max-w-none"
                />
              </label>
            </div>
            <div>
              <label className="font-bold text-xl">
                Password:
                <input
                  type="password"
                  name="password"
                  placeholder="Type password"
                  className="mt-4 input w-full max-w-xs sm:max-w-md md:max-w-none"
                />
              </label>
            </div>
            <button className="btn border-0 bg-red-500 md:w-64 mx-auto max-w-xs sm:max-w-md md:max-w-none">
              Login
            </button>
          </form>
          <h2 className="text-center mt-10 font-bold text-2xl">Or</h2>
          <div className="card-actions mt-10 flex flex-col sm:flex-row gap-5 justify-center">
            <div>
              <button
                onClick={() => handleGoogleLogin()}
                className="btn border-0 bg-red-500 w-full max-w-xs sm:max-w-md md:max-w-none"
              >
                <FaGoogle className="mr-3" /> Google Login
              </button>
            </div>
            <div>
              <button
                onClick={() => handleGithubleLogin()}
                className="btn border-0 bg-red-500 w-full max-w-xs sm:max-w-md md:max-w-none"
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
