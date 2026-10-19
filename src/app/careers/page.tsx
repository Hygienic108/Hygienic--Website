"use client";

import { motion } from "framer-motion";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/home/Footer";

const positions = [
  {
    number: "01",
    title: "Retailer",
    description:
      "Join us as a retailer and help bring Hygienic cleaning solutions to more customers and businesses.",
  },
  {
    number: "02",
    title: "Sales Person",
    description:
      "Join our sales team and help us expand our reach while building strong customer relationships.",
  },
];

export default function CareersPage() {
  return (
  <>
    <Navbar />

    <main className="min-h-screen bg-[#07152F] text-white">

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#2F36D9]/10 blur-3xl rounded-full" />

        <div className="relative max-w-7xl mx-auto px-8 text-center">

          <div className="flex items-center justify-center gap-5">

            <div className="w-14 h-px bg-gradient-to-r from-transparent to-[#2F36D9]" />

            <p className="font-honick text-[#DBEAFE] uppercase tracking-[0.35em] text-base font-semibold hygienic-text-glow">
              Careers
            </p>

            <div className="w-14 h-px bg-gradient-to-l from-transparent to-[#2F36D9]" />

          </div>

          <h1 className="font-heading text-5xl md:text-7xl text-white mt-7">
            Grow With Hygienic.
          </h1>

          <div className="flex justify-center items-center gap-5 mt-6">

            <div className="w-20 h-px bg-[#2F36D9]" />

            <span className="text-[#60A5FA] text-xl hygienic-text-glow">
              ✦
            </span>

            <div className="w-20 h-px bg-[#2F36D9]" />

          </div>

          <p className="font-body text-[#94A3B8] text-lg md:text-xl max-w-2xl mx-auto mt-7 leading-relaxed">
            Be part of our growing team and help us bring better hygiene
            solutions to more homes and businesses.
          </p>

        </div>

      </section>


      {/* Open Positions */}
      <section className="relative py-16 pb-32">

        <div className="max-w-7xl mx-auto px-8">

          <div className="grid lg:grid-cols-2 gap-8">

            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group relative rounded-3xl border border-[#2F36D9]/40 bg-[#0F172A]/70 p-8 md:p-10 hover:border-[#2F36D9]/80 hover:shadow-[0_0_45px_rgba(47,54,217,0.18)] transition-all duration-500"
              >

                <div className="flex items-start justify-between">

                  <span className="font-body text-[#60A5FA] text-sm font-semibold">
                    {position.number}
                  </span>

                  <span className="text-[#60A5FA] text-2xl group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>

                </div>

                <h2 className="font-heading text-4xl text-white mt-12">
                  {position.title}
                </h2>

                <p className="font-body text-[#94A3B8] text-lg mt-5 leading-relaxed max-w-xl">
                  {position.description}
                </p>

              </motion.div>
            ))}

          </div>


          {/* Application Area */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-16 grid lg:grid-cols-[0.8fr_1.2fr] gap-14 items-start"
          >

            {/* Left */}
            <div>

              <p className="font-honick text-[#DBEAFE] uppercase tracking-[0.3em] text-base font-semibold hygienic-text-glow">
                Join Our Team
              </p>

              <div className="hygienic-label-line mt-3" />

              <h2 className="font-heading text-5xl text-white mt-7 leading-tight">
                Ready to take
                <br />
                the next step?
              </h2>

              <p className="font-body text-[#94A3B8] text-lg mt-6 leading-relaxed max-w-lg">
                Tell us about yourself and the position you're interested in.
                Our team will review your application and get in touch with
                you.
              </p>

            </div>


            {/* Form */}
            <div className="rounded-3xl border border-[#2F36D9]/50 bg-[#0F172A]/80 p-8 md:p-10 shadow-[0_0_50px_rgba(47,54,217,0.12)]">

              <h3 className="font-heading text-3xl text-white">
                Apply Now
              </h3>

              <p className="font-body text-[#94A3B8] mt-3 mb-8">
                Fill in your details below.
              </p>

              <form className="space-y-5">

                {/* Name */}
                <div>
                  <label className="font-body text-[#DBEAFE] text-sm block mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#07152F] border border-[#1E3A8A] text-white placeholder-[#64748B] outline-none focus:border-[#2F36D9] focus:shadow-[0_0_20px_rgba(47,54,217,0.15)] transition-all"
                  />
                </div>


                {/* Email */}
                <div>
                  <label className="font-body text-[#DBEAFE] text-sm block mb-2">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#07152F] border border-[#1E3A8A] text-white placeholder-[#64748B] outline-none focus:border-[#2F36D9] focus:shadow-[0_0_20px_rgba(47,54,217,0.15)] transition-all"
                  />
                </div>


                {/* Phone */}
                <div>
                  <label className="font-body text-[#DBEAFE] text-sm block mb-2">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter your phone number"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#07152F] border border-[#1E3A8A] text-white placeholder-[#64748B] outline-none focus:border-[#2F36D9] focus:shadow-[0_0_20px_rgba(47,54,217,0.15)] transition-all"
                  />
                </div>


                {/* Position */}
                <div>
                  <label className="font-body text-[#DBEAFE] text-sm block mb-2">
                    Position
                  </label>

                  <select
                    name="position"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#07152F] border border-[#1E3A8A] text-white outline-none focus:border-[#2F36D9] transition-all"
                  >
                    <option value="">Select a position</option>
                    <option value="Retailer">Retailer</option>
                    <option value="Sales Person">Sales Person</option>
                  </select>
                </div>


                {/* Experience */}
                <div>
                  <label className="font-body text-[#DBEAFE] text-sm block mb-2">
                    Experience
                  </label>

                  <input
                    type="text"
                    name="experience"
                    placeholder="e.g. 2 years"
                    className="w-full px-4 py-3.5 rounded-xl bg-[#07152F] border border-[#1E3A8A] text-white placeholder-[#64748B] outline-none focus:border-[#2F36D9] focus:shadow-[0_0_20px_rgba(47,54,217,0.15)] transition-all"
                  />
                </div>


                {/* Submit */}
                <button
                  type="button"
                  className="w-full mt-3 py-4 rounded-xl bg-[#2F36D9] text-white font-body hover:bg-[#3B43E8] hover:shadow-[0_0_30px_rgba(47,54,217,0.4)] transition-all duration-300"
                >
                  Submit Application
                  <span className="ml-3">→</span>
                </button>

              </form>

            </div>

          </motion.div>

        </div>

      </section>

        </main>

    <Footer />
  </>
  );
}