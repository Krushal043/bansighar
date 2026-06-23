"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Mail, Phone, MapPin, Clock, Send, ShieldCheck, CheckCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export const dynamic = "force-dynamic";

function ContactFormContent() {
  const searchParams = useSearchParams();
  const initialInquiry = searchParams.get("inquiry") || "";
  const initialService = searchParams.get("service") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [dynamicOptions, setDynamicOptions] = useState<string[]>([]);

  const standardOptions = [
    "Bespoke Commissions",
    "Space Layout Consultations",
    "Teak & Walnut Restoration",
    "White-Glove Delivery",
    "Stone Work",
    "Ceiling & 2x2 Folding Ceiling",
    "Electric Work",
    "Plumber Work",
    "AC Work",
    "Core Cutting",
    "PVC & Wooden Furniture",
    "Color Work",
    "Aluminium Window",
    "Office Partition",
    "Shower Glass",
    "All Glass Work",
    "ACP Elevation",
    "Aluminium Themes",
    "Premium Door Solutions",
    "Lamination Door",
    "Sunmica Door",
    "ACP Door",
    "PVC Door",
    "FRP Door",
  ];

  useEffect(() => {
    let subjectText = "";
    if (initialInquiry) {
      subjectText = `Inquiry: ${initialInquiry}`;
      setDynamicOptions([subjectText]);
    } else if (initialService) {
      const matched = standardOptions.find(
        (opt) => opt.toLowerCase() === initialService.toLowerCase()
      );
      if (matched) {
        subjectText = matched;
      } else {
        subjectText = `Service: ${initialService}`;
        setDynamicOptions([subjectText]);
      }
    }
    setFormData((prev) => ({
      ...prev,
      subject: subjectText,
    }));
  }, [initialInquiry, initialService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock Submission Timeout
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      // Clear success notification after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1800);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
      {/* Contact Info Column (4 cols) */}
      <div className="lg:col-span-5 flex flex-col gap-8 animate-fade-in-left">
        <div>
          <span className="text-xs uppercase tracking-widest text-luxury-gold font-semibold">
            Bansighar Enterprise
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2 mb-4">
            Connect With Our Designers
          </h2>
          <p className="text-luxury-muted text-sm leading-relaxed">
            Have a custom configuration print, specific timber questions, or want to schedule an in-person workshop visit? Get in touch today.
          </p>
        </div>

        {/* Contact Info Items */}
        <div className="flex flex-col gap-6">
          {/* Map Pin Card */}
          <div className="flex gap-4 p-5 rounded-xl bg-luxury-charcoal border border-white/5 hover:border-luxury-gold/20 transition-all duration-300">
            <MapPin className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
            <div className="w-full">
              <h4 className="text-sm font-bold text-white flex justify-between items-center">
                Showroom & Workshop
                <a
                  href="https://maps.google.com/?q=Bansighar+Enterprise+SG+Highway+Ahmedabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-luxury-gold hover:text-luxury-gold-light font-semibold uppercase tracking-wider flex items-center gap-1 transition-colors"
                >
                  Directions
                  <MapPin className="w-3 h-3" />
                </a>
              </h4>
              <p className="text-xs text-luxury-muted mt-1.5 leading-relaxed">
                102, Royal Crafts Building, Near Furniture Plaza, <br />
                S.G. Highway, Gujarat, India - 380054
              </p>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div className="flex gap-4 p-5 rounded-xl bg-luxury-charcoal border border-white/5 hover:border-luxury-gold/20 transition-all duration-300">
            <FaWhatsapp className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
            <div className="w-full">
              <h4 className="text-sm font-bold text-white flex justify-between items-center">
                WhatsApp Chat Desk
                <a
                  href="https://wa.me/919876543210?text=Hi%20Bansighar%20Enterprise,%20I%20am%20interested%20in%20inquiring%20about%20your%20bespoke%20furniture."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-emerald-400 hover:text-emerald-300 font-semibold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
                >
                  Chat Now
                  <FaWhatsapp className="w-3.5 h-3.5" />
                </a>
              </h4>
              <p className="text-xs text-luxury-muted mt-1.5 leading-relaxed">
                Connect directly on WhatsApp for live log previews, wood catalogue selection, and quick quotes. <br />
                WhatsApp: +91 98765 43210
              </p>
            </div>
          </div>

          {/* Telephone Card */}
          <div className="flex gap-4 p-5 rounded-xl bg-luxury-charcoal border border-white/5 hover:border-luxury-gold/20 transition-all duration-300">
            <Phone className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
            <div className="w-full">
              <h4 className="text-sm font-bold text-white flex justify-between items-center">
                Telephone Channels
                <a
                  href="tel:+919876543210"
                  className="text-[10px] text-luxury-gold hover:text-luxury-gold-light font-semibold uppercase tracking-wider flex items-center gap-1 transition-colors"
                >
                  Call Desk
                  <Phone className="w-3 h-3" />
                </a>
              </h4>
              <p className="text-xs text-luxury-muted mt-1.5 leading-relaxed">
                General Queries: +91 98765 43210 <br />
                Design Studio: +91 98765 43211
              </p>
            </div>
          </div>

          {/* Email Card */}
          <div className="flex gap-4 p-5 rounded-xl bg-luxury-charcoal border border-white/5 hover:border-luxury-gold/20 transition-all duration-300">
            <Mail className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
            <div className="w-full">
              <h4 className="text-sm font-bold text-white flex justify-between items-center">
                Email Address
                <a
                  href="mailto:info@bansighar.com"
                  className="text-[10px] text-luxury-gold hover:text-luxury-gold-light font-semibold uppercase tracking-wider flex items-center gap-1 transition-colors"
                >
                  Email Now
                  <Mail className="w-3 h-3" />
                </a>
              </h4>
              <p className="text-xs text-luxury-muted mt-1.5 leading-relaxed">
                Inquiries: info@bansighar.com <br />
                Bespoke Design Desk: bespoke@bansighar.com
              </p>
            </div>
          </div>
        </div>

        {/* Custom luxury SVG map mockup */}
        <div className="w-full h-48 rounded-xl bg-luxury-charcoal border border-white/5 overflow-hidden relative flex items-center justify-center p-4">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C8A276_1px,transparent_1px)] [background-size:16px_16px]" />
          <div className="text-center relative z-10 flex flex-col items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-luxury-gold/20 flex items-center justify-center animate-bounce">
              <div className="w-3.5 h-3.5 rounded-full bg-luxury-gold" />
            </div>
            <span className="text-[11px] font-bold text-white uppercase tracking-wider">
              Gujarat Experience Center
            </span>
            <span className="text-[10px] text-luxury-muted">
              Live Woodwarehouse & Studio Workshop
            </span>
          </div>
        </div>
      </div>

      {/* Contact Form Column (7 cols) */}
      <div className="lg:col-span-7 animate-fade-in-right">
        <form
          onSubmit={handleSubmit}
          className="p-8 sm:p-10 rounded-2xl bg-luxury-charcoal border border-white/5 flex flex-col gap-6 glow-gold"
        >
          <h3 className="font-display text-2xl font-bold text-white">
            Send Design Specification
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs font-semibold text-luxury-muted uppercase tracking-wider">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Devendra Patel"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-xs text-luxury-text focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-xs font-semibold text-luxury-muted uppercase tracking-wider">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. devendra@email.com"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-xs text-luxury-text focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-xs font-semibold text-luxury-muted uppercase tracking-wider">
                Contact Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. +91 98765 43210"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-xs text-luxury-text focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="text-xs font-semibold text-luxury-muted uppercase tracking-wider">
                Inquiry Topic
              </label>
              <select
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-[#121212] border border-white/10 rounded-lg px-4 py-3 text-xs text-luxury-text focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all"
              >
                <option value="" disabled className="text-luxury-muted">Select an Option...</option>
                {/* Dynamic Options */}
                {dynamicOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-luxury-charcoal text-white font-semibold">
                    {opt}
                  </option>
                ))}
                
                <option disabled className="text-luxury-gold text-xs font-semibold bg-luxury-black/90">
                  --- FURNITURE COLLECTIONS ---
                </option>
                <option value="Bespoke Commissions" className="bg-luxury-charcoal text-white">Bespoke Commissions (Solid Wood)</option>
                <option value="Space Layout Consultations" className="bg-luxury-charcoal text-white">Space Layout Consultations</option>
                <option value="Teak & Walnut Restoration" className="bg-luxury-charcoal text-white">Teak & Walnut Restoration</option>
                <option value="White-Glove Delivery" className="bg-luxury-charcoal text-white">White-Glove Delivery</option>
                
                <option disabled className="text-luxury-gold text-xs font-semibold bg-luxury-black/90">
                  --- TURNKEY CONTRACTING SERVICES ---
                </option>
                <option value="Stone Work" className="bg-luxury-charcoal text-white">Stone Work</option>
                <option value="Ceiling & 2x2 Folding Ceiling" className="bg-luxury-charcoal text-white">Ceiling & 2x2 Folding Ceiling</option>
                <option value="Electric Work" className="bg-luxury-charcoal text-white">Electric Work</option>
                <option value="Plumber Work" className="bg-luxury-charcoal text-white">Plumber Work</option>
                <option value="AC Work" className="bg-luxury-charcoal text-white">AC Work</option>
                <option value="Core Cutting" className="bg-luxury-charcoal text-white">Core Cutting</option>
                <option value="PVC & Wooden Furniture" className="bg-luxury-charcoal text-white">PVC & Wooden Furniture</option>
                <option value="Color Work" className="bg-luxury-charcoal text-white">Color Work</option>
                <option value="Aluminium Window" className="bg-luxury-charcoal text-white">Aluminium Window</option>
                <option value="Office Partition" className="bg-luxury-charcoal text-white">Office Partition</option>
                <option value="Shower Glass" className="bg-luxury-charcoal text-white">Shower Glass</option>
                <option value="All Glass Work" className="bg-luxury-charcoal text-white">All Glass Work</option>
                <option value="ACP Elevation" className="bg-luxury-charcoal text-white">ACP Elevation</option>
                <option value="Aluminium Themes" className="bg-luxury-charcoal text-white">Aluminium Themes</option>
                <option value="Premium Door Solutions" className="bg-luxury-charcoal text-white">Premium Door Solutions (Lamination/Sunmica/ACP/PVC/FRP)</option>
                <option value="Lamination Door" className="bg-luxury-charcoal text-white">Lamination Door</option>
                <option value="Sunmica Door" className="bg-luxury-charcoal text-white">Sunmica Door</option>
                <option value="ACP Door" className="bg-luxury-charcoal text-white">ACP Door</option>
                <option value="PVC Door" className="bg-luxury-charcoal text-white">PVC Door</option>
                <option value="FRP Door" className="bg-luxury-charcoal text-white">FRP Door</option>
                
                <option disabled className="text-luxury-gold text-xs font-semibold bg-luxury-black/90">
                  --- GENERAL ---
                </option>
                <option value="Other / General Inquiry" className="bg-luxury-charcoal text-white">Other / General Inquiry</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-xs font-semibold text-luxury-muted uppercase tracking-wider">
              Project Brief / Detailed Idea
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Outline dimensions, wood grain type, fabric choice, and delivery requirements..."
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-xs text-luxury-text focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all resize-none"
            />
          </div>

          <div className="flex items-center gap-2.5 text-xs text-luxury-muted bg-white/5 border border-white/5 rounded-lg p-3">
            <ShieldCheck className="w-4 h-4 text-luxury-gold shrink-0" />
            <span>Authenticated Indian Teak Certificate is attached to all custom commissions.</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full font-semibold text-xs tracking-wider uppercase py-4 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.01] transition-all duration-300 ${
              isSubmitting
                ? "bg-zinc-800 text-zinc-500 cursor-not-allowed"
                : "gold-gradient-bg text-luxury-black cursor-pointer shadow-md"
            }`}
          >
            {isSubmitting ? (
              <>
                <span className="w-4 h-4 border-2 border-zinc-600 border-t-zinc-400 rounded-full animate-spin" />
                Encrypting Specification...
              </>
            ) : (
              <>
                Send Specification Blueprint
                <Send className="w-3.5 h-3.5" />
              </>
            )}
          </button>

          {isSuccess && (
            <div className="flex items-center gap-2.5 p-4 bg-emerald-950/40 border border-emerald-500/20 text-emerald-400 text-xs rounded-xl animate-fade-in-up">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Thank you! Your specification blueprint was transmitted successfully. A design consultant will contact you via email or phone within 24 hours.
              </span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="relative pb-24">
      {/* Banner */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#050505] to-luxury-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center gap-4">
          <span className="text-xs uppercase tracking-widest text-luxury-gold font-semibold">
            Get In Touch
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight">
            Consult With Our <span className="gold-gradient-text">Artisans</span>
          </h1>
          <p className="text-luxury-muted max-w-xl text-sm leading-relaxed mt-2">
            Schedule warehouse log selections, request price calculations, or review structural plans.
          </p>
        </div>
      </section>

      {/* Content Form container wrapper */}
      <section className="pt-16 max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <Suspense
          fallback={
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <span className="w-10 h-10 border-4 border-luxury-gold/20 border-t-luxury-gold rounded-full animate-spin" />
              <p className="text-xs text-luxury-muted uppercase tracking-widest">
                Opening Design Desk...
              </p>
            </div>
          }
        >
          <ContactFormContent />
        </Suspense>
      </section>
    </div>
  );
}
