
"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";

export default function CTA() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitted(false);

    // Temporary submission simulation.
    // Email/API integration can be added later.
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);

    e.currentTarget.reset();
  };

  return (
    <section
      id="contact"
      className="relative scroll-mt-24 py-28 bg-[#07152F] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#2F36D9]/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-8">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-5">
            <div className="w-14 h-px bg-gradient-to-r from-transparent to-[#2F36D9]" />

            <p className="font-honick text-[#DBEAFE] uppercase tracking-[0.35em] text-base font-semibold hygienic-text-glow">
              Let's Keep It Clean
            </p>

            <div className="w-14 h-px bg-gradient-to-l from-transparent to-[#2F36D9]" />
          </div>

          <h2 className="font-heading text-5xl md:text-6xl text-white mt-7 leading-tight">
            Get in Touch.
          </h2>

          <p className="font-body text-[#C4D0E3] text-lg md:text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
            Have a question, product enquiry or business requirement?
            We'd love to hear from you.
          </p>
        </div>

        {/* Enquiry Card - No entrance animation */}
        <div className="relative max-w-4xl mx-auto rounded-[2rem] border border-[#2F36D9]/40 bg-[#0F172A]/90 backdrop-blur-md p-8 md:p-12 shadow-[0_0_60px_rgba(47,54,217,0.12)]">
          {/* Top Decorative Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-[#60A5FA] to-transparent" />

          {/* Sparkles */}
          <span className="absolute top-8 left-8 text-[#60A5FA] text-2xl hygienic-text-glow">
            ✦
          </span>

          <span className="absolute bottom-8 right-8 text-[#60A5FA] text-2xl hygienic-text-glow">
            ✦
          </span>

          {/* Success Message */}
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 rounded-xl border border-[#60A5FA]/30 bg-[#60A5FA]/10 px-5 py-4 text-center"
            >
              <p className="font-body text-[#DBEAFE]">
                Thank you! Your enquiry has been submitted successfully.
              </p>
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="relative space-y-6">
            {/* Name + Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-body text-[#DBEAFE] text-sm mb-2"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  minLength={2}
                  placeholder="Enter your name"
                  className="w-full px-5 py-4 rounded-xl bg-[#07152F] border border-[#1E3A8A]/60 text-white placeholder:text-[#64748B] font-body outline-none focus:border-[#60A5FA] focus:ring-1 focus:ring-[#60A5FA]/30 transition-all duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-body text-[#DBEAFE] text-sm mb-2"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="w-full px-5 py-4 rounded-xl bg-[#07152F] border border-[#1E3A8A]/60 text-white placeholder:text-[#64748B] font-body outline-none focus:border-[#60A5FA] focus:ring-1 focus:ring-[#60A5FA]/30 transition-all duration-300"
                />
              </div>
            </div>

            {/* Phone + Enquiry Type */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="phone"
                  className="block font-body text-[#DBEAFE] text-sm mb-2"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  pattern="[0-9+\-\s()]{10,}"
                  placeholder="Enter your phone number"
                  className="w-full px-5 py-4 rounded-xl bg-[#07152F] border border-[#1E3A8A]/60 text-white placeholder:text-[#64748B] font-body outline-none focus:border-[#60A5FA] focus:ring-1 focus:ring-[#60A5FA]/30 transition-all duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="enquiryType"
                  className="block font-body text-[#DBEAFE] text-sm mb-2"
                >
                  Enquiry Type
                </label>

                <select
                  id="enquiryType"
                  name="enquiryType"
                  required
                  defaultValue=""
                  className="w-full px-5 py-4 rounded-xl bg-[#07152F] border border-[#1E3A8A]/60 text-[#C4D0E3] font-body outline-none focus:border-[#60A5FA] focus:ring-1 focus:ring-[#60A5FA]/30 transition-all duration-300"
                >
                  <option value="" disabled>
                    Select an enquiry type
                  </option>
                  <option value="products">Product Enquiry</option>
                  <option value="retailer">Retailer Enquiry</option>
                  <option value="business">Business Enquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block font-body text-[#DBEAFE] text-sm mb-2"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                minLength={10}
                rows={5}
                placeholder="Tell us how we can help..."
                className="w-full px-5 py-4 rounded-xl bg-[#07152F] border border-[#1E3A8A]/60 text-white placeholder:text-[#64748B] font-body outline-none resize-none focus:border-[#60A5FA] focus:ring-1 focus:ring-[#60A5FA]/30 transition-all duration-300"
              />
            </div>

            {/* Submit */}
            <div className="flex justify-center pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-10 py-4 rounded-xl bg-[#2F36D9] text-white font-body hover:bg-[#3B43E8] hover:shadow-[0_0_30px_rgba(47,54,217,0.4)] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit Enquiry"}

                {!isSubmitting && <span className="ml-3">→</span>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
