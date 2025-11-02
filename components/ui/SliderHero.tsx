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
    <section className="relative w-full h-[60vh] bg-[#1C1C1C] flex items-center justify-center overflow-hidden">
      {/* Container untuk horizontal scroll */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex space-x-10 px-20"
          transition={{ ease: "easeInOut" }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="relative w-[500px] h-[300px] flex-shrink-0 overflow-hidden shadow-lg"
            >
              <Image
                src={src}
                alt={`Carousel ${index}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}