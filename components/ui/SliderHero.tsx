"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ScrollHorizontalCarousel() {
  const { scrollYProgress } = useScroll();

  // Gerakkan carousel ke kiri seiring scroll
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const images = [
    "/creativemarketing2.jpg",
    "/creativemarketing1.webp",
    "/creativemarketing3.jpg",
    "/creativemarketing4.jpg",
  ];

  return (
    <section className="relative w-full h-[160px] sm:h-[220px] md:h-[280px] lg:h-[340px] bg-[#1C1C1C] flex items-center justify-center overflow-hidden">
      {/* Wrapper utama untuk efek sticky */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex space-x-2 sm:space-x-6 md:space-x-8 lg:space-x-10 px-2 sm:px-10 md:px-20 translate-z-0 will-change-transform"
          transition={{ ease: "easeInOut" }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 overflow-hidden shadow-none
                         w-[250px] h-[160px]
                         sm:w-[350px] sm:h-[220px]
                         md:w-[450px] md:h-[280px]
                         lg:w-[550px] lg:h-[340px]"
            >
              <Image
                src={src}
                alt={`Carousel ${index}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 640px) 250px, (max-width: 1024px) 450px, 550px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}