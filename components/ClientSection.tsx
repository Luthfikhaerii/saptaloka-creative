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

export default function ClientSection() {
  return (
    <section className="py-16 mb-20">
      <h2 className="text-3xl font-bold text-center text-white mb-10 md:text-4xl">
        Trusted by Leading Brands
      </h2>
      {/* <p className="text-sm  text-center md:text-base text-gray-700 mb-6">
        Introduce yourself with content that sparks conversation and disrupts the traditional marketing model. Be memorable. Feel authentic. Make an impact.
      </p> */}
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
    </section>
  );
}