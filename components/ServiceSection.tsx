"use client";
import { motion, easeOut } from "framer-motion";
import Image from "next/image";

export default function ServiceSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut, // ✅ cara baru
      },
    },
  };

  return (
    <section className="w-full bg-[#1C1C1C] text-black pt-20 px-6 sm:px-8 md:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Subjudul */}
        <motion.section
          className="text-white w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
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
            SERVICE
          </motion.p>

          {/* Deskripsi */}
          <motion.h2
            className="font-bold leading-snug max-w-6xl text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.6 }}
            viewport={{ once: true }}
          >
            We believe every brand has a story worth telling.
            Through Social Media Management, Video Marketing, and Instagram Feeds, Saptaloka Creative crafts engaging content that drives connection, boosts engagement, and strengthens your digital identity.
          </motion.h2>
          {/* Garis atas */}
          <motion.div
            className="border-t border-gray-500 mt-20 mb-4 w-full"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.section>

        {/* === 1. SOCIAL MEDIA MANAGEMENT === */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="md:flex justify-between items-start text-white mb-16"
        >
          {/* Kiri: teks */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl max-w-96 font-bold mb-4">
              SOCIAL MEDIA MANAGEMENT
            </h2>
            <p className="text-sm sm:text-base font-light mb-4">
              Services included:
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
              {["Story", "Scheduling Upload", "Admin", "Reporting"].map(
                (item, i) => (
                  <span
                    key={i}
                    className="border border-white px-3 py-1 rounded-full text-xs sm:text-sm"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Kanan: gambar */}
          <div className="flex justify-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Image
                src="/service/service1.jpg"
                alt="Social Media Management"
                width={500}
                height={350}
                className="object-cover w-full max-w-[350px] h-auto"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="border-t border-gray-500 mb-4"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          viewport={{ once: true }}
        />

        {/* === 2. VIDEO MARKETING === */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="md:flex justify-between items-start text-white mb-16"
        >
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl max-w-96 font-bold mb-4">
              VIDEO MARKETING
            </h2>
            <p className="text-sm sm:text-base font-light mb-4">
              Services included:
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
              {["Shooting", "Content Brief", "Editing", "Riset"].map((item, i) => (
                <span
                  key={i}
                  className="border border-white px-3 py-1 rounded-full text-xs sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Image
                src="/service/service2.avif"
                alt="Video Marketing"
                width={500}
                height={350}
                className="object-cover w-full max-w-[350px] h-auto"
              />
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="border-t border-gray-500 mb-4"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
          viewport={{ once: true }}
        />

        {/* === 3. INSTAGRAM FEEDS === */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="md:flex justify-between items-start text-white mb-16"
        >
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl max-w-96 font-bold mb-4">
              INSTAGRAM FEEDS
            </h2>
            <p className="text-sm sm:text-base font-light mb-4">
              Services included:
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
              {["Concept", "Design", "Photo Shoot"].map((item, i) => (
                <span
                  key={i}
                  className="border border-white px-3 py-1 rounded-full text-xs sm:text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Image
                src="/service/service3.jpg"
                alt="Video Marketing"
                width={500}
                height={350}
                className="object-cover w-full max-w-[350px] h-auto"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
