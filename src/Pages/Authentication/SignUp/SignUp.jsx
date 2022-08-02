import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import styles from "./SignUp.module.css";

const SignUp = () => {
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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
  };

  return (
    <>
      <div className={styles.signup_container}>
        <div className={styles.signup_box}>
          <input
            placeholder="Enter Email Address"
            type="email"
            name=""
            id="email"
            className={styles.email_field}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            placeholder="Enter your password"
            type="password"
            name=""
            id="password"
            className={styles.password_field}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={signup} type="submit">
            SignUp
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
