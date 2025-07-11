'use client';

import styles from "./index.module.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
} from "react-icons/fa";
import { IoCall } from "react-icons/io5";

export default function Footer() {
  const onCallClick = () => {
    window.open("tel:+1234567890", "target");
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.topSection}>
        <div className={styles.logoBox}>
          <img
            src="/header-logo.webp"
            alt="AINU Logo"
            className={styles.logo}
          />
        </div>

        <div className={styles.contactBox} >
          <h4>Contact</h4>
          <p onClick={() => onCallClick()}>
            <span className={styles.circleCall}>
              <IoCall color="white" className={styles.icon} />
            </span>{" "}
            +1 234 567 890
          </p>
        </div>

        <div className={styles.socialBox}>
          <h4>Follow Us</h4>
          <div className={styles.socialIcons}>
            <FaFacebook />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
      </div>

      <hr className={styles.divider} />
      <div className={styles.bottomText}>2025 AINU. All rights reserved.</div>
    </footer>
  );
}
