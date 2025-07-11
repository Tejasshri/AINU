import React from "react";
import styles from "./index.module.css";

import stylesAboutAndrology from "../AboutAndrology/index.module.css";

const services = [
  {
    title: "Male Infertility",
    description:
      "When a man experiences difficulties in fathering a child due to low sperm count, poor sperm function, or other reproductive issues.",
    imageUrl: "/male-infertility.webp",
  },
  {
    title: "Erectile Dysfunction (ED)",
    description:
      "Difficulty in achieving or maintaining an erection firm enough for satisfactory sexual performance.",
    imageUrl: "/erectile-dysfunction.webp",
  },
  {
    title: "Early Ejaculation / Premature Ejaculation",
    description:
      "A condition where ejaculation occurs sooner than desired during sexual activity.",
    imageUrl: "/early-ejaculation.webp",
  },
  {
    title: "Penile Shockwave Therapy",
    description:
      "A non-invasive treatment using low-intensity sound waves to improve blood flow and treat erectile dysfunction.",
    imageUrl: "/penile-shockwave.webp",
  },
  {
    title: "Penile Prosthesis Surgery",
    description:
      "A surgical treatment for severe erectile dysfunction involving the placement of a penile implant.",
    imageUrl: "/penile-prosthesis.webp",
  },
  {
    title: "Stapler and Laser Circumcision",
    description:
      "Minimally invasive circumcision techniques using modern stapler or laser technology for faster healing and less discomfort.",
    imageUrl: "/circumcision.webp",
  },
  {
    title: "Retrograde Ejaculation",
    description:
      "A condition where semen enters the bladder instead of exiting through the urethra during ejaculation.",
    imageUrl: "/retrograde-ejaculation.webp",
  },
  {
    title: "Stem Cell Therapy",
    description:
      "An advanced treatment using regenerative stem cells to potentially restore sexual function and improve male fertility.",
    imageUrl: "/stem-cell.webp",
  },
  {
    title: "Penile Fractures",
    description:
      "A rare but serious injury where there is a tear in the penile tissue, usually caused by trauma during intercourse.",
    imageUrl: "/penile-fracture.webp",
  },
  {
    title: "Genital Injuries",
    description:
      "Injuries to the male genital organs that can affect sexual function, fertility, and overall health.",
    imageUrl: "/genital-injury.webp",
  },
  {
    title: "Premarital Fertility Check",
    description:
      "A comprehensive evaluation of male fertility to assess reproductive health prior to marriage.",
    imageUrl: "/fertility-check.webp",
  },
  {
    title: "Penile Girth Enhancement",
    description:
      "A procedure aimed at increasing the thickness (girth) of the penis through various medical techniques.",
    imageUrl: "/girth-enhancement.webp",
  },
  {
    title: "Testicular Implant Surgery",
    description:
      "A surgical procedure to place a prosthetic testicle for cosmetic or reconstructive reasons.",
    imageUrl: "/testicular-implant.webp",
  },
  {
    title: "Penile Length Enhancement Surgery",
    description:
      "A surgical technique designed to safely increase penile length.",
    imageUrl: "/length-enhancement.webp",
  },
  {
    title: "Delayed Ejaculation",
    description:
      "A sexual dysfunction where ejaculation is significantly delayed or requires considerable effort to achieve.",
    imageUrl: "/delayed-ejaculation.webp",
  },
  {
    title: "Anejaculation",
    description:
      "The inability to ejaculate despite sexual stimulation and orgasm.",
    imageUrl: "/anejaculation.webp",
  },
  {
    title: "Post Orgasmic Illness Syndrome (POIS)",
    description:
      "A rare condition where a man experiences flu-like symptoms, fatigue, and discomfort after ejaculation.",
    imageUrl: "/pois.webp",
  },
  {
    title: "Painful Ejaculation",
    description: "Discomfort or pain experienced during or after ejaculation.",
    imageUrl: "/painful-ejaculation.webp",
  },
  {
    title: "Penile Growth Factor Injections",
    description:
      "An innovative therapy that uses growth factors to promote tissue regeneration and improve sexual performance.",
    imageUrl: "/growth-factor-injection.webp",
  },
];

const ServicesSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>
        Expert Care for Male Urological & Reproductive Health
      </h2>
      <p className={styles.titleDescription}>
        At AINU, we offer specialized care for a full range of male urological
        and reproductive conditions, including:
      </p>
      <div className={styles.flexWrapper}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.icon}>
              <img src={service.imageUrl} alt={service.title} />
            </div>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.description}>{service.description}</p>
          </div>
        ))}
      </div>
      <h2 className={styles.headingSecond}>Struggling with Any of These</h2>
      <button className="common-btn">Get Treated Now</button>
    </section>
  );
};

export default ServicesSection;
