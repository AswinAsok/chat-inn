import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import styles from "./SignUp.module.css";

const SignUp = ({ auth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        console.log(user.accessToken)
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
          <button onClick={signup} type="submit">
            SignUp
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
