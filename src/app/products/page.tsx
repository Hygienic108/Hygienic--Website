
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    category: "Floor Cleaners",
    image: "/floorcleaners.png",
    description:
      "Effective cleaning solutions designed to keep floors fresh, clean and hygienic.",
  },
  {
    category: "Toilet Cleaners",
    image: "/toiletcleanerss.png",
    description:
      "Reliable bathroom cleaning solutions for a cleaner and fresher environment.",
  },
  {
    category: "Floor Disinfectants",
    image: "/floordisinfectant.png",
    description:
      "Designed to leave glass surfaces clear, fresh and free from everyday marks.",
  },
  {
    category: "Kitchen Cleaners",
    image: "/dishwashliquid.png",
    description:
      "Practical cleaning solutions designed for everyday kitchen hygiene.",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#07152F] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-20 lg:pb-24">
        <div className="pointer-events-none absolute top-16 left-1/2 h-[300px] w-[min(600px,100vw)] -translate-x-1/2 rounded-full bg-[#2F36D9]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8">
          <div className="flex items-center justify-center gap-3 sm:gap-5">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-[#2F36D9] sm:w-14" />

            <p className="font-honick hygienic-text-glow text-sm font-semibold uppercase tracking-[0.2em] text-[#DBEAFE] sm:text-base sm:tracking-[0.35em]">
              Our Products
            </p>

            <div className="h-px w-8 bg-gradient-to-l from-transparent to-[#2F36D9] sm:w-14" />
          </div>

          <h1 className="font-heading mt-6 text-4xl leading-tight sm:mt-7 sm:text-5xl md:text-7xl">
            Cleaning Solutions
          </h1>

          <div className="mt-5 flex items-center justify-center gap-4 sm:mt-6 sm:gap-5">
            <div className="h-px w-12 bg-[#2F36D9] sm:w-20" />

            <span className="hygienic-text-glow text-lg text-[#60A5FA] sm:text-xl">
              ✦
            </span>

            <div className="h-px w-12 bg-[#2F36D9] sm:w-20" />
          </div>

          <p className="font-body mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#94A3B8] sm:mt-7 sm:text-lg md:text-xl">
            Explore Hygienic cleaning solutions designed for everyday
            cleanliness, freshness and convenience.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative pb-16 sm:pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-5 sm:gap-8 md:grid-cols-2">
            {products.map((product, index) => (
              
<Link
  key={product.category}
  href={
    product.category === "Floor Cleaners"
      ? "/products/floor-cleaners"
      : product.category === "Toilet Cleaners"
      ? "/products/toilet-cleaners"
      : product.category === "Floor Disinfectants"
      ? "/products/floor-disinfectants"
      : product.category === "Kitchen Cleaners"
      ? "/products/kitchen-cleaners"
      : "#"
  }
  className="block min-w-0"
  onClick={(e) => {
    if (
      product.category !== "Floor Cleaners" &&
      product.category !== "Toilet Cleaners" &&
      product.category !== "Floor Disinfectants" &&
      product.category !== "Kitchen Cleaners"
    ) {
      e.preventDefault();
    }
  }}
>

                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index % 2 === 0 ? 0 : 0.1,
                  }}
                  className="group relative min-w-0 overflow-hidden rounded-2xl border border-[#2F36D9]/30 bg-[#0F172A]/80 transition-all duration-500 hover:border-[#2F36D9]/70 hover:shadow-[0_0_45px_rgba(47,54,217,0.18)] sm:rounded-3xl"
                >
                  {/* Image Area */}
                  <div
                    className="relative flex h-64 items-center justify-center overflow-hidden bg-[#0B1D3A] sm:h-80 lg:h-96"
                  >
                    <div className="pointer-events-none absolute h-40 w-40 rounded-full bg-[#2F36D9]/10 blur-3xl transition-all duration-500 group-hover:bg-[#2F36D9]/20 sm:h-[250px] sm:w-[250px]" />

                    <Image
                      src={product.image}
                      alt={product.category}
                      width={450}
                      height={450}
                      sizes="(max-width: 639px) 300px, (max-width: 1023px) 360px, 450px"
                      
className={`relative z-10 w-auto max-w-[95%] object-contain transition-transform duration-500 ${
  product.category === "Floor Cleaners"
    ? "h-[230px] sm:h-[290px] lg:h-[340px] scale-110 group-hover:scale-[1.15]"
    : "h-[230px] sm:h-[290px] lg:h-[340px] scale-110 group-hover:scale-[1.15]"
}`}

                    />
                  </div>

                  {/* Product Content */}
                  <div className="p-5 sm:p-7 lg:p-8">
                    <div className="flex items-center justify-between">
                      <span className="font-body text-sm text-[#60A5FA]">
                        0{index + 1}
                      </span>

                      <span
                        aria-hidden="true"
                        className="text-xl text-[#60A5FA] transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </div>

                    <h2 className="font-heading mt-4 break-words text-2xl text-white sm:mt-6 sm:text-3xl lg:text-4xl">
                      {product.category}
                    </h2>

                    <p className="font-body mt-3 text-sm leading-relaxed text-[#C4D0E3] sm:mt-4 sm:text-base">
                      {product.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

