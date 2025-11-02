"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black/40 via-black/20 to-transparent text-[#1C1C1C]">
      <div className="flex items-center justify-between px-6 py-3 font-mono text-sm tracking-wide">
        {/* LOGO */}
        <div className="flex items-center gap-2">
          {/* Placeholder logo */}

            <img src="/logo2.png" alt="Logo" className="w-24 h-full"/>

        </div>

        {/* STATUS */}
        <div className="flex items-center gap-2">
          <div className="grid grid-cols-3 gap-[1px] opacity-50">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="w-1 h-1 bg-gray-400" />
            ))}
          </div>
          <span className="uppercase text-gray-100 text-[13px]">Status [Active]</span>
        </div>

        {/* DESCRIPTION */}
        <div className="text-start text-[8px] max-w-[100px] leading-relaxed text-white">
          SAPTALOKA CREATIVE IS A DIGITAL AGENCY CRAFTING STRATEGIC CONTENT.
        </div>

        {/* LOCATION & TIME */}
        <div className="text-right text-[8px] leading-snug">
          <div className="flex items-center justify-end gap-2">
            <div className="w-2 h-2 bg-white rounded-full" />
            <span className="font-semibold text-white">Bandung, ID</span>
          </div>
          <div className="font-semibold text-white">23:47 GMT+7</div>
          <div className="text-gray-400 mt-1">
            🌙 Tokyo, JP <br /> 01:47 GMT+9
          </div>
        </div>

        {/* BUTTON */}
        <button className="ml-4 bg-white text-black font-semibold px-5 py-2 rounded-full hover:bg-gray-200 transition">
          Let’s Talk
        </button>
      </div>
    </nav>
  );
}
