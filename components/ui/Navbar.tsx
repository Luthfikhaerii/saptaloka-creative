"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-gradient-to-b from-black/40 via-black/20 to-transparent text-white">
      <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 md:px-10 py-3 font-mono text-xs sm:text-sm tracking-wide gap-3 md:gap-6">
        
        {/* LOGO */}
        <div className="flex items-center">
          <img
            src="/logo2.png"
            alt="Logo"
            className="w-20 sm:w-24 h-auto"
          />
        </div>

        {/* STATUS */}
        <div className="hidden sm:flex items-center gap-2">
          <div className="grid grid-cols-3 gap-[1px] opacity-60">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 bg-gray-300" />
            ))}
          </div>
          <span className="uppercase text-gray-200 text-[11px] sm:text-[13px]">
            Status [Active]
          </span>
        </div>

        {/* DESCRIPTION */}
        <div className="hidden md:block text-[9px] sm:text-[10px] max-w-[120px] leading-relaxed text-gray-200">
          SAPTALOKA CREATIVE IS A DIGITAL AGENCY CRAFTING STRATEGIC CONTENT.
        </div>

        {/* LOCATION & TIME */}
        <div className="text-[9px] sm:text-[10px] text-right leading-snug">
          <div className="flex items-center justify-end gap-2">
            <div className="w-2 h-2 bg-white rounded-full" />
            <span className="font-semibold text-white whitespace-nowrap">
              Bandung, ID
            </span>
          </div>
          <div className="font-semibold text-white whitespace-nowrap">
            23:47 GMT+7
          </div>
          <div className="text-gray-400 mt-1 hidden sm:block whitespace-nowrap">
            🌙 Tokyo, JP <br /> 01:47 GMT+9
          </div>
        </div>

        {/* BUTTON */}
        <button className="w-full sm:w-auto bg-white text-black font-semibold px-4 sm:px-6 py-2 rounded-full hover:bg-gray-200 transition mt-2 sm:mt-0">
          Let’s Talk
        </button>
      </div>
    </nav>
  );
}
