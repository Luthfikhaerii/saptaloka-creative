import Image from "next/image";

export default function TaglineSection() {
    return (
        <section className="relative bg-[#1C1C1C] w-full flex flex-col items-end justify-end pb-16 pt-24 sm:py-24 lg:my-32 bg-[#1C1C1C] overflow-hidden text-end px-6 max-w-7xl">
            <div className="border-t border-gray-400 mb-8 sm:mb-10 mt-20 w-full"></div>
            {/* Subtitle */}
            <p className="text-gray-300 text-end text-xs sm:text-sm md:text-base mb-4 sm:mb-6">
                Why partner with Saptaloka Creative?
            </p>

            {/* Main text */}
            <div
                className="relative font-extrabold text-white leading-[0.9] 
        text-[1.8rem] sm:text-[2.5rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem]
        flex flex-col items-end justify-end gap-2 sm:gap-4"
            >
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                    <span>WE&apos;RE A</span>

                    {/* Gambar tengah pertama */}
                    <span className="inline-block overflow-hidden rounded-md sm:rounded-lg align-middle">
                        <Image
                            src="/creativemarketing3.jpg"
                            alt="Creative work"
                            width={150}
                            height={100}
                            className="object-cover w-[50px] h-[35px] sm:w-[90px] sm:h-[60px] md:w-[120px] md:h-[80px] lg:w-[150px] lg:h-[100px] rounded-md"
                        />
                    </span>

                    <span>CREATIVE</span>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                    {/* Gambar tengah kedua */}
                    <span className="inline-block overflow-hidden rounded-md sm:rounded-lg align-middle">
                        <Image
                            src="/creativemarketing4.jpg"
                            alt="Powerhouse work"
                            width={130}
                            height={90}
                            className="object-cover w-[45px] h-[30px] sm:w-[80px] sm:h-[55px] md:w-[110px] md:h-[75px] lg:w-[130px] lg:h-[90px] rounded-md"
                        />
                    </span>

                    <span>POWERHOUSE</span>
                </div>
            </div>

            {/* Blue circle accent */}
           
        </section>
    );
}
