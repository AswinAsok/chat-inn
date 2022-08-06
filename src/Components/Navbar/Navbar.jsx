import React from "react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { doc, deleteDoc } from "firebase/firestore";

const Navbar = ({ auth, db }) => {
  const navigate = useNavigate();

  const logout = async () => {
    const res = await deleteDoc(doc(db, "messages", auth.currentUser.email));
    console.log(res);
    console.log(auth.currentUser.email);
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
            <a href="/">
              <p className={styles.product}>
                The
                <br />
                Chat
                <br />
                'Inn
              </p>
            </a>
            <hr />
            <p className={styles.tagline}>
              Global
              <br />
              Chat
              <br />
              Application
            </p>
          </div>
          {auth && (
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
          )}
          {!auth && (
            <div className={styles.navbar_options}>
              <a
                href="https://twitter.com/_aswin_asok_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={styles.logout}>Follow Me</button>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
