import { Mail, MessageCircle, Instagram, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white pt-16 pb-10 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* ====== TOP SECTION ====== */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-10">
          {/* === 1. Logo & Tagline === */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="mb-3">
              <p className="text-3xl sm:text-4xl font-extrabold tracking-wide">
                SAPTALOKA
              </p>
              <p className="text-xs sm:text-sm font-light tracking-widest opacity-70">
                Grow your brand with creativity
              </p>
            </div>
          </div>

          {/* === 2. Social Icons Only === */}
          <div className="flex space-x-3">
            {[
              { icon: MessageCircle, href: "https://wa.me/", label: "WhatsApp" },
              { icon: Mail, href: "mailto:example@example.com", label: "Email" },
              { icon: Instagram, href: "https://www.instagram.com/", label: "Instagram" },
              { icon: Phone, href: "tel:+6281234567890", label: "Phone" },
            ].map(({ icon: Icon, href, label }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-10 h-10 flex items-center justify-center bg-gray-900 border border-gray-700 rounded-full hover:bg-gray-800 hover:border-gray-500 transition duration-300"
              >
                <Icon className="w-5 h-5 text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* ====== BOTTOM SECTION ====== */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-400 gap-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <a href="/privacy" className="hover:text-white transition duration-200">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition duration-200">
              Terms & Conditions
            </a>
          </div>

          <p className="text-center md:text-right">
            © {new Date().getFullYear()} Saptaloka Creative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
