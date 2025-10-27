import Image from "next/image";
import ThreeDCard from "@/components/ThreeDCard";
import { PlayCircleIcon, PuzzlePieceIcon, Cog6ToothIcon, PencilSquareIcon, ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'; // Contoh ikon dari Heroicons
import BrandCarousel from "@/components/BrandCarousel";
import PortfolioSection from "@/components/Portofolio";

export default function Home() {
  return (
    <>
      <section className="relative w-full h-screen flex items-center justify-center bg-black">
        {/* Background Video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/videos/creative-bg.mp4"
          autoPlay
          loop
          muted
        />
        <div className="relative h-screen w-screen bg-black/70 text-white flex justify-center items-center">
          <div>
            <p className="text-[10vw] font-bold leading-[70px]">SAPTALOKA</p>
            <p className="text-[5vw] font-bold">CREATIVE</p>
          </div>

        </div>

      </section>
      <section className="min-h-screen bg-black text-white flex flex-col items-center pt-28 pb-28 w-full">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-4xl max-w-xl font-extrabold text-center mb-4">
            <p className="text-blue-400">Creative Agency That</p>  Builds Memorable Brands
          </h1>
          <p className="text-xs md:text-base text-white/70 text-center mb-10 max-w-3xl">
            We help enterprises accelerate digital transformation with tech consultancy,
            custom software development, and team augmentation.
          </p>

        </div>

        <div className="flex w-[90%] gap-10 flex-wrap justify-evenly">
          {/* CARD 1 */}
          <div
            className="w-[350px] h-[350px] bg-black/5 rounded-xl cursor-pointer 
      transition-all duration-300 ease-out perspective-[1200px]"
          >
            <div
              className="w-full h-full rounded-xl shadow-2xl 
        transition-all duration-200 ease-out
        bg-cover bg-center rotate-y-[25deg]"
              style={{ backgroundImage: `url(/cards/card1.png)` }}
            />
          </div>
          {/* CARD 2 */}
          <div
            className="w-[350px] h-[350px] bg-black/5 rounded-xl cursor-pointer 
      transition-all duration-300 ease-out"
          >
            <div
              className="w-full h-full rounded-xl shadow-2xl 
        transition-all duration-200 ease-out
        bg-cover bg-center"
              style={{ backgroundImage: `url(/cards/card2.png)` }}
            />
          </div>
          {/* CARD 3 */}
          <div
            className="w-[350px] h-[350px] bg-black/5 rounded-xl cursor-pointer 
      transition-all duration-300 ease-out perspective-[1200px]"
          >
            <div
              className="w-full h-full rounded-xl shadow-2xl 
        transition-all duration-200 ease-out
        bg-cover bg-center rotate-y-[-25deg]"
              style={{ backgroundImage: `url(/cards/card3.png)` }}
            />
          </div>

        </div>
      </section>

      <section className="bg-white min-h-screen pt-10 px-4 sm:px-8 lg:px-16 w-full mb-6">
        <div className="max-w-7xl mx-auto relative w-full">

          {/* Kontainer Utama untuk Grid/Tata Letak */}
          <div className="w-full">

            {/* Kolom Kiri - Teks dan Jumlah */}
            <div className=" justify-start z-20 relative">
              <div className="flex justify-end absolute right-0 top-0 w-full ">
                <div className="w-[800px] h-72 bg-gray-200 relative border border-gray-300 shadow-lg">
                  <Image
                    src="/cards/card3.png"
                    alt="Close-up of foot in black boot resting on blue jeans"
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
              </div>

              {/* Teks "CREATIVE MARKETING" yang Bertumpuk/Berbayang */}
              <div className="mb-6 pt-48">
                <p className="lg:text-3xl font-extrabold opacity-30 outline-text-yellow tracking-tight leading-none relative -translate-x-1 -translate-y-1">
                  CREATIVE MARKETING
                </p>
                <p className="lg:text-4xl font-extrabold opacity-50 outline-text-blue tracking-tight leading-none relative -translate-x-1 -translate-y-1">
                  CREATIVE MARKETING
                </p>
                <p className="lg:text-5xl font-extrabold opacity-50 outline-text-black tracking-tight leading-none relative -translate-x-1 -translate-y-1">
                  CREATIVE MARKETING
                </p>
                <h1 className="lg:text-6xl font-extrabold text-black tracking-tight leading-none relative">
                  CREATIVE MARKETING
                </h1>
              </div>

              {/* Subteks/Deskripsi */}
              <p className="text-sm md:text-base text-gray-700 max-w-2xl mb-6">
                Introduce yourself with content that sparks conversation and disrupts the traditional marketing model. Be memorable. Feel authentic. Make an impact.
              </p>


              {/* Jumlah Marketing Channels */}
              <div className="flex items-start mb-16 justify-between w-full">
                <div className="flex items-center">
                  <span className="text-6xl sm:text-7xl font-bold text-black mr-4">
                    100%
                  </span>
                  <span className="text-2xl text-2xl font-bold text-white bg-black px-3 py-1 tracking-wider">
                    PROFESIONALISM
                  </span>
                </div>
                <div className="w-[450px] h-32 bg-gray-200 relative border border-gray-300 shadow-lg mt-[-30px]">
                  <Image
                    src="/cards/card3.png"
                    alt="Close-up of foot in black boot resting on blue jeans"
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
              </div>
            </div>
            {/* Kolom Kanan - Gambar Utama dan Gambar Kecil */}

          </div>
        </div>
      </section>

      <section className="bg-white flex items-center justify-center">
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center">

          {/* Kolom Kiri: Video Showcase (menggantikan gambar ponsel) */}
          <div className="relative w-full h-80 sm:h-96 md:h-[30rem] lg:h-[35rem] bg-blue-100 flex items-center justify-center overflow-hidden shadow-2xl">
            {/* Elemen video untuk menampilkan konten */}
            {/* Ganti 'your-video-path.mp4' dengan path ke file video Anda di public/ */}
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/videos/creative-bg.mp4" // <--- Ganti dengan path video Anda
              autoPlay
              loop
              muted
              playsInline
              controls={false} // Atur ke true jika ingin kontrol video muncul
            >
              Browser Anda tidak mendukung tag video.
            </video>
            {/* Jika ingin overlay untuk play button atau branding, bisa ditambahkan di sini */}
          </div>

          {/* Kolom Kanan: Teks dan Daftar Layanan */}
          <div className="flex flex-col px-20">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">
              OUR SERVICES&deg;
            </p>
            <div className="w-24 h-1 bg-blue-500 mb-6"></div> {/* Garis pemisah */}

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black mb-6 leading-tight">
              Digital Creative<br />Marketing
            </h2>

            <p className="text-gray-700 text-lg mb-10 max-w-lg">
              We work with our Clients by providing these services:
            </p>


            {/* Daftar Layanan */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Item Layanan 1: Agile Development */}
              <div className="flex items-center space-x-4">
                <PlayCircleIcon className="h-10 w-10 text-blue-600" /> {/* Ikon */}
                <p className="text-xl font-medium text-gray-800">Agile Development</p>
                <span className="ml-auto text-blue-600 font-bold">&gt;</span>
              </div>

              {/* Item Layanan 2: Project Based */}
              <div className="flex items-center space-x-4">
                <PuzzlePieceIcon className="h-10 w-10 text-blue-600" /> {/* Ikon */}
                <p className="text-xl font-medium text-gray-800">Project Based</p>
                <span className="ml-auto text-blue-600 font-bold">&gt;</span>
              </div>

              {/* Item Layanan 3: Managed Services */}
              <div className="flex items-center space-x-4">
                <Cog6ToothIcon className="h-10 w-10 text-blue-600" /> {/* Ikon */}
                <p className="text-xl font-medium text-gray-800">Managed Services</p>
                <span className="ml-auto text-blue-600 font-bold">&gt;</span>
              </div>

              {/* Item Layanan 4: Design Services */}
              <div className="flex items-center space-x-4">
                <PencilSquareIcon className="h-10 w-10 text-blue-600" /> {/* Ikon */}
                <p className="text-xl font-medium text-gray-800">Design Services</p>
                <span className="ml-auto text-blue-600 font-bold">&gt;</span>
              </div>
            </div>
          </div>

        </div>
      </section>


      <PortfolioSection />




      <section className="py-20">
        <h2 className="text-center text-5xl font-extrabold mb-6">Clients</h2>
        <p className="text-sm  text-center md:text-base text-gray-700 mb-6">
                Introduce yourself with content that sparks conversation and disrupts the traditional marketing model. Be memorable. Feel authentic. Make an impact.
              </p>
        <BrandCarousel />
      </section>

      <section className="bg-white z-20">
        {/* Kontainer Utama dengan Warna Biru */}

        <div className="min-h-[40rem] flex flex-col justify-center z-10">
          <div className="bg-black h-[25rem] flex flex-col justify-center relative z-10 absolute">
          </div>
          {/* Kontainer Flex/Grid untuk Tata Letak Utama */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center max-w-[90rem] mx-auto w-full absolute z-20">
            {/* Kolom Kiri: Judul dan Tombol */}
            <div className="flex-shrink-0 w-full lg:w-[30%] p-8 lg:py-0 lg:pl-16 lg:pr-12 text-white">
              <p className="uppercase text-sm font-semibold tracking-widest opacity-80 mb-2">
                OUR IMPACT
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
                What's new at WGS
              </h2>
              <a
                href="#" // Ganti dengan path yang sesuai
                className="inline-block border-2 border-white text-white px-6 py-3 font-semibold text-sm hover:bg-white hover:text-blue-600 transition duration-300"
              >
                See more news
              </a>
            </div>

            {/* Kolom Kanan: Carousel / Daftar Berita */}
            <div className="flex-grow overflow-x-hidden relative w-full lg:w-[75%] py-10 lg:py-16">

              {/* Kontainer Flex untuk Card Berita (simulasi scroll horizontal) */}
              {/* Catatan: Untuk fungsionalitas carousel yang sebenarnya, Anda perlu JS */}
              <div className="flex px-8 lg:px-0">

                {/* Card Berita 1 */}
                <NewsCard
                  title="We are living through a technological revolution unlike a..."
                  imageSrc="/cards/card1.png" // Ganti dengan path gambar Anda
                  category="FROM STANDALONE MODELS TO FULLY INTEGRATED..."
                />

                {/* Card Berita 2 (Pusat) */}
                <NewsCard
                  title="The Hidden Complexity of Enterprise Procurement In today's..."
                  imageSrc="/cards/card2.png" // Ganti dengan path gambar Anda
                  category="REIMAGINING PROCUREMENT: HOW ZYCUS SOURCE-..."
                />

                {/* Card Berita 3 (Terpotong) */}
                <NewsCard
                  title="The Agile Transformation Challenge model"
                  imageSrc="/cards/card3.png" // Ganti dengan path gambar Anda
                  category="TRANSFORMING YOUR AGILE..."
                />

                {/* Tambahkan card lain jika diperlukan */}
              </div>

              {/* Tombol Navigasi (Untuk tampilan, tidak fungsional tanpa JS) */}
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
      <section className="bg-[#46b6e8] py-20 sm:py-24 lg:py-32 flex items-center justify-center">
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
    </>
  );
}

const NewsCard = ({ title, imageSrc, category }: { title: string, imageSrc: string, category: string }) => (
  // Card untuk setiap item berita
  <div className="flex-shrink-0 w-80 sm:w-96 md:w-[20rem] lg:w-[20rem] h-[30rem] bg-gray-900 text-white relative overflow-hidden shadow-xl mr-6 ">
    {/* Gambar Latar Belakang */}
    <div className="absolute inset-0">
      {/* Menggunakan Image dari Next.js untuk optimasi */}
      <Image
        src={imageSrc}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="opacity-70" // Sedikit opacity agar teks lebih mudah dibaca
      />
    </div>

    {/* Overlay Gradient (untuk meningkatkan kontras teks) */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

    {/* Konten Teks */}
    <div className="relative p-6 pt-64 flex flex-col justify-end h-full">
      {/* Kategori / Subjudul (Jika ada) */}
      <p className="text-xs uppercase tracking-widest text-white/70 mb-2">{category}</p>

      {/* Judul Berita */}
      <h3 className="text-3xl font-extrabold leading-snug">
        {title}
      </h3>
    </div>
  </div>
);