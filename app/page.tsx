import ClientSection from "@/components/ClientSection";
import ServiceSection from "@/components/ServiceSection";
import HeroSection from "@/components/HeroSection";
import SliderHero from "@/components/ui/SliderHero";
import AboutSection from "@/components/AboutSection";
import TaglineSection from "@/components/TaglineSection";
import VideoPlayer from "@/components/VideoSection";
import QuotesSection from "@/components/QuotesSection";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <>
      <div className=" bg-[#1C1C1C] w-full">
          <HeroSection />
          <SliderHero />
          <AboutSection />
          <ServiceSection />
          <VideoPlayer/>
          <TaglineSection />
          <QuotesSection />
          <ClientSection />
          <WorkSection />
      </div>

    </>
  );
}

