import Image from "next/image";
import SliderHero from "./ui/SliderHero";

export default function TaglineSection() {
    return (
        <section className="relative w-full flex flex-col items-center justify-center py-28 bg-white overflow-hidden">
            {/* Subtitle */}
            <p className="text-sm text-gray-500 mb-4">
                Why partner with Visual Domain?
            </p>

            {/* Teks Utama */}
            <div className="relative text-center font-extrabold text-[3rem] md:text-[6rem] leading-none text-black">
                <span className="mr-4">WE&apos;RE A</span>

                {/* Gambar tengah pertama */}
                <span className="inline-block align-middle mx-2 rounded-xl overflow-hidden">
                    <Image
                        src="/section/1.png" // ganti dengan path gambarmu
                        alt="Creative work"
                        width={100}
                        height={80}
                        className="object-cover rounded-lg"
                    />
                </span>

                <span className="ml-2 block md:inline">CREATIVE</span>
                <br />

                {/* Gambar tengah kedua */}
                <span className="inline-block align-middle mx-2 rounded-xl overflow-hidden">
                    <Image
                        src="/section/2.png" // ganti dengan path gambarmu
                        alt="Powerhouse work"
                        width={100}
                        height={80}
                        className="object-cover rounded-lg"
                    />
                </span>

                <span className="ml-2 block md:inline">POWERHOUSE</span>
            </div>

            {/* Lingkaran biru di kanan atas */}
            <div className="absolute top-16 right-24 bg-sky-400 text-black text-sm font-semibold rounded-full w-32 h-32 flex items-center justify-center rotate-6">
                <p className="text-center px-4 leading-snug">
                    Crafting big<br />ideas at scale.
                </p>
            </div>

        </section>
    )
}