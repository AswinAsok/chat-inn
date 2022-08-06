import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Home.module.css";

import FirstView from "./assets/FirstView.png";
import realtime from "./assets/realtime.png";
import active from "./assets/active.png";
import ui from "./assets/ui.png";

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
                    <a href="/chat" target="_blank" rel="noopener noreferrer">
                      <button className={styles.btn}>Try It</button>
                    </a>
                  </div>
                </div>
                <div className={styles.fv_img}>
                  <img src={FirstView} alt="" className={styles.fv_image} />
                  <p className={styles.aswinasok}>
                    Designed, Developed, Described by Aswin Asok
                  </p>
                </div>
              </div>

              <div className={styles.second_view}>
                <div className={styles.sv_texts}>
                  <p className={styles.sv_heading}>Features 'Inn.</p>
                  <p className={styles.sv_tagline}>
                    Excited to know what all features are loaded into this
                    project. The platform is yours now, Let the Exploration
                    Start!
                  </p>
                </div>
                <div className={styles.sv_points}>
                  <div className={styles.sv_point}>
                    <img src={realtime} alt="" className={styles.svp_image} />
                    <p className={styles.svp_heading}>Realtime</p>
                    <p className={styles.svp_text}>
                      The Chats are updated realtime with the help of the
                      firestore and its superb functions
                    </p>
                  </div>
                  <div className={styles.sv_point}>
                    <img src={active} alt="" className={styles.svp_image} />
                    <p className={styles.svp_heading}>Active Users</p>
                    <p className={styles.svp_text}>
                      You get to see who all the online at the present time to
                      chat and have a cool converstation
                    </p>
                  </div>
                  <div className={styles.sv_point}>
                    <img src={ui} alt="" className={styles.svp_image} />
                    <p className={styles.svp_heading}>User Interface</p>
                    <p className={styles.svp_text}>
                      The User Interface is so minimal that you never know how
                      fast time passes.
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.thrid_view}>
                <div className={styles.tv_texts}>
                  <p className={styles.tv_heading}>The Technologies Implemented</p>
                  <p className={styles.tv_tagline}>
                    These are the list of technologies, packages and products
                    which were used to make this project to its present state.
                  </p>
                </div>
                <div className={styles.tv_points}>
                  <ul>
                    <li>Aswin's Logical Thinking and Writing Abilties</li>
                    <li>React.js</li>
                    <li>Firebase Authentication</li>
                    <li>Firestore Realtime Database</li>
                    <li>Hyper Text Markup Language</li>
                    <li>Cascading Style Sheets</li>
                    <li>Material UI for Snackbars</li>
                  </ul>
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
