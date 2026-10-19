
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    category: "Floor Cleaners",
    image: "/fcprd.png",
    description:
      "Effective cleaning solutions designed to keep floors fresh, clean and hygienic.",
  },
  {
    category: "Toilet Cleaners",
    image: "/tcprd.png",
    description:
      "Reliable bathroom cleaning solutions for a cleaner and fresher environment.",
  },
  {
    category: "Glass Cleaners",
    image: "/gcprd.png",
    description:
      "Designed to leave glass surfaces clear, fresh and free from everyday marks.",
  },
  {
    category: "Kitchen Cleaners",
    image: "/dlprd.png",
    description:
      "Practical cleaning solutions designed for everyday kitchen hygiene.",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#07152F] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pb-24">
        <div className="pointer-events-none absolute top-16 left-1/2 -translate-x-1/2 w-[min(600px,100vw)] h-[300px] bg-[#2F36D9]/10 blur-3xl rounded-full" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 text-center">
          <div className="flex items-center justify-center gap-3 sm:gap-5">
            <div className="w-8 sm:w-14 h-px bg-gradient-to-r from-transparent to-[#2F36D9]" />

            <p className="font-honick text-[#DBEAFE] uppercase tracking-[0.2em] sm:tracking-[0.35em] text-sm sm:text-base font-semibold hygienic-text-glow">
              Our Products
            </p>

            <div className="w-8 sm:w-14 h-px bg-gradient-to-l from-transparent to-[#2F36D9]" />
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl text-white mt-6 sm:mt-7 leading-tight">
            Cleaning Solutions
          </h1>

          <div className="flex justify-center items-center gap-4 sm:gap-5 mt-5 sm:mt-6">
            <div className="w-12 sm:w-20 h-px bg-[#2F36D9]" />

            <span className="text-[#60A5FA] text-lg sm:text-xl hygienic-text-glow">
              ✦
            </span>

            <div className="w-12 sm:w-20 h-px bg-[#2F36D9]" />
          </div>

          <p className="font-body text-[#94A3B8] text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-5 sm:mt-7 leading-relaxed">
            Explore Hygienic cleaning solutions designed for everyday
            cleanliness, freshness and convenience.
          </p>
        </div>
      </section>

      {/* Products */}
      <section className="relative pb-16 sm:pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.category}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index % 2 === 0 ? 0 : 0.1,
                }}
                className="group relative min-w-0 overflow-hidden rounded-2xl sm:rounded-3xl border border-[#2F36D9]/30 bg-[#0F172A]/80 hover:border-[#2F36D9]/70 hover:shadow-[0_0_45px_rgba(47,54,217,0.18)] transition-all duration-500"
              >
                {/* Image Area */}
                <div className="relative h-56 sm:h-72 lg:h-80 flex items-center justify-center bg-[#0B1D3A] overflow-hidden">
                  <div className="pointer-events-none absolute w-40 h-40 sm:w-[250px] sm:h-[250px] rounded-full bg-[#2F36D9]/10 blur-3xl group-hover:bg-[#2F36D9]/20 transition-all duration-500" />

                  <Image
                    src={product.image}
                    alt={product.category}
                    width={280}
                    height={280}
                    sizes="(max-width: 639px) 200px, (max-width: 1023px) 240px, 280px"
                    className="relative z-10 object-contain max-h-[190px] sm:max-h-[240px] lg:max-h-[270px] w-auto max-w-[85%] group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-7 lg:p-8">
                  <div className="flex items-center justify-between">
                    <span className="font-body text-[#60A5FA] text-sm">
                      0{index + 1}
                    </span>

                    <span
                      aria-hidden="true"
                      className="text-[#60A5FA] text-xl group-hover:translate-x-1 transition-transform duration-300"
                    >
                      →
                    </span>
                  </div>

                  <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white mt-4 sm:mt-6 break-words">
                    {product.category}
                  </h2>

                  <p className="font-body text-[#C4D0E3] text-sm sm:text-base mt-3 sm:mt-4 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
