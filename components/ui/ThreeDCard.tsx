"use client";

import { useRef } from "react";

export default function ThreeDCard({ image }: { image: string }) {

  return (
    <div 
      className="w-[300px] h-[360px] bg-black/5 rounded-xl cursor-pointer 
      transition-all duration-300 ease-out perspective-[2200px]"
    >
      <div 
        className="w-full h-full rounded-xl shadow-2xl 
        transition-all duration-200 ease-out
        bg-cover bg-center rotate-y-[25deg]"
        style={{ backgroundImage: `url(${image})` }}
      />
    </div>
  );
}
