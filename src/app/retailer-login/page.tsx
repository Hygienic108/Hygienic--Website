
"use client";

import Image from "next/image";
import Link from "next/link";

export default function RetailerLogin() {
  return (
    <main className="min-h-screen bg-[#07152F] text-white flex items-center justify-center px-6 py-28 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#2F36D9]/10 blur-3xl" />

      {/* Decorative Glow */}
      <div className="absolute top-24 left-10 w-2 h-2 rounded-full bg-[#60A5FA] hygienic-glow" />
      <div className="absolute bottom-24 right-10 w-2 h-2 rounded-full bg-[#60A5FA] hygienic-glow" />

      {/* Main Content - No Entrance Animation */}
      <div className="relative z-10 w-full max-w-md">
        {/* Logo */}
        <div className="flex flex-col items-center mb-10">
          <Image
            src="/logo.png"
            alt="Hygienic Logo"
            width={90}
            height={90}
            className="object-contain"
          />

          <h1 className="font-brand text-4xl text-white mt-4">
            HYGIENIC
          </h1>
        </div>

        {/* Login Card */}
        <div className="relative rounded-[2rem] border border-[#2F36D9]/40 bg-[#0F172A]/90 backdrop-blur-md px-8 py-10 shadow-[0_0_60px_rgba(47,54,217,0.12)]">
          {/* Top Line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-[#60A5FA] to-transparent" />

          {/* Heading */}
          <div className="text-center">
            <p className="font-honick text-[#DBEAFE] uppercase tracking-[0.3em] text-sm font-semibold">
              Retailer Portal
            </p>

            <h2 className="font-heading text-4xl text-white mt-5">
              Welcome Back
            </h2>

            <p className="font-body text-[#C4D0E3] mt-3">
              Sign in to access your retailer account.
            </p>
          </div>

          {/* Form */}
          <form className="mt-9 space-y-6">
            {/* Email / Retailer ID */}
            <div>
              <label
                htmlFor="retailerId"
                className="block font-body text-[#DBEAFE] text-sm mb-2"
              >
                Retailer ID / Email
              </label>

              <input
                id="retailerId"
                name="retailerId"
                type="text"
                placeholder="Enter your retailer ID or email"
                className="w-full px-5 py-4 rounded-xl bg-[#07152F] border border-[#1E3A8A]/60 text-white placeholder:text-[#64748B] font-body outline-none focus:border-[#60A5FA] focus:ring-1 focus:ring-[#60A5FA]/40 transition-all duration-300"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block font-body text-[#DBEAFE] text-sm mb-2"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                placeholder="Enter your password"
                className="w-full px-5 py-4 rounded-xl bg-[#07152F] border border-[#1E3A8A]/60 text-white placeholder:text-[#64748B] font-body outline-none focus:border-[#60A5FA] focus:ring-1 focus:ring-[#60A5FA]/40 transition-all duration-300"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right">
              <button
                type="button"
                className="font-body text-sm text-[#94A3B8] hover:text-[#DBEAFE] transition-colors"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full px-8 py-4 rounded-xl bg-[#2F36D9] text-white font-body hover:bg-[#3B43E8] hover:shadow-[0_0_30px_rgba(47,54,217,0.35)] transition-all duration-300"
            >
              Login
            </button>
          </form>

          {/* Retailer Enquiry */}
          <div className="text-center mt-8 pt-7 border-t border-white/10">
            <p className="font-body text-[#94A3B8] text-sm">
              Not a retailer yet?
            </p>

            <Link
              href="/#contact"
              className="inline-block mt-2 font-body text-[#60A5FA] hover:text-[#DBEAFE] transition-colors"
            >
              Contact us to become a retailer →
            </Link>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-7">
          <Link
            href="/"
            className="font-body text-[#94A3B8] hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
