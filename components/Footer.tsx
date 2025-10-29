import { Mail, MessageCircle, MessageCircleDashed, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-12 pb-8 px-4 sm:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8">
                    <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
                        {/* Ganti dengan komponen Image atau SVG Logo Anda */}
                        <div className="w-32 h-12 relative mb-2">
                            <p className="text-3xl font-bold tracking-wider">SAPTALOKA</p>
                            <p className="text-xs font-light tracking-widest opacity-70">Grow your brand</p>
                        </div>
                        
                    </div>

                    {/* 2. Navigasi */}
                    <nav className="flex flex-wrap justify-center md:justify-start space-x-6 sm:space-x-10 mb-8 md:mb-0 text-lg font-medium">
                        {['Home', 'Portfolio', 'Contact', 'Documentation'].map((item) => (
                            <a
                                key={item}
                                href={`/${item.toLowerCase().replace(' ', '-')}`}
                                className="text-white hover:text-gray-400 transition duration-200 block py-2 md:py-0"
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* 3. Ikon Sosial */}
                    <div className="flex space-x-3">
                        {/* Ikon Sosial dengan background gelap dan border */}
                        <a
                            href="https://wa.me/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center bg-gray-800 border border-gray-700 hover:bg-gray-700 transition duration-200"
                            aria-label="WhatsApp"
                        >
                            <MessageCircle className="w-5 h-5 text-white"/>
                        </a>
                        <a
                            href="mailto:example@example.com"
                            className="w-10 h-10 flex items-center justify-center bg-gray-800 border border-gray-700 hover:bg-gray-700 transition duration-200"
                            aria-label="Email"
                        >
                            <Mail className="w-5 h-5 text-white" />
                        </a>
                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center bg-gray-800 border border-gray-700 hover:bg-gray-700 transition duration-200"
                            aria-label="Instagram"
                        >
                            <Phone className="w-5 h-5 text-white" />
                        </a>
                    </div>
                </div>

                {/* Garis Pembatas */}
                <div className="border-t border-gray-700 my-6"></div>

                {/* Baris Bawah: Kebijakan dan Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

                    {/* Link Kebijakan */}
                    <div className="flex space-x-6 mb-4 md:mb-0">
                        <a href="/privacy" className="hover:text-white transition duration-200">
                            Privacy & Policy
                        </a>
                        <a href="/terms" className="hover:text-white transition duration-200">
                            Terms Condition
                        </a>
                    </div>

                    {/* Copyright */}
                    <p>
                        Copyright Saptloka© 2025. All rights reserved
                    </p>
                </div>
            </div>
        </footer>
    )
}