import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footerDisplay}>
      <p> Copyright © {new Date().getFullYear()} Bite Builder </p>
    </footer>
  );
}

export default Footer;
