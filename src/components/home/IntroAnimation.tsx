"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function IntroAnimation() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#C7D2FE]"
    >
        <motion.div
  className="absolute w-20 h-20 rounded-full bg-[#DBEAFE]"
  initial={{ scale: 0 }}
  animate={{ scale: 30 }}
  transition={{
    duration: 1.3,
    ease: "easeInOut",
  }}
/>
      <motion.div
        initial={{ scale: 0.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
      >
        <Image
          src="/logo.png"
          alt="Hygienic Logo"
          width={220}
          height={220}
          priority
        />
      </motion.div>

      {/* Sparkle Top Left */}
      <motion.div
        className="absolute top-20 left-20 text-[#2F36D9] text-4xl"
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1.2, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        ✦
      </motion.div>

      {/* Sparkle Bottom Right */}
      <motion.div
        className="absolute bottom-20 right-20 text-[#2F36D9] text-4xl"
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1.2, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.5,
        }}
      >
        ✦
      </motion.div>
    </motion.div>
  );
}