import { Manrope } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Next Dev 🤗",
  description: "Portfolio website of Muhammad Huzaifa Yaqoob",
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
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
