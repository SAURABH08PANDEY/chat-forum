import React from "react";
import { auth } from "../firebase.js";
import "./LogOut.css"
const LogOut = () => {

  return (
    <div>
      <button className="butt" onClick={() => auth.signOut()}>Sign Out</button>
    </div>
  );
};

export default LogOut;
