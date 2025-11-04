export default function AboutSection() {
  return (
    <section className="bg-[#1C1C1C] text-white w-full pb-20 pt-16 px-5 sm:px-8 md:px-12 lg:px-20">
      {/* Garis atas */}
      <div className="border-t border-gray-700 mb-8 sm:mb-10"></div>

      {/* Label */}
      <p className="text-[10px] sm:text-xs text-gray-400 tracking-[0.2em] mb-3 sm:mb-4 uppercase">
        ABOUT
      </p>

      {/* Deskripsi */}
      <h2 className="font-bold leading-snug max-w-5xl text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
        Saptaloka Creative is a Bandung-based creative agency specializing in
        social media marketing and digital storytelling. We collaborate with
        brands and businesses that aspire to lead in creativity, strategy, and
        innovation — crafting experiences that connect, engage, and inspire.
      </h2>
    </section>
  );
}
