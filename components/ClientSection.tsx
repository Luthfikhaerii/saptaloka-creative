"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { easeOut, motion } from "framer-motion";
import "swiper/css";

// Animasi fade-up saat muncul di layar
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

const brands = [
  "/clients/client1.png",
  "/clients/client2.jpg",
  "/clients/client1.png",
  "/clients/client2.jpg",
  "/clients/client1.png",
  "/clients/client2.jpg",
];

export default function ClientSection() {
  return (
    <motion.section
      className="bg-[#1C1C1C] text-center text-white overflow-hidden md:h-screen mb-10 flex justify-center items-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      <div className="max-w-6xl px-6">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold mb-6"
          variants={fadeUp}
        >
          Trusted by Leading Brands
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-gray-400 text-sm md:text-base mb-12 max-w-2xl mx-auto"
          variants={fadeUp}
        >
          Collaborating with top brands to create authentic and high-impact
          campaigns that connect deeply with their audiences.
        </motion.p>

        {/* Swiper Slider */}
        <motion.div
          className="py-4"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
        >
          <Swiper
            modules={[Autoplay]}
            slidesPerView={2}
            spaceBetween={24}
            loop={true}
            speed={4000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1280: { slidesPerView: 6 },
            }}
            className="select-none"
          >
            {brands.map((logo, i) => (
              <SwiperSlide key={i}>
                <div className="flex items-center justify-center">
                  <motion.img
                    src={logo}
                    alt={`brand-${i}`}
                    className="h-20 w-auto opacity-70 hover:opacity-100 hover:scale-105 transition-all duration-300 drop-shadow-md"
                    whileHover={{ scale: 1.1 }}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </motion.section>
  );
}
