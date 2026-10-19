"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#07152F] border-t border-[#1E3A8A]/40 overflow-hidden">

      {/* Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px] bg-[#2F36D9] shadow-[0_0_30px_rgba(47,54,217,0.8)]" />

      <div className="max-w-7xl mx-auto px-8 pt-20 pb-8">

        {/* Main Footer */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">

            <div className="flex items-center gap-4">

              <Image
                src="/logo.png"
                alt="Hygienic Logo"
                width={70}
                height={70}
                className="object-contain"
              />

              <div>
                <h2 className="font-heading text-3xl text-white">
                  Hygienic
                </h2>

                <p className="font-body text-[#C4D0E3] text-sm mt-1">
                  Hygiene solutions for modern living
                </p>
              </div>

            </div>

            <p className="font-body text-[#C4D0E3] max-w-md mt-7 leading-relaxed">
              Reliable cleaning solutions designed to bring freshness,
              cleanliness and everyday convenience to homes and businesses.
            </p>

            <div className="flex gap-3 mt-7">

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#2F36D9]/50 flex items-center justify-center text-[#DBEAFE] hover:bg-[#2F36D9] hover:border-[#2F36D9] transition-all duration-300"
                aria-label="Instagram"
              >
                <span>◎</span>
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-[#2F36D9]/50 flex items-center justify-center text-[#DBEAFE] hover:bg-[#2F36D9] hover:border-[#2F36D9] transition-all duration-300"
                aria-label="Facebook"
              >
                <span>f</span>
              </a>

            </div>

          </div>


          {/* Navigation */}
          <div>

            <h3 className="font-honick text-[#DBEAFE] uppercase tracking-[0.25em] text-sm font-semibold">
              Explore
            </h3>

            <div className="w-10 h-px bg-[#2F36D9] mt-3 mb-6" />

            <div className="space-y-4">
<a
  href="/"
  className="block font-body text-[#C4D0E3] hover:text-white transition-colors"
>
  Home
</a>

<a
  href="/products"
  className="block font-body text-[#C4D0E3] hover:text-white transition-colors"
>
  Products
</a>

<a
  href="/#about"
  className="block font-body text-[#C4D0E3] hover:text-white transition-colors"
>
  About Us
</a>

<a
  href="/careers"
  className="block font-body text-[#C4D0E3] hover:text-white transition-colors"
>
  Careers
</a>

<a
  href="/#contact"
  className="block font-body text-[#C4D0E3] hover:text-white transition-colors"
>
  Contact
</a>

            </div>

          </div>


          {/* Products */}
          <div>

            <h3 className="font-honick text-[#DBEAFE] uppercase tracking-[0.25em] text-sm font-semibold">
              Products
            </h3>

            <div className="w-10 h-px bg-[#2F36D9] mt-3 mb-6" />

            <div className="space-y-4">

              <p className="font-body text-[#C4D0E3]">
                Floor Cleaners
              </p>

              <p className="font-body text-[#C4D0E3]">
                Toilet Cleaners
              </p>

              <p className="font-body text-[#C4D0E3]">
                Glass Cleaners
              </p>

              <p className="font-body text-[#C4D0E3]">
                Kitchen Cleaners
              </p>

            </div>

          </div>

        </div>


        {/* Divider */}
        <div className="hygienic-divider mt-16" />


        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-7">

          <p className="font-body text-[#C4D0E3] max-w-md mt-7 leading-relaxed">
            © {new Date().getFullYear()} Hygienic. All rights reserved.
          </p>

          <p className="font-body text-[#C4D0E3] max-w-md mt-7 leading-relaxed">
            Hygiene solutions for modern living.
          </p>

        </div>

      </div>

    </footer>
  );
}