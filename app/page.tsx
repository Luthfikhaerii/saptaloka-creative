import Image from "next/image";
import ThreeDCard from "@/components/ui/ThreeDCard";
import { PlayCircleIcon, PuzzlePieceIcon, Cog6ToothIcon, PencilSquareIcon, ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'; // Contoh ikon dari Heroicons
import BrandCarousel from "@/components/ClientSection";
import PortfolioSection from "@/components/PortofolioSection";
import CallToActionSection from "@/components/CallToActionSection";
import JournalSection from "@/components/JournalSection";
import ClientSection from "@/components/ClientSection";
import ServiceSection from "@/components/ServiceSection";
import HeroSection from "@/components/HeroSection";
import SliderHero from "@/components/ui/SliderHero";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <>
    
     <HeroSection/>
     <SliderHero/>
     <AboutSection/>
      <section className="min-h-screen bg-black text-white flex flex-col items-center pt-20 pb-28 w-full">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl max-w-2xl font-extrabold text-center mb-4">
            <p className="text-blue-400">Creative Agency That</p>  Builds Memorable Brands
          </h1>
          <p className="text-xs md:text-base text-white/70 text-center mb-10 max-w-5xl">
            We help enterprises accelerate digital transformation with tech consultancy,
            custom software development, and team augmentation.
          </p>

        </div>

        <div className="flex w-[90%] gap-10 flex-wrap justify-evenly">
          {/* CARD 1 */}
          <div
            className="w-[350px] h-[350px] bg-black/5 rounded-xl cursor-pointer 
      transition-all duration-300 ease-out perspective-[1200px]"
          >
            <div
              className="w-full h-full rounded-xl shadow-2xl 
        transition-all duration-200 ease-out
        bg-cover bg-center rotate-y-[25deg]"
              style={{ backgroundImage: `url(/section/1.png)` }}
            />
          </div>
          {/* CARD 2 */}
          <div
            className="w-[350px] h-[350px] bg-black/5 rounded-xl cursor-pointer 
      transition-all duration-300 ease-out"
          >
            <div
              className="w-full h-full rounded-xl shadow-2xl 
        transition-all duration-200 ease-out
        bg-cover bg-center"
              style={{ backgroundImage: `url(/section/2.png)` }}
            />
          </div>
          {/* CARD 3 */}
          <div
            className="w-[350px] h-[350px] bg-black/5 rounded-xl cursor-pointer 
      transition-all duration-300 ease-out perspective-[1200px]"
          >
            <div
              className="w-full h-full rounded-xl shadow-2xl 
        transition-all duration-200 ease-out
        bg-cover bg-center rotate-y-[-25deg]"
              style={{ backgroundImage: `url(/section/3.png)` }}
            />
          </div>

        </div>
      </section>

      <ServiceSection />
      <PortfolioSection />
      <ClientSection/>
      <JournalSection />
      <CallToActionSection/>
    </>
  );
}

