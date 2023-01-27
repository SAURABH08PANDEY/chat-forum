import React, { useState, useEffect,useRef } from "react";
import "./ChatArea.css";
import { db } from "../firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import Messages from "./Messages";
const ChatArea = (props) => {
  const [messages, setMessages] = useState([]);
  const scroll = useRef();
  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="chatArea">
      {messages &&
        messages.map((message) => (
          <Messages key={message.id} messages={message} scroll={scroll} />

        ))}
      <span ref={scroll}></span>
      <div className="type4">

      </div>
    </div>
  );
};

export default ChatArea;
