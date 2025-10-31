// components/PortfolioSection.jsx

const PortfolioSection = () => {
  return (
   <section className="w-full bg-white py-24 px-8 flex flex-col items-center text-center">
      {/* Icon kutipan */}
      <div className="text-5xl text-black mb-8 leading-none">“</div>

      {/* Isi testimonial */}
      <p className="max-w-4xl text-2xl md:text-3xl font-serif leading-relaxed text-black mb-10">
        Visual Domain truly brought the success stories of our Thryv customers
        to life through captivating video testimonials. Their expertise and
        creativity shone through in each video, showcasing the positive impact
        Thryv has had on businesses in Australia, New Zealand and the USA.
      </p>

      {/* Nama & jabatan */}
      <div>
        <h4 className="text-lg font-semibold text-gray-900">
          Tami Cannizzaro
        </h4>
        <p className="text-gray-500 text-sm">
          Thryv | Chief Marketing Officer
        </p>
      </div>
    </section>
  );
};

export default PortfolioSection;