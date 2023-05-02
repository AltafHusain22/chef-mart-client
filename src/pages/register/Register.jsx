/* eslint-disable no-unused-vars */
import React from "react";

const Register = () => {
  return (
    <>
      <div className="register-section w-full md:w-2/3 lg:w-1/2 mx-auto">
        <h2 className="my-10 text-center font-bold md:text-5xl text-xl">
          Register Here
        </h2>
        <div className="card card-side bg-base-200 shadow">
          <div className="card-body">
            <form className="flex flex-col gap-5">
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
                  <label className="font-bold  mb-2">
                    Confirm Password:
                  </label>
                  <input
                    type="password"
                    placeholder="Confirm your password"
                    className="w-full input mt-2"
                    name="password"
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
              <button className="btn btn-primary w-full mt-10">Register</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
