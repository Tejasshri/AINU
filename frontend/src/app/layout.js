// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Top Andrology Hospital in Chennai",
  description: "Top andrology hospital in Chennai for male reproduction & Urology Concerns",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
