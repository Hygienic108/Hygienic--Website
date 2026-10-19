"use client";

import { useEffect, useState } from "react";

import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import IntroAnimation from "../components/home/IntroAnimation";
import ProductCategories from "../components/home/ProductCategories";
import About from "../components/home/about";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CTA from "../components/home/CTA";
import Footer from "../components/home/Footer";
export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
  {showIntro ? (
    <IntroAnimation />
  ) : (
    <main>
  <Navbar />
  <Hero />
  <ProductCategories />
  <About />
  <WhyChooseUs />
  <CTA/>
  <Footer/>
</main>
  )}
</>
  );
}