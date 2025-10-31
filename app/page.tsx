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
import TaglineSection from "@/components/TaglineSection";

export default function Home() {
  return (
    <>
    
     <HeroSection/>
     <SliderHero/>
     <AboutSection/>
     <TaglineSection/>
     <ClientSection/>
     <PortfolioSection />
      <ServiceSection />
      
      
      <JournalSection />
    </>
  );
}

