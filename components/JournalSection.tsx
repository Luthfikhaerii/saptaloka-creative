"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function JournalSection() {
  return (
    <section className="bg-[#1C1C1C] text-white w-full">
      {/* ====== Related Work ====== */}
      <div className="px-6 md:px-16 py-16 border-b border-gray-800">
        <h2 className="text-3xl md:text-5xl font-bold mb-10">Related work</h2>

        {/* Carousel / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Item 1 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer"
          >
            <div className="bg-white aspect-video relative overflow-hidden">
              <Image
                src="/works/work1.jpg"
                alt="Travel Hacker"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs text-gray-400 mt-3">ULTIMATE TRAVEL HACKER</p>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer"
          >
            <div className="bg-white aspect-video relative overflow-hidden">
              <Image
                src="/works/work2.avif"
                alt="Hot Drop"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs text-gray-400 mt-3">EXTRA HOT DROP</p>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="cursor-pointer"
          >
            <div className="bg-white aspect-video relative overflow-hidden">
              <Image
                src="/works/work3.jpg"
                alt="Monumental Beanies"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-xs text-gray-400 mt-3">MONUMENTAL BEANIES</p>
          </motion.div>
        </div>
      </div>

      {/* ====== How Can We Help You ====== */}
      <div className="px-6 md:px-16 py-24 grid md:grid-cols-2 gap-16">
        {/* Left Text */}
        <div>
          <p className="text-sm text-gray-400 mb-2">Let’s talk</p>
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            HOW CAN WE <br /> HELP YOU?
          </h2>
          <p className="text-gray-400 max-w-md">
            We do conversations, not just contact forms. Get in touch to discuss
            our process, previous work, or media requests.
          </p>
        </div>

        {/* Right Buttons */}
        <div className="flex flex-wrap gap-4 md:justify-start justify-center">
          {[
            "Animation",
            "Content Series",
            "Social Video Content",
            "Product Explainers",
            "Commercials",
            "Other",
          ].map((item) => (
            <button
              key={item}
              className="border border-gray-500 px-5 py-2 rounded-xl text-sm hover:bg-white hover:text-black transition"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}