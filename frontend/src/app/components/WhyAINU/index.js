'use client';


import React, { useState } from "react";
import styles from "./index.module.css";
import stylesAboutAndrology from "../AboutAndrology/index.module.css";

const andrologyServices = [
  {
    title: "Male Infertility",
    description:
      "When a man experiences difficulties in fathering a child due to low sperm count, poor sperm function, or other reproductive issues.",
    imageUrl: "/icons/male-infertility.svg",
  },
  {
    title: "Erectile Dysfunction (ED)",
    description:
      "Difficulty in achieving or maintaining an erection firm enough for satisfactory sexual performance.",
    imageUrl: "/icons/erectile-dysfunction.svg",
  },
  {
    title: "Early Ejaculation / Premature Ejaculation",
    description:
      "A condition where ejaculation occurs sooner than desired during sexual activity.",
    imageUrl: "/icons/early-ejaculation.svg",
  },
  {
    title: "Penile Shockwave Therapy",
    description:
      "A non-invasive treatment using low-intensity sound waves to improve blood flow and treat erectile dysfunction.",
    imageUrl: "/icons/penile-shockwave.svg",
  },
  {
    title: "Penile Prosthesis Surgery",
    description:
      "A surgical treatment for severe erectile dysfunction involving the placement of a penile implant.",
    imageUrl: "/icons/penile-prosthesis.svg",
  },
  {
    title: "Stapler and Laser Circumcision",
    description:
      "Minimally invasive circumcision techniques using modern stapler or laser technology for faster healing and less discomfort.",
    imageUrl: "/icons/circumcision.svg",
  },
  {
    title: "Retrograde Ejaculation",
    description:
      "A condition where semen enters the bladder instead of exiting through the urethra during ejaculation.",
    imageUrl: "/icons/retrograde-ejaculation.svg",
  },
  {
    title: "Stem Cell Therapy",
    description:
      "An advanced treatment using regenerative stem cells to potentially restore sexual function and improve male fertility.",
    imageUrl: "/icons/stem-cell.svg",
  },
  {
    title: "Penile Fractures",
    description:
      "A rare but serious injury where there is a tear in the penile tissue, usually caused by trauma during intercourse.",
    imageUrl: "/icons/penile-fracture.svg",
  },
  {
    title: "Genital Injuries",
    description:
      "Injuries to the male genital organs that can affect sexual function, fertility, and overall health.",
    imageUrl: "/icons/genital-injury.svg",
  },
  {
    title: "Premarital Fertility Check",
    description:
      "A comprehensive evaluation of male fertility to assess reproductive health prior to marriage.",
    imageUrl: "/icons/fertility-check.svg",
  },
  {
    title: "Penile Girth Enhancement",
    description:
      "A procedure aimed at increasing the thickness (girth) of the penis through various medical techniques.",
    imageUrl: "/icons/girth-enhancement.svg",
  },
  {
    title: "Testicular Implant Surgery",
    description:
      "A surgical procedure to place a prosthetic testicle for cosmetic or reconstructive reasons.",
    imageUrl: "/icons/testicular-implant.svg",
  },
  {
    title: "Penile Length Enhancement Surgery",
    description:
      "A surgical technique designed to safely increase penile length.",
    imageUrl: "/icons/length-enhancement.svg",
  },
  {
    title: "Delayed Ejaculation",
    description:
      "A sexual dysfunction where ejaculation is significantly delayed and requires considerable effort to achieve.",
    imageUrl: "/icons/delayed-ejaculation.svg",
  },
  {
    title: "Anejaculation",
    description:
      "The inability to ejaculate despite sexual stimulation and orgasm.",
    imageUrl: "/icons/anejaculation.svg",
  },
  {
    title: "Post Orgasmic Illness Syndrome (POIS)",
    description:
      "A rare condition where a man experiences flu-like symptoms, fatigue, and discomfort after ejaculation.",
    imageUrl: "/icons/pois.svg",
  },
  {
    title: "Painful Ejaculation",
    description: "Discomfort or pain experienced during or after ejaculation.",
    imageUrl: "/icons/painful-ejaculation.svg",
  },
  {
    title: "Penile Growth Factor Injections",
    description:
      "An innovative therapy that uses growth factors to promote tissue regeneration and improve sexual performance.",
    imageUrl: "/icons/growth-factor-injection.svg",
  },
];

const WhyAINU = () => {
  const [card, setCard] = useState(andrologyServices);
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
        <div className={stylesAboutAndrology.cta}>
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
