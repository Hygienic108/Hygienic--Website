
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProductSlider() {
  const slides = [
    {
      image: "/logo.png",
      title: "Hygienic",
      subtitle: "Premium Cleaning Solutions",
    },
    {
      image: "/products/fccprd.png",
      title: "Floor Cleaner",
      subtitle: "Advanced Floor Care",
    },
    {
      image: "/products/tccprd.png",
      title: "Toilet Cleaner",
      subtitle: "Powerful Bathroom Cleaning",
    },
    {
      image: "/products/gccprd.png",
      title: "Floor Disinfectants",
      subtitle: "Crystal Clear Shine",
    },
    {
      image: "/products/dsprd.png",
      title: "Dish Wash Liquid",
      subtitle: "Tough on Grease",
    },
  ];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative aspect-square w-full max-w-[550px] overflow-hidden rounded-full border border-[#1E3A8A]/40 shadow-[0_0_60px_rgba(47,54,217,0.25)]">

      {/* Full-Circle Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            sizes="(max-width: 640px) 100vw, 550px"
            className={
              current === 0
                ? "object-contain p-16 sm:p-20 lg:p-24"
                : "object-cover"
            }
            priority={current === 0}
          />

          {/* Dark Gradient for Text Readability */}
          
<div
  className={`absolute inset-0 ${
    current === 0
      ? "bg-gradient-to-b from-[#07152F]/10 via-[#07152F]/20 to-[#07152F]/95"
      : "bg-gradient-to-b from-[#07152F]/5 via-[#07152F]/20 via-55% to-[#07152F]/95"
  }`}
/>
        </motion.div>
      </AnimatePresence>

      {/* Previous Button */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous product"
        className="absolute left-2 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#07152F]/50 text-white backdrop-blur-md transition hover:bg-white/20 sm:left-4 sm:h-11 sm:w-11 lg:left-6 lg:h-12 lg:w-12"
      >
        ◀
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next product"
        className="absolute right-2 top-1/2 z-30 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#07152F]/50 text-white backdrop-blur-md transition hover:bg-white/20 sm:right-4 sm:h-11 sm:w-11 lg:right-6 lg:h-12 lg:w-12"
      >
        ▶
      </button>

      
{/* Product Information */}
<div
  className={`absolute inset-x-0 bottom-0 z-20 flex flex-col items-center px-12 text-center sm:px-14 ${
    current === 0
      ? "pb-12 sm:pb-14 lg:pb-16"
      : "pb-10 sm:pb-12 lg:pb-14"
  }`}
>
  <AnimatePresence mode="wait">
    <motion.div
      key={current}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.4 }}
      className="w-full min-w-0"
    >
      <h2
        className={`${
          current === 0
            ? "font-brand text-3xl sm:text-4xl lg:text-5xl"
            : "font-heading text-2xl font-semibold tracking-wide sm:text-3xl lg:text-5xl"
        } break-words text-white ${
          current === 0
            ? ""
            : "[text-shadow:0_2px_12px_rgba(0,0,0,0.9)]"
        }`}
      >
        {slides[current].title}
      </h2>

      <p
        className={`font-body mt-2 break-words text-sm sm:text-base ${
          current === 0
            ? "text-white"
            : "font-medium text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.95)]"
        }`}
      >
        {slides[current].subtitle}
      </p>

      {current !== 0 && (
        <div className="mt-3">
          <span className="font-body text-sm font-semibold text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.95)]">
            Learn More →
          </span>
        </div>
      )}
    </motion.div>
  </AnimatePresence>

      </div>
    </div>
  );
}
