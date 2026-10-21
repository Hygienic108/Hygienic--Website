
"use client";

import ProductSlider from "./ProductSlider";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-24 pb-10 sm:pt-28 sm:pb-16 bg-[#0F172A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Hero Content */}
          <motion.div
            initial={
  typeof window !== "undefined" && window.location.hash === "#contact"
    ? false
    : { opacity: 0, y: 25 }
}
animate={{ opacity: 1, y: 0 }}
            
            transition={{ duration: 0.7 }}
            className="w-full min-w-0 text-center lg:text-left"
          >
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
              Premium Hygiene Solutions for Modern Living
            </h1>

            <p className="font-body text-base sm:text-lg lg:text-xl text-[#94A3B8] mt-5 sm:mt-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Trusted floor, bathroom, kitchen and glass cleaning
              products designed for homes and businesses.
            </p>

            {/* Hero Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-3 sm:gap-4 mt-7 sm:mt-10">
              <Link
                href="/products"
                className="inline-flex justify-center items-center px-6 sm:px-8 py-3.5 sm:py-4 bg-[#2F36D9] text-white rounded-xl font-body font-medium hover:bg-[#3B43E8] transition-all duration-300"
              >
                Explore Products
              </Link>

              <Link
                href="/#contact"
                className="inline-flex justify-center items-center px-6 sm:px-8 py-3.5 sm:py-4 border border-[#2F36D9] text-[#DBEAFE] rounded-xl font-body font-medium hover:bg-[#2F36D9]/10 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Product Slider */}
          <motion.div
            initial={
  typeof window !== "undefined" && window.location.hash === "#contact"
    ? false
    : { opacity: 0, y: 20 }
}
animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full min-w-0 flex justify-center mt-2 lg:mt-0"
          >
            <div className="w-full max-w-[550px] min-w-0">
              <ProductSlider />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
