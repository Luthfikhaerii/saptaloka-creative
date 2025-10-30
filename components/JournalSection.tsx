import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import NewsCard from "./ui/NewsCard";

export default function JournalSection() {
    return(
        <section className="bg-white z-20">
        <div className="min-h-[40rem] flex flex-col justify-center z-10">
          <div className="bg-black h-[25rem] flex flex-col justify-center relative z-10 absolute">
          </div>
          <div className="flex flex-col lg:flex-row items-start lg:items-center max-w-[90rem] mx-auto w-full absolute z-20">
            <div className="flex-shrink-0 w-full lg:w-[30%] p-8 lg:py-0 lg:pl-16 lg:pr-12 text-white">
              <p className="uppercase text-sm font-semibold tracking-widest opacity-80 mb-2">
                OUR DOCUMENTATION
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
                On Duty
              </h2>
              <a
                href="#" 
                className="inline-block border-2 border-white text-white px-6 py-3 font-semibold text-sm hover:bg-white hover:text-blue-600 transition duration-300"
              >
                See more news
              </a>
            </div>

            <div className="flex-grow overflow-x-hidden relative w-full lg:w-[75%] py-10 lg:py-16">
              <div className="flex px-8 lg:px-0">
                <NewsCard
                  title="We are living through a technological revolution unlike a..."
                  imageSrc="/cards/card1.png" 
                  category="FROM STANDALONE MODELS TO FULLY INTEGRATED..."
                />
                <NewsCard
                  title="The Hidden Complexity of Enterprise Procurement In today's..."
                  imageSrc="/cards/card2.png" 
                  category="REIMAGINING PROCUREMENT: HOW ZYCUS SOURCE-..."
                />
                <NewsCard
                  title="The Agile Transformation Challenge model"
                  imageSrc="/cards/card3.png" 
                  category="TRANSFORMING YOUR AGILE..."
                />
              </div>
              <div className="absolute top-1/2 left-4 lg:left-0 transform -translate-y-1/2 z-10">
                <button
                  className="bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition duration-200 shadow-lg"
                  aria-label="Previous news item"
                >
                  <ArrowLeftIcon className="h-6 w-6" />
                </button>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
                <button
                  className="bg-white/80 hover:bg-white text-blue-600 p-3 rounded-full transition duration-200 shadow-lg"
                  aria-label="Next news item"
                >
                  <ArrowRightIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}