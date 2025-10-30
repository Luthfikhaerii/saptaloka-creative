import Image from "next/image";

export default function NewsCard({ title, imageSrc, category }: { title: string, imageSrc: string, category: string }) {
    return (
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
    )
}



