// components/PortfolioSection.jsx

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Instagram Management",
      subtitle: "Portfolio",
      category: "INSTAGRAM MANAGEMENT PORTFOLIO"
    },
    {
      id: 2,
      title: "Marketplace Marketing",
      subtitle: "Portfolio",
      category: "MARKETPLACE MARKETING PORTFOLIO"
    },
    {
      id: 3,
      title: "TikTok Management",
      subtitle: "Portfolio",
      category: "TIKTOK MANAGEMENT PORTFOLIO"
    },
    {
      id: 4,
      title: "Ads Management",
      subtitle: "Portfolio",
      category: "ADS MANAGEMENT PORTFOLIO"
    }
  ];

  return (
    <section className="py-16 px-4 bg-black ">
      <div className="max-w-6xl mx-auto relative">
        {/* Section Header */}
        <div className="text-start mb-12">
          <h1 className="text-6xl font-extrabold text-white mb-4">Portfolio</h1>
          <span className="text-lg bg-blue-400 text-white font-semibold p-2">
            Browse to see our most recent and noteworthy projects.
          </span>
        </div>

        {/* Portfolio Items */}
        <div className="grid grid-cols-2 gap-10">
          <div className="w-[500px] h-[500px] bg-white">

          </div>
           <div className="w-[500px] h-[500px] bg-red-200 absolute top-0 right-0">

          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;