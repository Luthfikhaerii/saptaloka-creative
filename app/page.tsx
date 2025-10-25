import Image from "next/image";
import ThreeDCard from "@/components/ThreeDCard";

export default function Home() {
  return (
    <>
    <section className="relative w-full h-screen flex items-center justify-center bg-black">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/creative-bg.mp4"
        autoPlay
        loop
        muted
      />
      <div className="relative h-screen w-screen bg-black/70 text-white flex justify-center items-center">
      <div>
      <p className="text-[10vw] font-bold leading-[70px]">SAPTALOKA</p>
      <p className="text-[5vw] font-bold">CREATIVE</p>
      </div>

      </div>
      
    </section>
    <section className="min-h-screen bg-black text-white flex flex-col items-center pt-28">
      <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-4">
        Software Implementation & Customization
      </h1>
      <p className="text-sm md:text-base text-white/70 text-center mb-10 max-w-xl">
        We help enterprises accelerate digital transformation with tech consultancy,
        custom software development, and team augmentation.
      </p>

      <div className="flex gap-10 flex-wrap justify-center">
        <ThreeDCard image="/cards/card1.png" />
        <ThreeDCard image="/cards/card2.png" />
        <ThreeDCard image="/cards/card3.png" />
      </div>
    </section>
    </>
  );
}
