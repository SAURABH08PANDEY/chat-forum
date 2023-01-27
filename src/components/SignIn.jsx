import React from "react";
//import GoogleButton from "react-google-button";
import { auth } from "../firebase.js";
import "../resources/butt.png";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

const SignIn = () => {
  return (
    <div  onClick={googleSignIn} >
      <img className="butt" src="https://onymos.com/wp-content/uploads/2020/10/google-signin-button-1024x260.png" alt="Sign In" />
    </div>
  );
};

export default SignIn;
