import React from "react";
//import GoogleButton from "react-google-button";
import { auth } from "../firebase.js";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import "./SignIn.css";

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

const SignIn = () => {
  return (

      <button onClick={googleSignIn} className="butt"><img height={20} src={require('../resources/butt.png')} alt="Sign In" /> Google SignIn</button>

  );
};

export default SignIn;
