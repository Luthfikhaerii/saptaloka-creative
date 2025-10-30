import Image from "next/image";

export default function AboutSection(){
    return(
        <section className="bg-black text-white w-full py-24 px-6 md:px-24 ">
      {/* Label */}
      <div className="border-t border border-gray-700 mb-10 mt-10"></div>
      <p className="text-xs text-gray-400 tracking-widest mb-4">ABOUT</p>

      {/* Deskripsi */}
      <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-7xl">
        Phantom is a global Technology Creative studio, elevating both real and
        digital worlds. We partner with companies and collaborators aspiring to
        lead the way in marketing, brand and innovation, creating together in
        unexpected and exceptional ways.
      </h2>
    </section>
    )
}