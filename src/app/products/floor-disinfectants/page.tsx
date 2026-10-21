"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


const products = [
  {
    name: "White Phenyl",
    tagline: "Everyday Cleaning, Made Simple",
    description:
      "A practical floor-cleaning solution for everyday use. White Phenyl helps remove everyday dirt and grime from suitable floor surfaces, making it a convenient choice for regular cleaning at home and in the workplace.",
    image: "/products/phenyl-1.png",
  },
  {
    name: "Lavender Phenyl",
    tagline: "A Touch of Lavender Freshness",
    description:
      "Bring a fresh touch to your cleaning routine with Lavender Phenyl. Designed for regular floor cleaning, this variant combines everyday cleaning convenience with a lavender-inspired fragrance.",
    image: "/products/phenyl-2.png",
  },
  {
    name: "Rose Phenyl",
    tagline: "Cleaning with a Floral Touch",
    description:
      "Make everyday cleaning feel more refreshing with Rose Phenyl. This rose-inspired variant is designed for routine floor care in homes and other suitable spaces.",
    image: "/products/phenyl-3.png",
  },
  {
    name: "Sandal Phenyl",
    tagline: "A Classic Fragrance for Everyday Cleaning",
    description:
      "Add a classic sandal-inspired touch to your cleaning routine. Sandal Phenyl is a practical option for regular floor maintenance in homes, offices, and other suitable environments.",
    image: "/products/phenyl-4.png",
  },
  {
    name: "Lavender Green Phenyl",
    tagline: "A Distinctive Take on Everyday Cleaning",
    description:
      "Keep your regular cleaning routine simple with Lavender Green Phenyl. This distinctive variant is designed for everyday floor care, helping remove dirt and grime from suitable floor surfaces.",
    image: "/products/phenyl-5.png",
  },
];

export default function FloorDisinfectantsPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#07152F] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-20">
        <div className="pointer-events-none absolute top-16 left-1/2 h-[300px] w-[min(600px,100vw)] -translate-x-1/2 rounded-full bg-[#2F36D9]/10 blur-3xl" />

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
            Floor Disinfectants
          </h1>

          <p className="font-body mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#94A3B8] sm:text-lg">
            Discover our range of phenyl floor-cleaning solutions, designed
            for everyday cleaning and care across suitable floor surfaces.
            Available in convenient sizes for your cleaning needs.
          </p>
        </div>
      </section>

      {/* Product Cards */}
      <section className="relative pb-20 sm:pb-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 sm:grid-cols-2 sm:gap-7 sm:px-8 lg:grid-cols-3 lg:gap-8">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.5,
                delay: (index % 3) * 0.1,
              }}
              className="group min-w-0 overflow-hidden rounded-2xl border border-[#2F36D9]/30 bg-[#0F172A]/80 transition-all duration-500 hover:border-[#2F36D9]/70 hover:shadow-[0_0_35px_rgba(47,54,217,0.18)] sm:rounded-3xl"
            >
              {/* Square Product Image */}
              <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-[#0B1D3A] p-5 sm:p-7">
                <div className="pointer-events-none absolute h-48 w-48 rounded-full bg-[#2F36D9]/10 blur-3xl transition-all duration-500 group-hover:bg-[#2F36D9]/20 sm:h-56 sm:w-56" />

                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  sizes="(max-width: 639px) 85vw, (max-width: 1023px) 40vw, 350px"
                  className="relative z-10 h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Product Details */}
              <div className="p-5 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-body text-sm text-[#60A5FA]">
                    {String(index + 1).padStart(2, "0")} / 05
                  </p>

                  <span
                    aria-hidden="true"
                    className="text-xl text-[#60A5FA] transition-transform duration-300 group-hover:translate-x-1"
                  >
                    ✦
                  </span>
                </div>

                <h2 className="font-heading mt-4 text-2xl leading-snug text-white sm:text-3xl">
                  {product.name}
                </h2>

                <p className="font-body mt-3 text-sm font-medium leading-relaxed text-[#93C5FD]">
                  {product.tagline}
                </p>

                <p className="font-body mt-4 text-sm leading-7 text-[#C4D0E3]">
                  {product.description}
                </p>

                {/* Product Uses */}
                <div className="mt-6 border-t border-[#2F36D9]/20 pt-5">
                  <h3 className="font-body text-sm font-medium text-[#93C5FD]">
                    Ideal For
                  </h3>

                  <ul className="mt-3 space-y-2">
                    {[
                      "Routine floor cleaning",
                      "Home and workplace maintenance",
                      "Everyday cleaning and freshness",
                    ].map((use) => (
                      <li
                        key={use}
                        className="flex items-start gap-2 font-body text-sm leading-relaxed text-[#C4D0E3]"
                      >
                        <span className="text-[#60A5FA]">✓</span>
                        <span>{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Available Sizes */}
                <div className="mt-6 border-t border-[#2F36D9]/20 pt-5">
                  <p className="font-body text-sm font-medium text-[#93C5FD]">
                    Available Sizes
                  </p>

                  <div className="mt-3 flex flex-wrap gap-3">
                    {["500 ml", "1 L"].map((size) => (
                      <span
                        key={size}
                        className="rounded-full border border-[#2F36D9]/40 bg-[#2F36D9]/10 px-4 py-2 font-body text-sm text-white transition-colors hover:bg-[#2F36D9]/25"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="font-body mt-5 text-xs leading-relaxed text-[#94A3B8]">
                  Use according to the product label. Do not mix with other
                  cleaning products.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
