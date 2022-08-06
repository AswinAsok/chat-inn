import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Home.module.css";

import FirstView from "./assets/FirstView.png";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={styles.homemain_container}>
        <div className={styles.home_container}>
          <div className={styles.home_view}>
            <div className={styles.firstview_container}>
              <div className={styles.first_view}>
                <div className={styles.fv_texts}>
                  <p className={styles.fv_heading}>
                    Introducing <br />
                    The Chat 'Inn
                  </p>
                  <p className={styles.fv_tagline}>
                    The Chat'Inn is a simple and minimal realtime chat
                    application whose database is powered by firebase and
                    firestore. The frontend part is complete made using React.js
                    and made responsive using normal css properties.
                  </p>
                  <div className={styles.buttons}>
                    <button className={styles.btn}>Github Star</button>
                    <button className={styles.btn}>Try It</button>
                  </div>
                </div>
                <div className={styles.fv_img}>
                  <img src={FirstView} alt="" className={styles.fv_image} />
                  <p className={styles.aswinasok}>
                    Designed, Developed, Described by Aswin Asok
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
