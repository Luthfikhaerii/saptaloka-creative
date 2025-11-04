"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <motion.section
      className="bg-[#1C1C1C] text-white w-full pt-16 px-6 sm:px-8 md:px-10"
      initial={{ opacity: 0, y: 50 }} // sebelum terlihat
      whileInView={{ opacity: 1, y: 0 }} // ketika muncul di layar
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }} // muncul sekali ketika 30% terlihat
    >
      {/* Garis atas */}
      <motion.div
        className="border-t border-gray-500 mb-8 sm:mb-10"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
        viewport={{ once: true }}
      />

      {/* Label */}
      <motion.p
        className="text-[10px] sm:text-xs text-gray-400 tracking-[0.2em] mb-3 sm:mb-4 uppercase"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        ABOUT
      </motion.p>

      {/* Deskripsi */}
      <motion.h2
        className="font-bold leading-snug max-w-5xl text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
      >
        Saptaloka Creative is a Bandung-based creative agency specializing in
        social media marketing and digital storytelling. We collaborate with
        brands and businesses that aspire to lead in creativity, strategy, and
        innovation — crafting experiences that connect, engage, and inspire.
      </motion.h2>
    </motion.section>
  );
}
