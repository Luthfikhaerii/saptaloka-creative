import { Zalando_Sans } from 'next/font/google';

const geist = Zalando_Sans({
  subsets: ['latin'],
});

export default function HeroSection() {
  return (
    <section className="bg-[#1C1C1C] text-white flex flex-col justify-center px-6 sm:px-8 md:px-10 pt-20 md:pb-18 pb-10 max-w-7xl mx-auto">
      {/* Garis atas */}
      <div className="border-t border-gray-600 mb-8 mt-10 md:mt-20 max-w-6xl w-full mx-auto"></div>

      {/* Konten utama */}
      <div className="w-full max-w-6xl mx-auto">
        <p className="text-[10px] sm:text-xs tracking-[0.2em] text-gray-400 mb-3 uppercase">
          AGENCY
        </p>
        <h1
          className={`font-extrabold leading-[0.95] ${geist.className}
          text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl`}
        >
          CREATIVE FOCUSED <br /> AND IMPACT DRIVEN<span className="text-[#888]">®</span>
        </h1>
      </div>
    </section>
  );
}
