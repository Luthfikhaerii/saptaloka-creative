"use client";

import { useRef, useState } from "react";

export default function VideoPlayer({ autoPlay = false, loop = true }) {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(autoPlay);

    return (
        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 md:px-10 overflow-hidden">
            <video
                ref={videoRef}
                src="/videos/abstrak.mp4"
                poster="true"
                autoPlay={true}
                loop={true}
                muted
                playsInline
                className="w-full h-full object-cover"
            />
        </div>
    );
}
