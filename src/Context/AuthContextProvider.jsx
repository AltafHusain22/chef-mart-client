/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);
const AuthContextProvider = ({ children }) => {
  // state declare for user-set
  const [user, setuser] = useState(null);
  const [loading, setLoading] = useState(true);
  const auth = getAuth(app);

  // user profile
  // const presentUser = auth.currentUser;
  // if (presentUser !== null) {
  //   const displayName = user.displayName;
  //   const email = user.email;
  //   const photoURL = user.photoURL;
  // }

  //   create user function
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
    
  };

  //   login user function
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // logout function
  const loggedOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  //   google login
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    signInWithPopup(auth, googleProvider);
  };

  // gitHub Login
  const gitHubProvider = new GithubAuthProvider();
  const githubLogin = () => {
    signInWithPopup(auth, gitHubProvider);
  };

  //   observer for user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setuser(loggedUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    logInUser,
    loggedOutUser,
    loading,
    googleLogin,
    githubLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
