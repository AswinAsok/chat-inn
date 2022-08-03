import "./App.css";
import Login from "./Pages/Authentication/Login/Login";
import SignUp from "./Pages/Authentication/SignUp/SignUp";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Chat from "./Pages/Chat/Chat";
import { getFirestore } from "firebase/firestore";
import { useState } from "react";

function App() {
  const [messages, setMessages] = useState([]);
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getFirestore(app);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login auth={auth} />} />
          <Route path="/signup" element={<SignUp auth={auth} />} />
          <Route
            path="/chat"
            element={
              <Chat
                auth={auth}
                db={db}
                setMessages={setMessages}
                messages={messages}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
