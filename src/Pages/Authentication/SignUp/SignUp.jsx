import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import styles from "./SignUp.module.css";
import { useNavigate } from "react-router-dom";
import CustomizedSnackbars from "../../../Components/SnackBar/SnackBar";

const SignUp = ({ auth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        localStorage.setItem("token", user.accessToken);
        console.log(user.accessToken);
        updateProfile(auth.currentUser, {
          displayName: username || email.substring(0, email.lastIndexOf("@")),
        })
          .then((response) => {
            navigate("/login");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorCode);
        console.log(errorMessage);
        // ..
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
            <p className={styles.welcome_heading}>Welcome to Chat'inn</p>
            <p className={styles.welcome_text}>
              Welcome to Chat'in. if already have already created a account else
              click here. If you are new here this is a simple application with
              a global chat system. Everyone can chat here and everyone will see
              it.
            </p>
          </div>
          <div className={styles.signup_container}>
            <div className={styles.signup_box}>
              <input
                placeholder="Enter Username"
                type="text"
                name=""
                id="username"
                className={styles.email_field}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
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
                onClick={signup}
                className={styles.signup_btn}
                type="submit"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
