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
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Exercitationem at velit quisquam tenetur quia aperiam minus
                    temporibus laboriosam. Accusantium fugiat harum, sed
                    provident facere aliquam.
                  </p>
                </div>
                <div className={styles.fv_image}>
                  <img src={FirstView} alt="" className={styles.fv_image} />
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
