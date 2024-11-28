import { Manrope } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Next Dev 🤗",
  description:
    "Welcome to the portfolio of Muhammad Huzaifa Yaqoob — a dedicated MERN Stack developer crafting modern, scalable, and user-friendly web solutions",
  keywords:
    "Muhammad Huzaifa Yaqoob, MERN Stack Developer, Portfolio, Next.js Developer, Web Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} flex items-center justify-center`}>
        <div className="min-h-screen max-w-screen-2xl w-full flex flex-col justify-between">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
