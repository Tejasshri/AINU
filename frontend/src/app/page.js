import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ConsultationForm from "./components/ConsultationForm";
import AboutAndrology from "./components/AboutAndrology";
import WhyAINU from "./components/WhyAINU";
import ServicesSection from "./components/ServicesSection";
import MeetTheBestAndrology from "./components/MeetTheBestAndrology";
import FAQ from "./components/FAQ";

const data = [
  {
    title: "What is Andrology?",
    des1: ` Andrology is the branch of medicine that deals with male reproductive health,
          sexual function, and urological conditions unique to men. It covers everything
          from fertility issues and hormone imbalances to sexual dysfunction and
          age-related changes.`,
    des2: ` At AINU, patients benefit from advanced medical expertise and compassionate care,
          making us one of the most trusted choices for anyone seeking an andrology hospital
          in Chennai.`,
    title2: "Still Have Questions?",
    btnText: "Talk to an Expert Today",
    imgUrl: "/family.webp",
  },
  {
    title: "Meet the Best Andrology Specialist in Chennai",
    des1: `We’re recognised for having Chennai’s best andrology doctors, a whole team of highly
qualified and experienced specialists with proven track records of successful treatments.`,
    des2: `Whether it is sexual health, male fertility, or complex urological issues; you are in the best
hands at AINU.`,
    title2: "Meet Your Specialist",
    btnText: "Reserve a Spot",
    top: 0,
    imgUrl: "/Doctor.webp", // You can update the path or filename based on your actual asset
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.content}>
        <Header />
        <ConsultationForm />
        <AboutAndrology details={data[0]} />
        <WhyAINU />
        <ServicesSection />
        <MeetTheBestAndrology details={data[1]} />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}
