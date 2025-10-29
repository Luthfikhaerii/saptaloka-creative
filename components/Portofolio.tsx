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
    <section className="pt-28 pb-36 px-4 bg-black  relative">
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-start mb-12">
          <h1 className="text-6xl font-extrabold text-white mb-4">Portfolio</h1>
          <span className="text-lg bg-yellow-400 text-black font-semibold p-2">
            Browse to see our most recent and noteworthy projects.
          </span>
        </div>

        {/* Portfolio Items */}
        <div className="grid grid-cols-2 gap-10">
          <div className="w-[600px] h-[400px]">
            <img src={"/portfolio.png"} />
          </div>
          <div className="w-[600px] h-[300px] absolute top-0 right-0 text-center">
            <img src={"/portfolio2.jpg"} />
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;