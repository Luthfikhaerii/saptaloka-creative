"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black backdrop-blur-md">
      
      <div className="flex justify-end p-4">  {/* Location & Contact */}
        <div className="flex justify-end">
        <p className="max-w-xl text-gray-400 text-sm mt-6 leading-relaxed">
                Phantom is a technology-led creative agency crafting digital experiences
                for global brands. We merge creativity with technology to build powerful
                interactions that connect people and ideas.
            </p>
      </div>
        <div className="w-96 flex justify-between">
          <div className="text-right text-xs uppercase space-y-1">
            <p className="text-gray-400">Bandung, Indonesia</p>
            <p className="text-gray-400">15:00 GMT</p>
            <p className="text-gray-400 mt-2">Auckland, NZ</p>
            <p className="text-gray-400">04:00 GMT+13</p>

          </div>
          <button className="mt-4 bg-white text-black font-semibold px-2 py-2 rounded-xl hover:bg-gray-200 transition">
            Let’s Talk
          </button>
        </div>
      </div>
    </nav>
  );
}
