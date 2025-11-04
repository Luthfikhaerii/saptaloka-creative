// components/PortfolioSection.jsx

export default function PortfolioSection() {
  return (
    <section
      className="w-full bg-[#1C1C1C] py-16 sm:py-20 md:py-28 px-6 sm:px-10 md:px-16 
      flex flex-col items-center text-center"
    >
      {/* Icon kutipan */}
      <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-2 font-extrabold leading-none">
        “
      </div>

      {/* Isi testimonial */}
      <p
        className="max-w-2xl sm:max-w-3xl md:max-w-4xl 
        text-base sm:text-lg md:text-2xl lg:text-3xl 
        font-serif leading-relaxed text-gray-800 mb-10 px-2 sm:px-4 text-white"
      >
        Saptaloka Creative truly transformed our brand’s online presence through
        powerful and engaging social media storytelling. Their strategic
        approach and creative execution made every campaign feel authentic and
        impactful, helping us connect deeply with our audience and grow our
        business visibility.
      </p>

      {/* Nama & jabatan */}
      <div className="space-y-1">
        <h4 className="text-base sm:text-lg md:text-xl font-semibold text-gray-400">
          Muhammad Novanto
        </h4>
        <p className="text-gray-200 text-xs sm:text-sm md:text-base">
          Saptaloka Creative | Chief Executive Officer
        </p>
      </div>
    </section>
  );
}
