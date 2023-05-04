/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContextProvider";

const Register = () => {
  const { createUser,loading } = useContext(AuthContext);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()
  const { user } = useContext(AuthContext);

  const hanleRegister = (event) => {


    if (loading) {
      return (
        <button type="button" className="bg-indigo-500 ...">
          <svg
            className="animate-spin h-5 w-5 mr-3 ..."
            viewBox="0 0 24 24"
          ></svg>
          Loading...
        </button>
      );
    }
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const confirm = form.confirm.value;
    const photo = form.photo.value;


    // form validation
    if (password.length < 6) {
      setError("Password should Be minimum 6 char");
      return;
    } else if (password != confirm) {
      setError("Uff,Password Did't Matched");
      return;
    }

    // optional validation
    //  else if (!/^(?=.*[a-z])/.test(password)) {
    //   setError('Should be At least 1 lowercase letter')
    //   return
    // }else if (!/^(?=.*[A-Z])/.test(password)) {
    //   setError('Should be At least 1 Capital letter')
    //   return
    // }else if (!/^(?=.*[0-9])/.test(password)) {
    //   setError('Should be At least 1 Numaric letter')
    //   return
    // }else if (!/^(?=.*[!@@#\\$%\\^&\\*])(?=.{8,})/.test(password)) {
    //   setError('Should be At least 1 Special Char')
    //   return
    // }

    if ((email, password)) {
      createUser(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setSuccess("Thanks, Account Created Sucessfully");
          form.reset()

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
        });
    }
  };



  return (
    <>
      <div className="register-section w-full md:w-2/3 lg:w-1/2 mx-auto">
        <h2 className="my-10 text-center font-bold md:text-5xl text-xl">
          Register Here
        </h2>
        <div className="card card-side bg-base-200 shadow">
          <div className="card-body">
            {error ? 
              <div>
                <p className="text-red-600 text-center font-bold text-xl">
                  {error}
                </p>
              </div>
             : 
              <p className="text-green-600 text-center font-bold text-xl">
                {success}
              </p>
            }

            <form onSubmit={hanleRegister} className="flex flex-col gap-5">
              <div>
                <label className="font-bold  mb-4">Name:</label>
                <input
                  type="text"
                  placeholder="Type your name"
                  className="w-full input mt-2"
                  name="name"
                />
              </div>
              <div>
                <label className="font-bold mb-2">Email:</label>
                <input
                  type="email"
                  placeholder="Type your email"
                  className="w-full input mt-2"
                  name="email"
                />
              </div>
              <div className="flex flex-col md:flex-row gap-5">
                <div className="flex-1">
                  <label className="font-bold  mb-2">Password:</label>
                  <input
                    type="password"
                    placeholder="Type your password"
                    className="w-full input mt-2"
                    name="password"
                  />
                </div>
                <div className="flex-1">
                  <label className="font-bold  mb-2">Confirm Password:</label>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className="w-full input mt-2"
                    name="confirm"
                  />
                </div>
              </div>
              <div>
                <label className="font-bold  mb-2">Photo URL:</label>
                <input
                  type="text"
                  placeholder="Type your photo URL"
                  className="w-full input mt-2"
                  name="photo"
                />
              </div>
              <button className="btn border-0 bg-red-500 w-full mt-10">
                Register
              </button>
              <p className="text-center mt-5">
                Already Have an Account? Please
                <Link className="text-blue-600 ml-2" to={"/login"}>
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
