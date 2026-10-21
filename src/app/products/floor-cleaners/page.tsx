
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Bathroom Acid Cleaner",
    description:
      "A bathroom cleaning solution designed to help remove dirt, tough stains, and buildup from suitable bathroom surfaces. Use as directed to keep your bathroom clean and fresh.",
    sizes: ["500 ml", "1 L"],
    image: "/products/acid-bottle.png",
  },
  {
    name: "Floor Cleaner",
    description:
      "An effective everyday floor-cleaning solution that helps remove dirt and grime from suitable floor surfaces, leaving your home or workspace looking clean and fresh.",
    sizes: ["500 ml", "1 L"],
    image: "/products/floor-cleaner.png",
  },
];

export default function FloorCleanersPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#07152F] text-white">
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-20">
        <div className="pointer-events-none absolute top-16 left-1/2 -translate-x-1/2 h-[300px] w-[min(600px,100vw)] rounded-full bg-[#2F36D9]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-8">
          <Link
            href="/products"
            className="inline-block font-body text-sm text-[#93C5FD] transition-colors hover:text-white"
          >
            ← Back to Products
          </Link>

          <p className="font-honick mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-[#DBEAFE] sm:text-base sm:tracking-[0.35em]">
            Our Products
          </p>

          <h1 className="font-heading mt-5 text-4xl leading-tight sm:text-5xl md:text-7xl">
            Floor Cleaning Solutions
          </h1>

          <p className="font-body mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#94A3B8] sm:text-lg">
            Explore our bathroom and floor cleaning products, available in
            convenient sizes for your everyday cleaning needs.
          </p>
        </div>
      </section>

      {/* Product Cards */}
      <section className="relative pb-20 sm:pb-28">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-5 sm:px-8 md:grid-cols-2 sm:gap-8">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden rounded-2xl border border-[#2F36D9]/30 bg-[#0F172A]/80 transition-all duration-500 hover:border-[#2F36D9]/70 hover:shadow-[0_0_35px_rgba(47,54,217,0.18)] sm:rounded-3xl"
            >
              {/* Image */}
              <div className="relative flex h-64 items-center justify-center overflow-hidden bg-[#0B1D3A] sm:h-80">
                <div className="pointer-events-none absolute h-48 w-48 rounded-full bg-[#2F36D9]/10 blur-3xl transition-all duration-500 group-hover:bg-[#2F36D9]/20" />

                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  sizes="(max-width: 767px) 80vw, 300px"
                  className="relative z-10 h-full w-auto max-w-[85%] object-contain p-5 transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Details */}
              <div className="p-6 sm:p-8">
                <p className="font-body text-sm text-[#60A5FA]">
                  0{index + 1} / FLOOR CLEANERS
                </p>

                <h2 className="font-heading mt-4 text-2xl text-white sm:text-3xl">
                  {product.name}
                </h2>

                <p className="font-body mt-4 text-sm leading-relaxed text-[#C4D0E3] sm:text-base">
                  {product.description}
                </p>

                <div className="mt-6 border-t border-[#2F36D9]/20 pt-5">
                  <p className="font-body text-sm font-medium text-[#93C5FD]">
                    Available Sizes
                  </p>

                  <div className="mt-3 flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <span
                        key={size}
                        className="rounded-full border border-[#2F36D9]/40 bg-[#2F36D9]/10 px-4 py-2 font-body text-sm text-white"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
