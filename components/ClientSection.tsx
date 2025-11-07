"use client";
import React from "react";
import { easeOut, motion } from "framer-motion";

export default function ClientSection() {
  const companies = [
    [
      { name: "Apple", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
      { name: "PayPal", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" },
      { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
      { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Netflix_icon.svg" },
      { name: "Nvidia", logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg" },
      { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    ],
    [
      { name: "Toyota", logo: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Toyota_carlogo.svg" },
      { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
      { name: "Tesla", logo: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Tesla_Motors.svg" },
      { name: "Spotify", logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg" },
      
    ],
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  return (
    <section className="w-full bg-[#1C1C1C] py-20 px-6 md:px-8 lg:px-16 flex justify-center items-center">
      <motion.div
        className="max-w-6xl w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-wide">
            Our Clients
          </h1>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
           Brands and businesses that trust us.
          </p>
        </div>

        {/* Company Logos */}
        <div className="space-y-6">
          {companies.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="flex flex-wrap justify-center gap-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {row.map((company, index) => (
                <motion.div
                  key={index}
                  className="bg-white w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg group cursor-pointer overflow-hidden"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
