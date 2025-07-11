import React, { useContext, useState } from "react";
import styles from "./index.module.css";
import Popup from "reactjs-popup";
import NextContext from "@/app/context/NextContext";
import useFormSubmit from "@/app/hooks/useFormSubmit";
import webUrl from "@/app/config/url";
import { ClipLoader } from "react-spinners";

function PopupBox() {
  const { isPopup, setIsPopup } = useContext(NextContext);

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
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
      setIsPopup(false);
      setFormData({ name: "", mobile: "", date: "", message: "" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Popup
      modal
      open={isPopup}
      className={styles.popupContainer}
      overlayStyle={{ background: "rgba(0, 0, 0, 0.6)" }}
      onClose={() => setIsPopup(false)}>
      {
        <form className={styles.form} onSubmit={handleSubmit}>
          {loading ? (
            <ClipLoader />
          ) : (
            <>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={() => setIsPopup(false)}>
                ×
              </button>
              <h2 className={styles.heading}>
                To Book An Appointment Fill the form
              </h2>
              <div className={styles.fields}>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Name*"
                  required
                />
                <input
                  type="text"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Mobile No.*"
                  required
                />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className={styles.input}
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  placeholder="Message"
                />
                <button
                  disabled={loading}
                  type="submit"
                  className={styles.submitButton}>
                  Request a Callback
                </button>
              </div>
            </>
          )}
        </form>
      }
    </Popup>
  );
}

export default PopupBox;
