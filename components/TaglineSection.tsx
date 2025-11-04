"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TaglineSection() {
  return (
    <motion.section
      className="relative bg-[#1C1C1C] w-full flex flex-col items-end justify-end pt-16 overflow-hidden text-end px-6 sm:px-8 md:px-10 max-w-7xl mx-auto"
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

      {/* Subtitle */}
      <motion.p
        className="text-gray-300 text-end text-xs sm:text-sm md:text-base mb-4 sm:mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        viewport={{ once: true }}
      >
        Why partner with Saptaloka Creative?
      </motion.p>

      {/* Main text */}
      <motion.div
        className="relative font-extrabold text-white leading-[0.9]
          text-[1.8rem] sm:text-[2.5rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem]
          flex flex-col items-end justify-end gap-2 sm:gap-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            viewport={{ once: true }}
          >
            WE&apos;RE A
          </motion.span>

          <motion.span
            className="inline-block overflow-hidden rounded-md sm:rounded-lg align-middle"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
            viewport={{ once: true }}
          >
            <Image
              src="/creativemarketing3.jpg"
              alt="Creative work"
              width={150}
              height={100}
              className="object-cover w-[50px] h-[35px] sm:w-[90px] sm:h-[60px] md:w-[120px] md:h-[80px] lg:w-[150px] lg:h-[100px] rounded-md"
            />
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.1 }}
            viewport={{ once: true }}
          >
            CREATIVE
          </motion.span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          <motion.span
            className="inline-block overflow-hidden rounded-md sm:rounded-lg align-middle"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 1.3 }}
            viewport={{ once: true }}
          >
            <Image
              src="/creativemarketing4.jpg"
              alt="Powerhouse work"
              width={130}
              height={90}
              className="object-cover w-[45px] h-[30px] sm:w-[80px] sm:h-[55px] md:w-[110px] md:h-[75px] lg:w-[130px] lg:h-[90px] rounded-md"
            />
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
            viewport={{ once: true }}
          >
            POWERHOUSE
          </motion.span>
        </div>
      </motion.div>

      {/* Blue circle accent (opsional, kalau ingin efek tambahan) */}
      <motion.div
        className="absolute bottom-10 right-10 w-32 h-32 sm:w-40 sm:h-40 bg-blue-500/30 rounded-full blur-3xl"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1.8 }}
        viewport={{ once: true }}
      />
    </motion.section>
  );
}
