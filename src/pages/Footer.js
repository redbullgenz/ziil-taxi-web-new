import React from 'react'
import styles from '../style/header/Footer.module.css'
import { Link } from "react-router-dom";
import { navLinks } from "../pages/data";


export default function Footer() {
  return (
      <>
    <div className={styles.footer}>
        <div className={styles.footerDiv}>
        <div className={styles.itemTitle}>ZIIL-TAXI</div>

        </div>

        <div className={styles.footerDiv2}>
        <div className={styles.title2}>
        PATNER
        </div>
        <div className={styles.itemHead}>K-12 Kiosk</div>
        </div>

        <div className={styles.footerDiv2}>
        <div className={styles.title2}>
        SOCIAL MEDIA
        </div>
            <div className={styles.itemHead }>Instagram</div>
            <div className={styles.item}>Facebook</div>
        </div>

        <div className={styles.footerDiv2}>
        <div className={styles.title2}>
            KONTAKT
        </div>
            <div className={styles.itemHead}>Tel: 079 400 11 11</div>
            <div className={styles.item}>E-Mail: info@ziil-taxi</div>
            <div className={styles.item}>8280 Kreuzlingen</div>
            <div className={styles.item}>Finkerstrasse 1</div>
        </div>
    </div>
        <div className={styles.linkAlbert}>AlbertZ </div>
        </>
  )
}