import "./App.css";
import Login from "./Pages/Authentication/Login/Login";
import SignUp from "./Pages/Authentication/SignUp/SignUp";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Chat from "./Pages/Chat/Chat";
import { getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";

function App() {
  const [messages, setMessages] = useState([]);
  const [stars, setStars] = useState("");

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

  useEffect(() => {
    fetch(`https://api.github.com/repos/AswinAsok/chat-inn`)
      .then((res) => res.json())
      .then((data) => {
        setStars(data.stargazers_count);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home stars={stars} />} />
          <Route path="/login" element={<Login auth={auth} db={db} />} />
          <Route path="/signup" element={<SignUp auth={auth} />} />
          <Route
            path="/chat"
            element={
              <Chat
                auth={auth}
                db={db}
                stars={stars}
                setMessages={setMessages}
                messages={messages}
              />
            }
          />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
