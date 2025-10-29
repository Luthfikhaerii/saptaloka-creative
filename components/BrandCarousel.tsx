"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";


const brands = [
  "/clients/client1.png",
  "/clients/client2.jpg",
  "/clients/client1.png",
  "/clients/client2.jpg",
  "/clients/client1.png",
  "/clients/client2.jpg",
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
              className="h-24 w-24 w-auto mx-auto opacity-70 hover:opacity-100 transition"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}