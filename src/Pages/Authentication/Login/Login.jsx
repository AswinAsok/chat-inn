import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomizedSnackbars from "../../../Components/SnackBar/SnackBar";

import styles from "./Login.module.css";
import favicon from "./favicon.png"

const Login = ({ auth, db }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user.accessToken);
        localStorage.setItem("token", user.accessToken);
        setDoc(doc(db, "messages", email), {
          displayName: user.displayName,
          text: "uchj8899",
          timestamp: Timestamp.now(),
        });
        navigate("/chat");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <>
      {error && error.length > 0 && (
        <CustomizedSnackbars
          message={error}
          severity="error"
          setError={setError}
        />
      )}
      <div className={styles.pagemain_container}>
        <div className={styles.page_container}>
          <div className={styles.welcome_container}>
            <a href="/">
              <img src={favicon} alt="" className={styles.home} />
            </a>
            <p className={styles.welcome_heading}>Login to Chat'inn</p>
            <p className={styles.welcome_text}>
              Welcome to Chat'in. Hope you already have already created a
              account else click here. If you are new here this is a simple
              application with a global chat system. Everyone can chat here and
              everyone will see it.
            </p>
          </div>
          <div className={styles.signup_container}>
            <div className={styles.signup_box}>
              <input
                placeholder="Enter Email Address"
                type="email"
                name=""
                id="semail"
                className={styles.email_field}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <input
                placeholder="Enter your password"
                type="password"
                name=""
                id="spassword"
                className={styles.password_field}
                onChange={(e) => setPassword(e.target.value)}
              />
              <a href="/signup">
                <p className={styles.already}>Don't have an Account? Sign Up</p>
              </a>
              <button
                onClick={login}
                className={styles.signup_btn}
                type="submit"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
