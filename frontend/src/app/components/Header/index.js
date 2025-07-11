"use client";

import React from "react";
import styles from "./index.module.css";
import { FaRegHeart } from "react-icons/fa";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Top Andrology Hospital in 
          Chennai for Male Reproductive 
          & Urological Concerns
        </h1>
        <p className={styles.subheading}>
          Proven safe and advanced treatments for male infertility, erectile
          dysfunction, and more.
        </p>
        <button className={styles.button}>
          Consult Our Top Andrologist Today
        </button>
      </div>

      <div className={styles.highlights}>
        <div className={styles.highlightItem}>
          <img src="/toWEBP/nabh-new.webp" alt="NABH Accredited" />
          <p>
            NABH <br /> Accredited Hospital
          </p>
        </div>
        <div className={styles.highlightItem}>
          <img src="/toWEBP/trusted-specialist.webp" alt="Trusted Specialists" />
          <p>
            Trusted <br /> Andrology Specialists
          </p>
        </div>
        <div className={styles.highlightItem}>
          <p className={styles.customIcon}>
            <span></span>
            <FaRegHeart />
          </p>
          <p>
            Personalized Care
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
