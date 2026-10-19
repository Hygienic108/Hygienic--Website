
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
      image: "/products/fcprd.png",
      title: "Floor Cleaner",
      subtitle: "Advanced Floor Care",
    },
    {
      image: "/logo.png",
      title: "Toilet Cleaner",
      subtitle: "Powerful Bathroom Cleaning",
    },
    {
      image: "/products/gcprd.png",
      title: "Glass Cleaner",
      subtitle: "Crystal Clear Shine",
    },
    {
      image: "/products/dlprd.png",
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
    <div className="relative w-full aspect-square max-w-[550px] rounded-full bg-[#DBEAFE]/10 border border-[#1E3A8A]/30 backdrop-blur-sm shadow-[0_0_60px_rgba(47,54,217,0.25)] flex items-center justify-center overflow-hidden">

      {/* Previous Button */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Previous product"
        className="absolute left-2 sm:left-4 lg:left-6 z-10 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md hover:bg-white/20 transition"
      >
        ◀
      </button>

      {/* Next Button */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Next product"
        className="absolute right-2 sm:right-4 lg:right-6 z-10 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full bg-white/10 border border-white/20 text-white backdrop-blur-md hover:bg-white/20 transition"
      >
        ▶
      </button>

      {/* Slide Content */}
      <div className="w-full min-w-0 px-12 sm:px-16 lg:px-20 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.4 }}
            className="w-full min-w-0 flex flex-col items-center text-center"
          >
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 lg:w-52 lg:h-52">
              <Image
                src={slides[current].image}
                alt={slides[current].title}
                fill
                sizes="(max-width: 640px) 112px, (max-width: 1024px) 144px, 208px"
                className="object-contain"
                priority={current === 0}
              />
            </div>

            <h2
              className={`${
                current === 0
                  ? "font-brand text-3xl sm:text-4xl lg:text-5xl"
                  : "font-heading text-2xl sm:text-3xl lg:text-5xl tracking-wide"
              } text-white mt-4 sm:mt-6 max-w-full break-words`}
            >
              {slides[current].title}
            </h2>

            <p className="font-body text-sm sm:text-base text-[#94A3B8] mt-2 max-w-full break-words">
              {slides[current].subtitle}
            </p>

            {current !== 0 && (
              <div className="mt-3">
                <span className="font-body text-sm text-[#DBEAFE]">
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
