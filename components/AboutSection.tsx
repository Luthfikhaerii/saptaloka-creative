import Image from "next/image";

export default function AboutSection(){
    return(
        <section className="bg-[#1C1C1C] text-white w-full py-24 px-6 md:px-24 ">
      {/* Label */}
      <div className="border-t border border-gray-700 mb-10 mt-10"></div>
      <p className="text-xs text-gray-400 tracking-widest mb-4">ABOUT</p>

      {/* Deskripsi */}
      <h2 className="text-3xl md:text-4xl font-bold leading-tight max-w-7xl">
       Saptaloka Creative is a Bandung-based creative agency specializing in social media marketing and digital storytelling. We collaborate with brands and businesses that aspire to lead in creativity, strategy, and innovation — crafting experiences that connect, engage, and inspire.
      </h2>
    </section>
    )
}