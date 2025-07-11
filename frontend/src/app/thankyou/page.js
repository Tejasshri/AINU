'use client' ;

import React from "react";
import styles from "./Thankyou.module.css";// Optional if using React Router
import { useRouter } from "next/navigation";

function ThankYou() {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>Thank You!</h1>
        <p className={styles.message}>
          Your request has been received. We’ll contact you shortly.
        </p>
        <button className={styles.button} onClick={() => router.push("/")}>
          Go Back Home
        </button>
      </div>
    </div>
  );
}

export default ThankYou;
