// components/PortfolioSection.jsx

const PortfolioSection = () => {
  return (
   <section className="w-full bg-white py-24 px-8 flex flex-col items-center text-center">
      {/* Icon kutipan */}
      <div className="text-7xl text-black mb-2 font-extrabold leading-none">“</div>

      {/* Isi testimonial */}
      <p className="max-w-4xl text-2xl md:text-3xl font-serif leading-relaxed text-black mb-10">
       Saptaloka Creative truly transformed our brand’s online presence through powerful and engaging social media storytelling. Their strategic approach and creative execution made every campaign feel authentic and impactful, helping us connect deeply with our audience and grow our business visibility.
      </p>

      {/* Nama & jabatan */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900">
          Muhammad Novanto
        </h4>
        <p className="text-gray-500 text-sm">
          Saptaloka Creative | Chief Executive Officer
        </p>
      </div>
    </section>
  );
};

export default PortfolioSection;