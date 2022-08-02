import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";

import styles from "./Login.module.css";

const Login = ({ auth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        console.log(user.accessToken);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  return (
    <>
      <div className={styles.pagemain_container}>
        <div className={styles.page_container}>
          <div className={styles.welcome_container}>
            <p className={styles.welcome_heading}>Login to Chat'in</p>
            <p className={styles.welcome_text}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla
              vel deserunt incidunt cum neque nisi quibusdam impedit! Nobis,
              architecto asperiores? Nihil sequi rerum fuga aliquid? Quae
              blanditiis voluptas voluptate aperiam.
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
