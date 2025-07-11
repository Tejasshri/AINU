'use client';

import { useState, useRef, useEffect } from "react";
import styles from "./index.module.css";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const faqs = [
  {
    question: "What is Andrology?",
    answer:
      "Andrology focuses on the diagnosis and treatment of male reproductive health and urological problems.",
  },
  {
    question: "When should I see an andrology doctor?",
    answer:
      "You should consult when experiencing symptoms like infertility, erectile dysfunction, or other male reproductive health issues.",
  },
  {
    question: "Are the treatments confidential?",
    answer:
      "Yes, all consultations and treatments are completely confidential and private.",
  },
  {
    question: "What is the consultation process?",
    answer:
      "You will have an initial assessment, followed by recommended tests and treatment plans by the specialist.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const answerRefs = useRef([]);

  const toggleFAQ = (index) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Frequently Asked Questions</h2>
        <div className={styles.faqBox}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button className={styles.question} onClick={() => toggleFAQ(index)}>
                <span>{index + 1}. {faq.question}</span>
                <span>{openIndex === index ? <FaAngleUp /> : <FaAngleDown />}</span>
              </button>

              {/* Smooth expand/collapse */}
              <div
                ref={(el) => (answerRefs.current[index] = el)}
                className={styles.answer}
                style={{
                  maxHeight:
                    openIndex === index
                      ? `${answerRefs.current[index]?.scrollHeight}px`
                      : "0px",
                  opacity: openIndex === index ? 1 : 0,
                  overflow: "hidden",
                  transition: "all 0.4s ease",
                }}
              >
                <div>{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottomBox}>
          <p className={styles.moreText}>Got More Questions?</p>
          <button className="common-btn">Speak to Our Experts Today</button>
        </div>
      </div>
    </div>
  );
}
