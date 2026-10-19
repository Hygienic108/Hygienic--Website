"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "Floor Cleaners",
    products: ["Floor Cleaner", "Phenyl"],
  },
  {
    name: "Toilet Cleaners",
    products: ["Acid", "Bathroom Cleaner"],
  },
  {
    name: "Glass Cleaners",
    products: ["Glass Cleaner"],
  },
  {
    name: "Kitchen Cleaners",
    products: ["Dish Wash Liquid"],
  },
];

export default function ProductCategories() {
  return (
    <section className="relative py-28 bg-[#07152F] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">

        {/* Section Heading */}
        <div className="text-center mb-20">

          <div className="flex items-center justify-center gap-6">
            <div className="hidden sm:block w-16 h-px bg-gradient-to-r from-transparent to-[#2F36D9]" />

            <p className="font-honick text-[#DBEAFE] uppercase tracking-[0.35em] text-base font-semibold hygienic-text-glow">
              Explore Our Range
            </p>

            <div className="hidden sm:block w-16 h-px bg-gradient-to-l from-transparent to-[#2F36D9]" />
          </div>

          <h2 className="font-heading text-5xl md:text-6xl text-white mt-6">
            Cleaning Solutions
          </h2>

          {/* Decorative Divider */}
          <div className="flex justify-center items-center gap-5 mt-5">
            <div className="w-20 h-px bg-[#2F36D9]" />

            <span className="text-[#60A5FA] text-xl hygienic-text-glow">
              ✦
            </span>

            <div className="w-20 h-px bg-[#2F36D9]" />
          </div>

          <p className="font-body text-[#94A3B8] text-lg md:text-xl max-w-3xl mx-auto mt-6 leading-relaxed">
            Carefully developed cleaning products for homes, businesses and
            everyday hygiene.
          </p>

        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="group relative p-8 min-h-[280px] rounded-3xl bg-[#1E3A8A]/20 border border-[#1E3A8A]/40 backdrop-blur-sm hover:bg-[#1E3A8A]/30 hover:border-[#2F36D9]/60 hover:shadow-[0_0_40px_rgba(47,54,217,0.25)] transition-all duration-500"
            >

              {/* Number */}
              <span className="font-body text-[#64748B] text-sm">
                0{index + 1}
              </span>

              {/* Category Name */}
              <h3 className="font-heading text-3xl font-bold text-white mt-10">
                {category.name}
              </h3>

              {/* Products */}
              <div className="mt-5 space-y-2">
                {category.products.map((product) => (
                  <p
                    key={product}
                    className="font-body text-[#94A3B8] group-hover:text-[#DBEAFE] transition-colors duration-300"
                  >
                    {product}
                  </p>
                ))}
              </div>

              {/* Arrow */}
              <div className="absolute bottom-8 right-8 text-[#DBEAFE] opacity-0 translate-x-[-6px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-xl">
                →
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}