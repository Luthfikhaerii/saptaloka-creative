import { Cog6ToothIcon, PencilSquareIcon, PuzzlePieceIcon } from "@heroicons/react/16/solid";
import { PlayCircleIcon } from "lucide-react";

export default function ServiceSection() {
    return(
        <section className="bg-white flex items-center justify-center">
        <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="relative w-full md:h-[35rem] bg-blue-100 flex items-center justify-center overflow-hidden shadow-2xl">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/videos/creative-bg.mp4"
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            >
              Browser Anda tidak mendukung tag video.
            </video>
          </div>
          <div className="flex flex-col px-20 pt-10 pb-14">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">
              OUR SERVICES&deg;
            </p>
            <div className="w-24 h-1 bg-blue-500 mb-6"></div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black mb-6">
              Digital Creative<br />Marketing
            </h2>

            <p className="text-gray-700 text-lg mb-10 max-w-lg">
              We work with our Clients by providing these services:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-center space-x-4">
                <PlayCircleIcon className="h-10 w-10 text-blue-600" /> {/* Ikon */}
                <p className="text-xl font-medium text-gray-800">Social Media Management</p>
              </div>

              {/* Item Layanan 2: Project Based */}
              <div className="flex items-center space-x-4">
                <PuzzlePieceIcon className="h-10 w-10 text-blue-600" /> {/* Ikon */}
                <p className="text-xl font-medium text-gray-800">Content Video</p>
              </div>

              {/* Item Layanan 3: Managed Services */}
              <div className="flex items-center space-x-4">
                <Cog6ToothIcon className="h-10 w-10 text-blue-600" /> {/* Ikon */}
                <p className="text-xl font-medium text-gray-800">Photo Product</p>
              </div>

              {/* Item Layanan 4: Design Services */}
              <div className="flex items-center space-x-4">
                <PencilSquareIcon className="h-10 w-10 text-blue-600" /> {/* Ikon */}
                <p className="text-xl font-medium text-gray-800">Analisyst</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    )
}
