"use client";

import { motion, useScroll, useTransform, useAnimationFrame } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

export default function ScrollHorizontalCarousel() {
  const { scrollYProgress } = useScroll();
  const baseX = useTransform(scrollYProgress, [0, 1], [0, -800]); // scroll movement
  const [offset, setOffset] = useState(0);
  const ref = useRef(null);

  // Animasi otomatis (bergerak perlahan ke kiri)
  useAnimationFrame((t, delta) => {
    setOffset((prev) => (prev - delta * 0.015) % 800); // semakin kecil -> semakin lambat
  });

  const images = [
    "/creativemarketing2.jpg",
    "/creativemarketing1.webp",
    "/creativemarketing3.jpg",
    "/creativemarketing4.jpg",
  ];

  // Gabungkan efek scroll dan auto slide
  const x = useTransform(baseX, (v) => `${v + offset}px`);

  return (
    <section className="relative w-full h-[160px] sm:h-[220px] md:h-[280px] lg:h-[340px] bg-[#1C1C1C] flex items-center justify-center overflow-hidden">
      {/* Wrapper utama untuk efek sticky */}
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
          ref={ref}
          style={{ x }}
          className="flex space-x-2 sm:space-x-6 md:space-x-8 lg:space-x-10 px-2 sm:px-10 md:px-20 translate-z-0 will-change-transform"
        >
          {/* Gandakan array supaya loop terasa mulus */}
          {[...images, ...images].map((src, index) => (
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
