import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Motion from "./Motion";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Genshin Impact",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
            <Navbar />
              <Motion>{children}</Motion>
            <Footer />
      </body>
    </html>
  );
}
