import React,{useState} from "react";
import {auth, db} from '../firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import './SendMsg.css'
const SendMsg = () => {
    
    const [input, setInput] = useState('');
    const sendMessage = async (e) => {
        e.preventDefault();

        if (input === '') {
            alert('Please enter a valid message')
            return
        }
        const { uid, displayName } = auth.currentUser;
        await addDoc(collection(db, 'messages'), {
            text: input,
            name: displayName,
            uid,
            timestamp: serverTimestamp()
        })
        setInput('');
        
    }


    return (
        <form onSubmit={sendMessage} className="form" >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type='text'
            placeholder='Message'
            className="form__field"
          />
          <button  type='submit' className="btn btn--primary btn--inside ">
            Send
          </button>
        </form>
      );
}

export default SendMsg;