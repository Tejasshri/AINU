"use client";
import React, { useState } from "react";
import styles from "./index.module.css";
import useFormSubmit from "@/app/hooks/useFormSubmit";
import webUrl from "@/app/config/url";
import { ClipLoader } from "react-spinners";

const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    message: "",
  });

  const { submitForm, loading, error, response } = useFormSubmit(
    `${webUrl}/api/form-submit`
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitForm(formData);
    if (!error) {
      // Optionally reset
      setFormData({ name: "", phone: "", date: "", message: "" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <section className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={styles.formBox}>
          <h2>Book a Consultation with Our Specialist</h2>
          <form>
            <div className={styles.formFields}>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Mobile Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                type="date"
                name="date"
                placeholder="Appointment Date"
                value={formData.date}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <p className={styles.privacyNote}>
              *Your information is 100% private and confidential. We respect
              your privacy.
            </p>
            {loading ? (
              <ClipLoader size={20} />
            ) : (
              <button onClick={handleSubmit} disabled={loading} type="submit">
                Book an Appointment
              </button>
            )}
          </form>
        </div>
        <div className={styles.imageBox}>
          <img src="/Doctor.webp" alt="Specialist" />
        </div>
      </div>
    </section>
  );
};

export default ConsultationForm;
