"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Dish Wash Gel",
    tagline: "Sparkling Clean Dishes, Every Day",
    description:
      "Make everyday dishwashing easier with Hygienic Dish Wash Gel. Designed for your daily dish-cleaning routine, it helps remove food residue and grease from suitable washable utensils, leaving them clean and ready for use.",
    uses: [
      "For everyday dishwashing",
      "Helps remove food residue and grease",
      "Suitable for washing everyday utensils",
      "A practical addition to your daily kitchen-cleaning routine",
    ],
    sizes: ["500 ml", "1 L"],
    image: "/products/dish-wash-gel.png",
  },
];

export default function KitchenCleanersPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#07152F] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-20">
        <div className="pointer-events-none absolute left-1/2 top-16 h-[300px] w-[min(600px,100vw)] -translate-x-1/2 rounded-full bg-[#2F36D9]/10 blur-3xl" />

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
            Kitchen Cleaning Solutions
          </h1>

          <p className="font-body mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#94A3B8] sm:text-lg">
            Discover Hygienic Dish Wash Gel, designed to make everyday
            dishwashing simple and convenient. A practical solution for your
            daily kitchen-cleaning needs.
          </p>
        </div>
      </section>

      {/* Product Section */}
      <section className="relative px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="mx-auto max-w-6xl">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid items-center gap-10 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-blue-950/20 sm:p-8 md:grid-cols-2 md:gap-14 md:p-12"
            >
              {/* Product Image */}
              <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-[#2F36D9]/10 p-6 sm:p-10">
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[#2F36D9]/10 blur-2xl" />

                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={600}
                  priority
                  className="relative z-10 h-full w-full object-contain transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-col">
                <p className="font-honick text-xs font-semibold uppercase tracking-[0.25em] text-[#93C5FD] sm:text-sm">
                  Kitchen Cleaners
                </p>

                <h2 className="font-heading mt-4 text-3xl leading-tight sm:text-4xl md:text-5xl">
                  {product.name}
                </h2>

                <p className="mt-3 text-lg font-medium text-[#BFDBFE] sm:text-xl">
                  {product.tagline}
                </p>

                <p className="font-body mt-5 text-sm leading-7 text-[#94A3B8] sm:text-base">
                  {product.description}
                </p>

                {/* Uses */}
                <div className="mt-8">
                  <h3 className="font-heading text-xl font-semibold sm:text-2xl">
                    Product Highlights
                  </h3>

                  <ul className="mt-4 space-y-3">
                    {product.uses.map((use) => (
                      <li
                        key={use}
                        className="flex items-start gap-3 text-sm leading-6 text-[#CBD5E1] sm:text-base"
                      >
                        <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-xs text-[#93C5FD]">
                          ✓
                        </span>
                        <span>{use}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Available Sizes */}
                <div className="mt-8">
                  <h3 className="font-heading text-xl font-semibold sm:text-2xl">
                    Available Sizes
                  </h3>

                  <div className="mt-4 flex flex-wrap gap-3">
                    {product.sizes.map((size) => (
                      <span
                        key={size}
                        className="rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm font-medium text-[#DBEAFE]"
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Button */}
                <Link
                  href="/#contact"
                  className="mt-9 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#2F36D9] to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-500/25"
                >
                  Enquire About This Product
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}