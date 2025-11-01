import { Cog6ToothIcon, PencilSquareIcon, PuzzlePieceIcon } from "@heroicons/react/16/solid";
import { PlayCircleIcon } from "lucide-react";
import Image from "next/image";

export default function ServiceSection() {
    return(
    <section className="w-full bg-[#d8d5c8] text-black py-24 px-8 md:px-20">
      {/* Subjudul */}
      <p className="text-xs tracking-wide text-center mb-2">
        Pushing the boundaries of video content
      </p>

      {/* Judul utama */}
      <h1 className="text-[5rem] md:text-[12rem] font-extrabold leading-none text-center">
        SOLUTIONS
      </h1>

      <hr className="border-black my-8" />

      {/* Konten dua kolom */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Kiri: teks */}
        <div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            SOCIAL MEDIA MANAGEMENT
          </h2>

          <p className="text-sm font-light mb-4">Services included:</p>

          {/* Daftar kategori */}
          <div className="flex flex-wrap gap-2 mb-6">
            {["Explainer", "Product", "TVC", "Social", "Testimonial"].map(
              (item, i) => (
                <span
                  key={i}
                  className="border border-black px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </span>
              )
            )}
            <button className="bg-black text-white text-sm px-4 py-1 rounded-full">
              See more
            </button>
          </div>
        </div>

        {/* Kanan: gambar / video */}
        <div className="flex justify-center">
          <Image
            src="/images/live-action.jpg" // Ganti dengan path gambar kamu
            alt="Live Action"
            width={500}
            height={350}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>


      <hr className="border-black my-8" />

      {/* Konten dua kolom */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Kiri: teks */}
        <div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            SOCIAL MEDIA MANAGEMENT
          </h2>

          <p className="text-sm font-light mb-4">Services included:</p>

          {/* Daftar kategori */}
          <div className="flex flex-wrap gap-2 mb-6">
            {["Explainer", "Product", "TVC", "Social", "Testimonial"].map(
              (item, i) => (
                <span
                  key={i}
                  className="border border-black px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </span>
              )
            )}
            <button className="bg-black text-white text-sm px-4 py-1 rounded-full">
              See more
            </button>
          </div>
        </div>

        {/* Kanan: gambar / video */}
        <div className="flex justify-center">
          <Image
            src="/images/live-action.jpg" // Ganti dengan path gambar kamu
            alt="Live Action"
            width={500}
            height={350}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>

      <hr className="border-black my-8" />

      {/* Konten dua kolom */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Kiri: teks */}
        <div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">
            LIVE ACTION
          </h2>

          <p className="text-sm font-light mb-4">Services included:</p>

          {/* Daftar kategori */}
          <div className="flex flex-wrap gap-2 mb-6">
            {["Explainer", "Product", "TVC", "Social", "Testimonial"].map(
              (item, i) => (
                <span
                  key={i}
                  className="border border-black px-3 py-1 rounded-full text-sm"
                >
                  {item}
                </span>
              )
            )}
            <button className="bg-black text-white text-sm px-4 py-1 rounded-full">
              See more
            </button>
          </div>
        </div>

        {/* Kanan: gambar / video */}
        <div className="flex justify-center">
          <Image
            src="/images/live-action.jpg" // Ganti dengan path gambar kamu
            alt="Live Action"
            width={500}
            height={350}
            className="rounded-xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
    )
}
