import React from 'react'
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={styles.footer_container}>
        <div className={styles.footer_view}>
            <p className={styles.footer_text}>Made by Aswin Asok To Learn 🔥 Firebase.</p>
        </div>
    </div>
  )
}

export default Footer