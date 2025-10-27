"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";


const brands = [
  "/cards/card1.png",
  "/cards/card2.png",
  "/cards/card3.png",
  "/cards/card1.png",
  "/cards/card2.png",
  "/cards/card3.png",
];

export default function BrandCarousel() {
  return (
     <div className="w-full py-6">
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={24}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={3000}
      >
        {brands.map((logo, i) => (
          <SwiperSlide key={i}>
            <img
              src={logo}
              alt="brand logo"
              className="h-40 w-40 w-auto mx-auto opacity-70 hover:opacity-100 transition"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}