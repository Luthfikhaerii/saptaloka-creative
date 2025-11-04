"use client";

import { motion } from "framer-motion";
import { Poppins } from "next/font/google";

const geist = Poppins({
    subsets: ["latin"],
    weight: "700"
});

export default function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }} // posisi awal
      animate={{ opacity: 1, y: 0 }} // animasi ke posisi normal
      transition={{ duration: 0.8, ease: "easeOut" }} // durasi & easing
      className="bg-[#1C1C1C] text-white flex flex-col justify-center px-6 sm:px-8 md:px-10 pt-20 md:pb-18 pb-10 max-w-7xl mx-auto"
    >
      {/* Garis atas */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
        className="border-t border-gray-500 mb-8 mt-10 md:mt-20 w-full mx-auto"
      ></motion.div>

      {/* Konten utama */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="w-full mx-auto"
      >
        <p className="text-[10px] sm:text-xs tracking-[0.2em] text-gray-400 mb-3 uppercase">
          AGENCY
        </p>
        <h1
          className={`font-extrabold leading-[0.95] ${geist.className}
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl`}
        >
          CREATIVE FOCUSED <br /> AND IMPACT DRIVEN
          <span className="text-[#888]">®</span>
        </h1>
      </motion.div>
    </motion.section>
  );
}
