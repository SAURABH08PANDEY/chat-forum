import React from "react";
import { auth } from "../firebase.js";
import "./Messages.css";
const Messages = ({ messages,scroll }) => {
    const msgClass=
    messages.uid === auth.currentUser.uid?`left`:`right`;
    scroll.current.scrollIntoView({behavior: 'smooth'})
    return (
        <div className={`whole ${msgClass}`} >
            <div className="name"><div className="tit">{messages.name}</div></div>
            <div className="msg">{messages.text}</div>
            
        </div>
    );
}

export default Messages;