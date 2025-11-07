"use client";
import Image from "next/image";
import { easeOut, motion } from "framer-motion";

// Variants animasi muncul dari bawah (fade-up)
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: easeOut, // smooth easeOut
    },
  },
};

export default function WorkSection() {
  return (
    <section className="bg-[#1C1C1C] text-white w-full">
      {/* ====== Related Work ====== */}
      <motion.div
        className="px-6 md:px-16 py-16 border-b border-gray-800"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
      >
        {/* Garis atas */}
          <motion.div
            className="border-t border-gray-500 mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
          />
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center md:text-left">
          Related work
        </h2>
        

        {/* Carousel / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { src: "/works/work1.jpg", title: "ULTIMATE TRAVEL HACKER" },
            { src: "/works/work2.avif", title: "EXTRA HOT DROP" },
            { src: "/works/work3.jpg", title: "MONUMENTAL BEANIES" },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="bg-white aspect-video relative overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-xs text-gray-400 mt-3">{item.title}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>


    </section>
  );
}
