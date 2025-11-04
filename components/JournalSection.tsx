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

export default function JournalSection() {
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

      {/* ====== How Can We Help You ====== */}
      <motion.div
        className="px-6 md:px-16 py-24 grid md:grid-cols-2 gap-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        {/* Left Text */}
        <div>
          <motion.p
            className="text-sm text-gray-400 mb-2"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            Let’s talk
          </motion.p>

          <motion.h2
            className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            HOW CAN WE <br /> HELP YOU?
          </motion.h2>

          <motion.p
            className="text-gray-400 max-w-md"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            We do conversations, not just contact forms. Get in touch to discuss
            our process, previous work, or media requests.
          </motion.p>
        </div>

        {/* Right Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 md:justify-start justify-center"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            "Animation",
            "Content Series",
            "Social Video Content",
            "Product Explainers",
            "Commercials",
            "Other",
          ].map((item, i) => (
            <motion.button
              key={i}
              className="border border-gray-500 px-5 py-2 rounded-xl text-sm hover:bg-white hover:text-black transition"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {item}
            </motion.button>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
