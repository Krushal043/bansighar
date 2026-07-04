"use client";

import { FaWhatsapp } from "react-icons/fa6";

export default function FloatingInquire() {
  return (
    <a
      href="https://wa.me/918866682122?text=Hi%20Banshighar%20Enterprise,%20I'm%20interested%20in%20inquiring%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white rounded-full w-14 h-14 flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 shadow-2xl shadow-[#25D366]/20 cursor-pointer hover:shadow-[#25D366]/40"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />
    </a>
  );
}
