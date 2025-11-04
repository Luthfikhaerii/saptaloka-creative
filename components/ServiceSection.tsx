import Image from "next/image";

export default function ServiceSection() {
  return (
    <section className="w-full bg-[#d8d5c8] text-black py-16 sm:py-20 lg:py-28 px-6 sm:px-10 md:px-20">
      {/* Subjudul */}
      <p className="text-xs sm:text-sm tracking-wide text-center mb-2">
        Pushing the boundaries of video content
      </p>

      {/* Judul utama */}
      <h1 className="text-[3rem] sm:text-[6rem] md:text-[9rem] lg:text-[12rem] font-extrabold leading-none text-center break-words">
        SOLUTIONS
      </h1>

      <hr className="border-black my-10" />

      {/* === 1. SOCIAL MEDIA MANAGEMENT === */}
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Kiri: teks */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            SOCIAL MEDIA MANAGEMENT
          </h2>
          <p className="text-sm sm:text-base font-light mb-4">
            Services included:
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
            {["Story", "Scheduling Upload", "Admin", "Reporting"].map((item, i) => (
              <span
                key={i}
                className="border border-black px-3 py-1 rounded-full text-xs sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Kanan: gambar */}
        <div className="flex justify-center">
          <Image
            src="/service/service1.jpg"
            alt="Social Media Management"
            width={500}
            height={350}
            className="rounded-xl shadow-lg object-cover w-full max-w-[500px] h-auto"
          />
        </div>
      </div>

      <hr className="border-black my-10" />

      {/* === 2. VIDEO MARKETING === */}
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Kiri: teks */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            VIDEO MARKETING
          </h2>
          <p className="text-sm sm:text-base font-light mb-4">
            Services included:
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
            {["Shooting", "Content Brief", "Editing", "Riset"].map((item, i) => (
              <span
                key={i}
                className="border border-black px-3 py-1 rounded-full text-xs sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Kanan: gambar */}
        <div className="flex justify-center">
          <Image
            src="/service/service2.avif"
            alt="Video Marketing"
            width={500}
            height={350}
            className="rounded-xl shadow-lg object-cover w-full max-w-[500px] h-auto"
          />
        </div>
      </div>

      <hr className="border-black my-10" />

      {/* === 3. INSTAGRAM FEEDS === */}
      <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Kiri: teks */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4">
            INSTAGRAM FEEDS
          </h2>
          <p className="text-sm sm:text-base font-light mb-4">
            Services included:
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
            {["Concept", "Design", "Photo Shoot"].map((item, i) => (
              <span
                key={i}
                className="border border-black px-3 py-1 rounded-full text-xs sm:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Kanan: gambar */}
        <div className="flex justify-center">
          <Image
            src="/service/service3.jpg"
            alt="Instagram Feeds"
            width={500}
            height={350}
            className="rounded-xl shadow-lg object-cover w-full max-w-[500px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
