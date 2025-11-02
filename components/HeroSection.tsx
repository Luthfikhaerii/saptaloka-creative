import {Zalando_Sans} from 'next/font/google';

const geist = Zalando_Sans({
  subsets: ['latin'],
})

export default function HeroSection() {
    return (
        <section className="bg-[#1C1C1C] text-white flex flex-col justify-center px-10 md:px-10 pt-16 pb-10 ">
            {/* Header */}
            <div></div>
            <div className="border-t border-gray-700 mb-10 mt-20"></div>
            <div className=" items-start mb-10 w-full">
                <div>
                    <p className="text-xs tracking-widest text-gray-400 mb-2">AGENCY</p>
                    <h1 className={"text-7xl font-extrabold leading-[0.9] "+geist.className} >
                        CREATIVE FOCUSED AND IMPACT DRIVEN®
                    </h1>
                </div>
            </div>
        </section>
    )
}