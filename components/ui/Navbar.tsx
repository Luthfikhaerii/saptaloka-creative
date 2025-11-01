"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black backdrop-blur-md">
      <div className="flex p-2 w-full justify-between">  {/* Location & Contact */}
        <div className="flex w-full justify-between items-center px-4">
          <p className="text-white p-2 font-bold">SAPTALOKA</p>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="#" className="text-white px-4 hover:text-white">
            Bandung, Indonesia
          </Link>
        </div>
        <button className="w-28 bg-white text-black font-semibold px-2 py-1 rounded-xl hover:bg-gray-200 transition">
          Let’s Talk
        </button>
      </div>
    </nav>
  );
}
