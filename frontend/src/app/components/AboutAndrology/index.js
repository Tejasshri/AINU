import React, { useContext } from "react";
import styles from "./index.module.css";
import NextContext from "@/app/context/NextContext";

const AboutAndrology = (props) => {
  const { details } = props;
  const { title, des1, des2, title2, btnText, imgUrl, top } = details;
  const { setIsPopup } = useContext(NextContext);
  return (
    <section className={styles.container}>
      <div className={styles.textBox}>
        <h2 className={styles.heading}>{title}</h2>
        <p className={styles.description}>{des1}</p>
        <p className={styles.description}>{des2}</p>
        <div className={styles.cta}>
          <p>{title2}</p>
          <button onClick={() => setIsPopup(true)}>{btnText}</button>
        </div>
      </div>
      <div className={styles.imageBox}>
        <img style={{ top: top }} src={imgUrl} alt="Family" />
      </div>
    </section>
  );
};

export default AboutAndrology;
