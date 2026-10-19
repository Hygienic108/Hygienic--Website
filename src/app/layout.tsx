import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/home/Footer";

const classicQuality = localFont({
  src: "../fonts/ClassicQuality.otf",
  variable: "--font-brand",
});

const honick = localFont({
  src: "../fonts/Honick.otf",
  variable: "--font-heading",
});

const gothamBook = localFont({
  src: "../fonts/GothamBook.ttf",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Hygienic",
  description: "Premium Home Cleaning Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${classicQuality.variable} ${honick.variable} ${gothamBook.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}