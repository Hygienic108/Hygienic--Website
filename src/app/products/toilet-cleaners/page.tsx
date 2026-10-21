"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "Toilet Cleaner",
    tagline: "Powerful Cleaning for a Fresher Bathroom",
    description:
      "Keep your toilet clean, fresh, and hygienic with Hygienic Toilet Cleaner. Designed for regular toilet cleaning, it helps remove everyday dirt, stains, and buildup, leaving your toilet looking clean and your bathroom feeling refreshed.",
    uses: [
      "For regular toilet bowl cleaning",
      "Helps remove everyday dirt and stains",
      "Supports a clean and fresh-smelling bathroom",
      "Suitable for routine bathroom hygiene when used as directed",
    ],
    sizes: ["500 ml", "1 L"],
    image: "/products/toilet-cleaner.png",
  },
];

export default function ToiletCleanersPage() {
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
            Toilet Cleaning Solutions
          </h1>

          <p className="font-body mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#94A3B8] sm:text-lg">
            A cleaner toilet, a fresher bathroom, and everyday hygiene made
            simple with Hygienic Toilet Cleaner.
          </p>
        </div>
      </section>

      {/* Product Section */}
      <section className="relative pb-20 sm:pb-28">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          {products.map((product, index) => (
            <motion.article
              key={product.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5 }}
              className="group overflow-hidden rounded-2xl border border-[#2F36D9]/30 bg-[#0F172A]/80 transition-all duration-500 hover:border-[#2F36D9]/70 hover:shadow-[0_0_35px_rgba(47,54,217,0.18)] sm:rounded-3xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Product Image */}
                <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-[#0B1D3A] sm:min-h-[400px]">
                  <div className="pointer-events-none absolute h-56 w-56 rounded-full bg-[#2F36D9]/10 blur-3xl transition-all duration-500 group-hover:bg-[#2F36D9]/20" />

                  <Image
                    src={product.image}
                    alt="Hygienic Toilet Cleaner bottle"
                    width={400}
                    height={500}
                    sizes="(max-width: 767px) 85vw, 400px"
                    className="relative z-10 h-[300px] w-auto max-w-[85%] object-contain p-5 transition-transform duration-500 group-hover:scale-105 sm:h-[380px]"
                  />
                </div>

                {/* Product Details */}
                <div className="flex flex-col justify-center p-6 sm:p-9 md:p-10">
                  <p className="font-body text-sm font-medium uppercase tracking-wider text-[#60A5FA]">
                    0{index + 1} / TOILET CLEANERS
                  </p>

                  <h2 className="font-heading mt-4 text-3xl text-white sm:text-4xl">
                    {product.name}
                  </h2>

                  <p className="font-body mt-3 text-base font-medium leading-relaxed text-[#93C5FD]">
                    {product.tagline}
                  </p>

                  <p className="font-body mt-5 text-sm leading-7 text-[#C4D0E3] sm:text-base">
                    {product.description}
                  </p>

                  {/* Uses & Benefits */}
                  <div className="mt-7 border-t border-[#2F36D9]/20 pt-6">
                    <h3 className="font-heading text-xl text-white">
                      Why Choose Hygienic?
                    </h3>

                    <ul className="mt-4 space-y-3">
                      {product.uses.map((use) => (
                        <li
                          key={use}
                          className="flex items-start gap-3 font-body text-sm leading-relaxed text-[#C4D0E3] sm:text-base"
                        >
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2F36D9]/20 text-sm text-[#93C5FD]">
                            ✓
                          </span>
                          <span>{use}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Available Sizes */}
                  <div className="mt-7 border-t border-[#2F36D9]/20 pt-6">
                    <p className="font-body text-sm font-medium text-[#93C5FD]">
                      Available Sizes
                    </p>

                    <div className="mt-3 flex flex-wrap gap-3">
                      {product.sizes.map((size) => (
                        <span
                          key={size}
                          className="rounded-full border border-[#2F36D9]/40 bg-[#2F36D9]/10 px-5 py-2 font-body text-sm text-white transition-colors hover:bg-[#2F36D9]/25"
                        >
                          {size}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="font-body mt-6 text-xs leading-relaxed text-[#94A3B8]">
                    For best results, follow the instructions on the product
                    label. Do not mix with other cleaning products.
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}