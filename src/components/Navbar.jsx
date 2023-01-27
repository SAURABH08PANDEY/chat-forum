import React from "react";
import { auth } from "../firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import LogOut from "./LogOut";
import "./Navbar.css";
const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <div>
          <h1>Chat Forum</h1>
        </div>

        <div className="butt">{user ? <LogOut /> : <SignIn />}</div>
      </div>
    </div>
  );
};

export default Navbar;
