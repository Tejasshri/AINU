"use client";
import React from "react";
import styles from "./index.module.css";

const ConsultationForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.formBox}>
          <h2>Book a Consultation with Our Specialist</h2>
          <form>
            <div className={styles.formFields}>
              <input type="text" placeholder="Full Name" />
              <input type="tel" placeholder="Mobile Number" />
              <input type="date" placeholder="Appointment Date" />
              <input type="text" placeholder="Message" />
            </div>

            <p className={styles.privacyNote}>
              *Your information is 100% private and confidential. We respect
              your privacy.
            </p>
            <button type="submit">Book an Appointment</button>
          </form>
        </div>
        <div className={styles.imageBox}>
          <img src="/doctor.webp" alt="Specialist" />
        </div>{" "}
      </div>
    </section>
  );
};

export default ConsultationForm;
