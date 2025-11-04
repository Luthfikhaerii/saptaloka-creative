"use client";

import { motion } from "framer-motion";

export default function PortfolioSection() {
  return (
    <motion.section
      className="w-full bg-[#1C1C1C] py-16 px-6 md:px-10 flex flex-col items-center text-center"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Garis atas */}
      <motion.div
        className="border-t border-gray-500 mb-8 sm:mb-10 w-full"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
        viewport={{ once: true }}
      />

      {/* Icon kutipan */}
      <motion.div
        className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-2 font-extrabold leading-none"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        “
      </motion.div>

      {/* Isi testimonial */}
      <motion.p
        className="max-w-2xl sm:max-w-3xl md:max-w-4xl 
          text-base sm:text-lg md:text-2xl lg:text-3xl 
          font-serif leading-relaxed text-gray-200 mb-10 px-2 sm:px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
      >
        Saptaloka Creative truly transformed our brand’s online presence through
        powerful and engaging social media storytelling. Their strategic
        approach and creative execution made every campaign feel authentic and
        impactful, helping us connect deeply with our audience and grow our
        business visibility.
      </motion.p>

      {/* Nama & jabatan */}
      <motion.div
        className="space-y-1"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
        viewport={{ once: true }}
      >
        <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-400">
          Muhammad Novanto
        </h4>
        <p className="text-gray-200 text-xs sm:text-sm md:text-base">
          Saptaloka Creative | Chief Executive Officer
        </p>
      </motion.div>
    </motion.section>
  );
}
