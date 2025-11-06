export default function CallToActionSection() {
    return(
        <section className="bg-[#46b6e8] py-20 sm:py-24 lg:py-32 flex items-center justify-center ">
        <div className="text-center px-4">

          {/* Teks Kecil - CONTACT US */}
          <p className="text-white uppercase text-sm sm:text-base tracking-widest font-medium mb-4">
            CONTACT US
          </p>

          {/* Teks Besar - LET'S WORK TOGETHER. */}
          <h2 className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-none tracking-tight">

            {/* Teks dengan penyesuaian untuk titik oranye/kuning */}
            <span className="relative inline-block">
              LET
              {/* Titik oranye/kuning kecil setelah 'T' (simulasi) */}
              <span className="absolute -top-3 sm:-top-4 -right-1 w-2 h-2 bg-orange-400 rounded-full"></span>
              'S WORK TOGETHER
            </span>

            {/* Titik Hitam Besar di Akhir (simulasi) */}
            <span className="inline-block relative">
              .
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-black rounded-full"></span>
            </span>
          </h2>
        </div>
      </section>
    )
}