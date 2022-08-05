import React from "react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

const Navbar = ({ auth }) => {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("Signed Out!");
      })
      .catch((error) => {
        console.log(error);
      });
    localStorage.removeItem("token");
    navigate("/login");
  };
  return (
    <div className={styles.navbarmain_container}>
      <div className={styles.navbar_container}>
        <div className={styles.navbar}>
          <div className={styles.navbar_text}>
            <p className={styles.product}>
              Lets
              <br />
              Chat
              <br />
              'In
            </p>
            <hr />
            <p className={styles.tagline}>
              Global
              <br />
              Chat
              <br />
              Application
            </p>
          </div>
          <div className={styles.navbar_options}>
            <button
              onClick={() => {
                logout();
              }}
              className={styles.logout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
