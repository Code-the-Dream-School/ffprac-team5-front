import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerDisplay}>
      <p> Copyright © {new Date().getFullYear()} Bite Builder </p>

      <div className={styles.footerLinkContainer}>
        <div id="logoContainer">
          <img
            className={styles.footerLogos}
            src={"src/assets/images/facebook-official.svg"}
          />
          <img
            className={styles.footerLogos}
            src={"src/assets/images/linkedin-icon.svg"}
          />
          <img
            className={styles.footerLogos}
            src={"src/assets/images/youtube-icon.svg"}
          />
          <img
            className={styles.footerLogos}
            src={"src/assets/images/instagram-icon.svg"}
          />
        </div>

        <ul className={styles.footerLinks}>
          <li className={styles.footerLinkItem}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.footerLinkItem}>
            <Link to="/Profile">Profile</Link>
          </li>
          <li className={styles.footerLinkItem}>
            <Link to="/Search">Search</Link>
          </li>
          <li className={styles.footerLinkItem}>
            <Link to="/NewRecipe">New Recipe</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
