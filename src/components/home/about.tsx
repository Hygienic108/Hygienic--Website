
"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full min-w-0 py-16 sm:py-20 lg:py-28 bg-[#07152F] overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl min-w-0 px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-w-0">

          {/* LEFT CONTENT */}
          <div className="w-full min-w-0">
            {/* Section Label */}
            <div className="flex items-center gap-3 sm:gap-5">
              <div className="w-8 sm:w-14 shrink-0 h-px bg-gradient-to-r from-transparent to-[#2F36D9]" />

              <p className="font-honick text-[#DBEAFE] uppercase tracking-[0.2em] sm:tracking-[0.35em] text-sm sm:text-base font-semibold hygienic-text-glow whitespace-nowrap">
                About Us
              </p>

              <div className="w-8 sm:w-14 shrink-0 h-px bg-gradient-to-l from-transparent to-[#2F36D9]" />
            </div>

            {/* Main Heading */}
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl text-white mt-7 leading-tight break-words">
              Cleanliness
              <br />
              You Can Trust.
            </h2>

            {/* Decorative Line */}
            <div className="flex items-center gap-4 mt-6">
              <div className="w-16 h-px bg-[#2F36D9]" />
              <span className="text-[#60A5FA] text-lg hygienic-text-glow">
                ✦
              </span>
              <div className="w-10 h-px bg-[#2F36D9]/50" />
            </div>

            {/* Description */}
            <p className="font-body w-full max-w-xl text-[#94A3B8] text-base sm:text-lg mt-7 leading-relaxed break-words">
              Hygienic is committed to providing reliable cleaning solutions
              designed for modern homes, businesses and everyday spaces.
            </p>

            <p className="font-body w-full max-w-xl text-[#94A3B8] text-base sm:text-lg mt-5 leading-relaxed break-words">
              Our solutions are thoughtfully created to bring effective
              cleaning, lasting freshness and everyday convenience to every
              space.
            </p>

            {/* Button */}
            <button className="mt-8 sm:mt-9 px-5 sm:px-7 py-3.5 border border-[#2F36D9] rounded-xl text-sm sm:text-base text-[#DBEAFE] font-body hover:bg-[#2F36D9]/10 hover:shadow-[0_0_30px_rgba(47,54,217,0.35)] transition-all duration-300">
              Discover Hygienic
              <span className="ml-3 sm:ml-4">→</span>
            </button>
          </div>

          {/* RIGHT EXPERIENCE */}
          <div className="flex justify-center w-full min-w-0 mt-4 lg:mt-0">
            <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center">

              {/* Outer Glow */}
              <div className="absolute inset-0 rounded-full bg-[#2F36D9]/5 blur-3xl" />

              {/* Outer Circle */}
              <div className="absolute inset-0 rounded-full border border-[#2F36D9]/20" />

              {/* Middle Circle */}
              <div className="absolute inset-[8%] rounded-full border border-[#2F36D9]/30" />

              {/* Inner Circle */}
              <div className="absolute inset-[17%] rounded-full border-2 border-[#60A5FA] hygienic-glow" />

              {/* Center - keeps its gentle floating animation */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-[70%] aspect-square rounded-full flex flex-col items-center justify-center bg-[#0F172A] shadow-[0_0_60px_rgba(47,54,217,0.25)]"
              >
                <span className="font-heading text-5xl sm:text-7xl font-bold text-white">
                  5+
                </span>

                <span className="font-honick text-[#DBEAFE] uppercase tracking-[0.12em] sm:tracking-[0.2em] text-xs sm:text-base text-center leading-relaxed mt-2">
                  Years of
                  <br />
                  Trusted
                  <br />
                  Expertise
                </span>
              </motion.div>

              {/* Sparkles */}
              <motion.span
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 right-[5%] text-[#60A5FA] text-2xl sm:text-3xl hygienic-text-glow"
              >
                ✦
              </motion.span>

              <motion.span
                animate={{
                  y: [0, 8, 0],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[5%] left-0 text-[#60A5FA] text-2xl sm:text-3xl hygienic-text-glow"
              >
                ✦
              </motion.span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
