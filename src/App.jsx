import "./App.css";
import Navbar from "./components/Navbar";
import ChatArea from "./components/ChatArea";
import { auth } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";
import SendMsg from "./components/SendMsg";

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="AppOuter">
      <div className="App">

      <Navbar />
        {user ? <ChatArea user={user} /> : <h2>SIGN IN WITH A GOOGLE ACCOUNT TO USE THIS SERVICE...</h2>}
        {user ? <SendMsg /> : null}
        
    </div>
    </div>
  );
}

export default App;
