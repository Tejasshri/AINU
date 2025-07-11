"use client";

import React, { useContext, useState } from "react";
import styles from "./index.module.css";
import stylesAboutAndrology from "../AboutAndrology/index.module.css";
import NextContext from "@/app/context/NextContext";

const WhyAINU = () => {
  const { setIsPopup } = useContext(NextContext);
  return (
    <section
      className={`${stylesAboutAndrology.container} ${styles.container}`}>
      <div className={`${stylesAboutAndrology.textBox} ${styles.leftBox}`}>
        <h2 className={`${stylesAboutAndrology.heading} ${styles.heading}`}>
          What Makes AINU the Top Andrology Hospital in Chennai?
        </h2>
        <p
          className={`${stylesAboutAndrology.description} ${styles.description}`}>
          Whether it’s infertility, sexual dysfunction, or any male health
          issue; the expert team at AINU is here to help. Don’t wait. Book your
          consultation today at the leading andrology hospital in Chennai.
        </p>
        <div
          className={stylesAboutAndrology.cta}
          onClick={() => setIsPopup(true)}>
          <button>Schedule Your Appointment Today</button>
        </div>
      </div>

      <div className={styles.right}>
        <ul className={styles.list}>
          <li>
            <img className={styles.tickIcon} src="/tick.webp" alt="" />
            Top-rated andrology hospital in Chennai
          </li>
          <li>
            <img className={styles.tickIcon} src="/tick.webp" alt="" />
            Modern, minimally invasive procedures
          </li>
          <li>
            <img className={styles.tickIcon} src="/tick.webp" alt="" />
            Evidence-based treatment protocols
          </li>
          <li>
            <img className={styles.tickIcon} src="/tick.webp" alt="" />
            Advanced diagnostic labs and imaging
          </li>
          <li>
            <img className={styles.tickIcon} src="/tick.webp" alt="" />
            100% confidential consultations and treatments
          </li>
          <li>
            <img className={styles.tickIcon} src="/tick.webp" alt="" />
            Personalized care for each patient
          </li>
          <li>
            <img className={styles.tickIcon} src="/tick.webp" alt="" />
            Dedicated team of highly experienced andrology doctors and
            specialists
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhyAINU;
