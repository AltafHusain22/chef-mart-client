/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContextProvider";
import { Navigate, useLocation } from "react-router-dom";

const AuthRequired = ({ children }) => {
  const location = useLocation()
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return (
      <div>
        <button type="button" className="bg-indigo-500 ..." disabled>
          <svg
            className="animate-spin h-5 w-5 mr-3 ..."
            viewBox="0 0 24 24"
          ></svg>
          Loading...
        </button>
      </div>
    );
  }
 
  if (user) {
    return children;
  }

  return <Navigate to={"/login"} state={{from:location}} replace></Navigate>;
};

export default AuthRequired;
