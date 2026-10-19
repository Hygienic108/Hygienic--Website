"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Effective Formulas",
    description:
      "Thoughtfully developed cleaning solutions designed for reliable everyday performance.",
  },
  {
    number: "02",
    title: "Everyday Convenience",
    description:
      "Practical products that make routine cleaning simpler for homes and businesses.",
  },
  {
    number: "03",
    title: "Quality Focused",
    description:
      "A consistent focus on quality, performance and dependable cleaning results.",
  },
  {
    number: "04",
    title: "Made for Every Space",
    description:
      "Solutions for floors, bathrooms, glass surfaces and kitchens under one brand.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-28 bg-[#07152F] border-t border-[#1E3A8A]/30">

  <div className="max-w-7xl mx-auto px-8">

    <div className="grid lg:grid-cols-[0.9fr_2fr] gap-12 items-start">

      {/* LEFT CONTENT */}
      <div>

        <p className="font-honick text-[#DBEAFE] uppercase tracking-[0.35em] text-base font-semibold hygienic-text-glow">
          Why Hygienic
        </p>

        <div className="hygienic-label-line mt-3" />

        <h2 className="font-heading text-5xl text-white mt-7 leading-tight">
          Made for a Cleaner,
          <br />
          Better Everyday.
        </h2>

        <p className="font-body text-[#94A3B8] text-lg mt-6 max-w-xl leading-relaxed">
          Everything we create is designed around one simple idea:
          making everyday cleaning more effective, convenient and dependable.
        </p>

      </div>

      {/* RIGHT CARDS */}
      <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">

        {reasons.map((reason, index) => (
          <motion.div
            key={reason.number}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
            whileHover={{ y: -6 }}
            className="group min-h-[250px] rounded-2xl border border-[#2F36D9]/60 bg-[#0F172A]/60 p-5 hover:bg-[#111F3D] hover:shadow-[0_0_35px_rgba(47,54,217,0.2)] transition-all duration-500"
          >

            <div className="flex justify-between">

              <span className="font-body text-[#60A5FA] text-lg font-semibold">
                {reason.number}
              </span>

            </div>

            {/* ICON CIRCLE */}
            <div className="w-16 h-16 rounded-full border border-[#2F36D9] bg-[#1E3A8A]/30 flex items-center justify-center mt-4 mb-6 hygienic-glow">

              <span className="text-[#DBEAFE] text-2xl">
                {index === 0 && "♧"}
                {index === 1 && "⌂"}
                {index === 2 && "✓"}
                {index === 3 && "▦"}
              </span>

            </div>

            <h3 className="font-body text-lg font-bold text-white">
              {reason.title}
            </h3>

            <p className="font-body text-[#94A3B8] text-sm mt-4 leading-relaxed">
              {reason.description}
            </p>

          </motion.div>
        ))}

      </div>

    </div>

  </div>

</section>
  );
}