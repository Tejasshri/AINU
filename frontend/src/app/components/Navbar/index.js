import React from "react";
import styles from "./index.module.css";
import { IoMdCall } from "react-icons/io";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a className={styles.navLogoLink}>
        <img src="header-logo.webp" alt="Logo" />
      </a>
      <a className={styles.navLogoCallBtn} href="tel:04469656767">
        <IoMdCall className={styles.navCallIcon} />
        044-69656767</a>
    </nav>
  );
}

export default Navbar;
