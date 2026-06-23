"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, ChevronLeft, ChevronRight, Award, Compass, Heart, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { 
  FaGem, FaBorderAll, FaBolt, FaFaucet, FaWind, FaTools, 
  FaCouch, FaPaintRoller, FaWindowMaximize, FaColumns, FaShower, 
  FaBuilding, FaHammer, FaDoorOpen 
} from "react-icons/fa";

export default function Home() {
  const categories = [
    {
      name: "Living Room",
      desc: "Plush sofas, custom lounge chairs, and ambient coffee tables.",
      image: "/images/modern_sofa.png",
      href: "/products?category=Living",
    },
    {
      name: "Dining Suite",
      desc: "Solid walnut tables and ergonomic upholstered seating.",
      image: "/images/dining_table.png",
      href: "/products?category=Dining",
    },
    {
      name: "Master Bedroom",
      desc: "Minimalist oak bedframes and boutique bedside storage.",
      image: "/images/luxury_bed.png",
      href: "/products?category=Bedroom",
    },
    {
      name: "Executive Workspace",
      desc: "Premium study desks and modern executive comfort.",
      image: "/images/workspace_desk.png",
      href: "/products?category=Workspace",
    },
  ];

  const featuredProducts = [
    {
      name: "Imperial Charcoal Sofa",
      category: "Living Room",
      price: "Inquire for price",
      image: "/images/modern_sofa.png",
      rating: 5,
    },
    {
      name: "Royal Walnut Dining Table",
      category: "Dining Suite",
      price: "Inquire for price",
      image: "/images/dining_table.png",
      rating: 5,
    },
    {
      name: "Boutique Oak Bed Suite",
      category: "Bedroom",
      price: "Inquire for price",
      image: "/images/luxury_bed.png",
      rating: 5,
    },
  ];

  const testimonials = [
    {
      quote: "Bansidhar transformed our penthouse. The custom walnut dining table is not just furniture; it's a masterpiece that draws compliments from every guest.",
      author: "Vikram Malhotra",
      role: "Interior Designer, Mumbai",
    },
    {
      quote: "The quality of craftsmanship is unparalleled. We requested a bespoke study desk, and the detail in the joinery is absolutely flawless. Highly recommended!",
      author: "Dr. Ananya Shah",
      role: "Ahmedabad",
    },
    {
      quote: "Excellent service from consultation to white-glove installation. The team was extremely professional, and the bedframe they crafted is incredibly sturdy and gorgeous.",
      author: "Rajesh Patel",
      role: "Homeowner, Baroda",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="relative overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_furniture.png"
            alt="Luxury Furniture Hero"
            fill
            className="object-cover object-center opacity-40 scale-105 animate-[pulse_8s_infinite_alternate]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/90 via-luxury-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col gap-6 text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-luxury-gold/10 border border-luxury-gold/20 self-start text-xs font-semibold uppercase tracking-wider text-luxury-gold">
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-ping" />
              Established Craftsmanship
            </div>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-8xl text-white tracking-tight leading-[1.05]">
              Handcrafted <br />
              <span className="gold-gradient-text">Timeless Luxury</span>
            </h1>
            <p className="text-luxury-muted text-base sm:text-lg max-w-xl leading-relaxed">
              At Bansidhar, we bring nature's raw beauty into your living space. Exquisitely handcrafted solid wood furniture, bespoke designs, and premium comfort customized to absolute perfection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link
                href="/products"
                className="gold-gradient-bg text-luxury-black font-semibold text-sm tracking-wide px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:scale-105 shadow-lg shadow-luxury-gold/15 transition-all duration-300"
              >
                Explore Luxury Collections
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact-us"
                className="bg-white/5 border border-white/10 text-luxury-text hover:bg-white/10 hover:border-luxury-gold/30 font-semibold text-sm tracking-wide px-8 py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Brand Pillars */}
      <section className="py-24 bg-luxury-charcoal border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8 text-luxury-gold" />,
                title: "Exquisite Artistry",
                desc: "Every item is masterfully crafted by legacy artisans using premium joinery and finishes that last generations.",
              },
              {
                icon: <Compass className="w-8 h-8 text-luxury-gold" />,
                title: "Bespoke Customization",
                desc: "Tailored to your architectural spaces. Choose from premium Teak, Oak, Walnut, and designer fabrics.",
              },
              {
                icon: <Heart className="w-8 h-8 text-luxury-gold" />,
                title: "Eco Responsibility",
                desc: "We exclusively source premium wood from sustainably managed government woodlands and certified forests.",
              },
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl glassmorphism hover:border-luxury-gold/30 transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-14 h-14 rounded-xl bg-luxury-gold/5 flex items-center justify-center mb-6 group-hover:bg-luxury-gold/10 transition-colors">
                  {pillar.icon}
                </div>
                <h3 className="text-xl font-bold text-luxury-text mb-3">{pillar.title}</h3>
                <p className="text-luxury-muted leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Category Showcase */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs uppercase tracking-widest text-luxury-gold font-semibold">
                Curated Spaces
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-2">
                Browse By Collection
              </h2>
            </div>
            <Link
              href="/products"
              className="text-sm font-semibold text-luxury-gold hover:text-luxury-gold-light flex items-center gap-1.5 transition-colors group shrink-0"
            >
              View all products
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <Link
                key={idx}
                href={cat.href}
                className="group relative h-96 rounded-2xl overflow-hidden block border border-white/5 glow-gold-hover transition-all duration-500"
              >
                {/* Background Image */}
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/60 to-transparent opacity-90" />
                
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-1/2">
                  <h3 className="text-xl font-bold text-white group-hover:text-luxury-gold transition-colors duration-300">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-luxury-muted mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {cat.desc}
                  </p>
                  <div className="w-8 h-8 rounded-full bg-luxury-gold text-luxury-black flex items-center justify-center mt-4 self-start opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Legacy and Craftsmanship Section */}
      <section className="py-24 bg-luxury-charcoal border-y border-white/5 relative z-10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Image Side */}
            <div className="lg:col-span-6 relative h-[450px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <Image
                src="/images/craftsmanship.png"
                alt="Woodcrafting Legacy"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-luxury-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 glassmorphism rounded-xl border border-white/10">
                <span className="text-2xl font-display font-bold text-luxury-gold">100% Solid Wood</span>
                <p className="text-xs text-luxury-muted mt-1">Sustainably sourced premium Indian Teak and imported Walnut.</p>
              </div>
            </div>

            {/* Text Side */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              <span className="text-xs uppercase tracking-widest text-luxury-gold font-semibold">
                Our Legacy
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
                Crafting Character, Shaping Logs
              </h2>
              <p className="text-luxury-muted leading-relaxed">
                At Bansidhar, we believe that every piece of wood tells a story. For over a decade, we have been salvaging raw logs and turning them into masterpieces that carry warmth, structural integrity, and artistic prestige.
              </p>
              <p className="text-luxury-muted leading-relaxed">
                We reject low-quality veneers and particle boards. Our collections are crafted entirely from premium grade timber, designed, dried, and assembled using traditional mortise-and-tenon joints combined with state-of-the-art precision machinery.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-4 border-t border-white/5 pt-6">
                <div>
                  <h4 className="text-3xl font-display font-bold text-luxury-gold">10+ Years</h4>
                  <p className="text-xs text-luxury-muted mt-1">Exquisite Woodworking Heritage</p>
                </div>
                <div>
                  <h4 className="text-3xl font-display font-bold text-luxury-gold">100%</h4>
                  <p className="text-xs text-luxury-muted mt-1">Bespoke Design Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Turnkey Contracting Services Overview */}
      <section className="py-24 relative z-10 border-t border-white/5 bg-[#08080a]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs uppercase tracking-widest text-luxury-gold font-semibold">
                Turnkey Solutions
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-2">
                Architectural & Contracting Services
              </h2>
              <p className="text-luxury-muted text-xs sm:text-sm mt-3 max-w-xl leading-relaxed">
                Beyond custom woodworking, we design and execute high-end architectural works. From stone laying and designer ceilings to electrical, plumbing, and glass systems.
              </p>
            </div>
            <Link
              href="/services"
              className="text-xs font-semibold uppercase tracking-wider text-luxury-gold hover:text-luxury-gold-light flex items-center gap-1.5 transition-colors group shrink-0"
            >
              Explore all contracting services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { name: "Stone Work", icon: <FaGem className="w-4 h-4 text-luxury-gold" /> },
              { name: "Ceiling & 2x2 Folding Ceiling", icon: <FaBorderAll className="w-4 h-4 text-luxury-gold" /> },
              { name: "Electric Work", icon: <FaBolt className="w-4 h-4 text-luxury-gold" /> },
              { name: "Plumber Work", icon: <FaFaucet className="w-4 h-4 text-luxury-gold" /> },
              { name: "AC Work", icon: <FaWind className="w-4 h-4 text-luxury-gold" /> },
              { name: "Core Cutting", icon: <FaTools className="w-4 h-4 text-luxury-gold" /> },
              { name: "Furniture PVC & Wooden", icon: <FaCouch className="w-4 h-4 text-luxury-gold" /> },
              { name: "Color Work", icon: <FaPaintRoller className="w-4 h-4 text-luxury-gold" /> },
              { name: "Aluminium Window", icon: <FaWindowMaximize className="w-4 h-4 text-luxury-gold" /> },
              { name: "Office Partition", icon: <FaColumns className="w-4 h-4 text-luxury-gold" /> },
              { name: "Shower Glass", icon: <FaShower className="w-4 h-4 text-luxury-gold" /> },
              { name: "All Glass Work", icon: <FaGem className="w-4 h-4 text-luxury-gold" /> },
              { name: "ACP Elevation", icon: <FaBuilding className="w-4 h-4 text-luxury-gold" /> },
              { name: "Aluminium Themes", icon: <FaHammer className="w-4 h-4 text-luxury-gold" /> },
              { name: "Premium Door Solutions", icon: <FaDoorOpen className="w-4 h-4 text-luxury-gold" /> },
            ].map((svc, idx) => (
              <Link
                key={idx}
                href={`/services`}
                className="p-5 rounded-xl bg-luxury-charcoal/40 border border-white/5 hover:border-luxury-gold/30 hover:bg-luxury-charcoal hover:-translate-y-1 transition-all duration-300 group flex items-center gap-4"
              >
                <div className="w-9 h-9 rounded-lg bg-luxury-gold/5 flex items-center justify-center shrink-0 group-hover:bg-luxury-gold/15 transition-all duration-300">
                  {svc.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-xs sm:text-sm font-bold text-white group-hover:text-luxury-gold transition-colors">
                    {svc.name}
                  </span>
                  <span className="text-[10px] text-luxury-gold/70 group-hover:text-luxury-gold transition-colors flex items-center gap-0.5 mt-0.5 opacity-0 group-hover:opacity-100 duration-300">
                    Learn more
                    <ArrowRight className="w-2.5 h-2.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Masterpieces */}
      <section className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-xs uppercase tracking-widest text-luxury-gold font-semibold">
                Signature Pieces
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-2">
                Featured Masterpieces
              </h2>
            </div>
            <Link
              href="/products"
              className="text-sm font-semibold text-luxury-gold hover:text-luxury-gold-light flex items-center gap-1.5 transition-colors"
            >
              Discover all items
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, idx) => (
              <div
                key={idx}
                className="group bg-luxury-charcoal rounded-2xl overflow-hidden border border-white/5 flex flex-col hover:border-luxury-gold/30 hover:shadow-xl hover:shadow-black/40 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-72 w-full bg-zinc-900 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-luxury-black/70 backdrop-blur-md text-[10px] text-luxury-gold uppercase tracking-wider font-semibold px-2.5 py-1 rounded border border-white/5">
                    {product.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-luxury-gold text-luxury-gold" />
                    ))}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-luxury-gold transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-sm text-luxury-gold/80 font-medium mt-1">
                      {product.price}
                    </p>
                  </div>
                  <Link
                    href={`/contact-us?inquiry=${encodeURIComponent(product.name)}`}
                    className="mt-auto bg-white/5 border border-white/10 hover:bg-luxury-gold hover:text-luxury-black hover:border-luxury-gold text-center text-xs font-semibold tracking-wide uppercase py-3 rounded-xl transition-all duration-300"
                  >
                    Inquire Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catalogues Teaser Section */}
      <section className="py-24 bg-luxury-charcoal border-t border-white/5 relative z-10 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Text Content */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <span className="text-xs uppercase tracking-widest text-luxury-gold font-semibold">
                Digital Showroom
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
                Download Our Design & Material Catalogues
              </h2>
              <p className="text-luxury-muted leading-relaxed">
                Take the first step in planning your interior project. Download our curated catalogues to explore premium Indian Teak configurations, luxury sunmica laminates, PVC modular kitchen templates, and bespoke wardrobe hardware.
              </p>
              <p className="text-luxury-muted leading-relaxed">
                Our catalogues provide complete technical specifications, dimensions, finish details, and layout recommendations from our master designers.
              </p>
              <div className="flex flex-wrap gap-4 mt-2">
                <Link
                  href="/catalogues"
                  className="gold-gradient-bg text-luxury-black font-semibold text-sm tracking-wide px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-all duration-300"
                >
                  Access All Downloads
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Quick Preview Cards */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <div className="p-6 rounded-2xl glassmorphism border border-white/10 hover:border-luxury-gold/30 hover:bg-luxury-charcoal/80 transition-all duration-300 group flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 border border-luxury-gold/20 flex items-center justify-center text-luxury-gold group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-luxury-gold transition-colors duration-300">
                      Wooden Furniture & Sunmica
                    </h4>
                    <p className="text-xs text-luxury-muted mt-0.5">Bespoke beds, tables & laminates (PDF, 2.1 MB)</p>
                  </div>
                </div>
                <a
                  href="/catalogues/wooden_furniture_sunmica.pdf"
                  download
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-luxury-gold hover:text-luxury-black flex items-center justify-center text-luxury-gold transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </a>
              </div>

              <div className="p-6 rounded-2xl glassmorphism border border-white/10 hover:border-luxury-gold/30 hover:bg-luxury-charcoal/80 transition-all duration-300 group flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 border border-luxury-gold/20 flex items-center justify-center text-luxury-gold group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-luxury-gold transition-colors duration-300">
                      PVC Furniture & Sunmica
                    </h4>
                    <p className="text-xs text-luxury-muted mt-0.5">PVC cabinets, kitchens & trims (PDF, 1.8 MB)</p>
                  </div>
                </div>
                <a
                  href="/catalogues/pvc_furniture_sunmica.pdf"
                  download
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-luxury-gold hover:text-luxury-black flex items-center justify-center text-luxury-gold transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </a>
              </div>

              <div className="p-6 rounded-2xl glassmorphism border border-white/10 hover:border-luxury-gold/30 hover:bg-luxury-charcoal/80 transition-all duration-300 group flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-luxury-gold/10 border border-luxury-gold/20 flex items-center justify-center text-luxury-gold group-hover:scale-105 transition-transform duration-300">
                    <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-luxury-gold transition-colors duration-300">
                      Aluminium Themes & Sections
                    </h4>
                    <p className="text-xs text-luxury-muted mt-0.5">Partition framing & architectural (PDF, 2.5 MB)</p>
                  </div>
                </div>
                <a
                  href="/catalogues/aluminium_sections.pdf"
                  download
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-luxury-gold hover:text-luxury-black flex items-center justify-center text-luxury-gold transition-all duration-300"
                >
                  <svg className="w-4 h-4 fill-none stroke-current" viewBox="0 0 24 24" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section className="py-24 bg-[#050505] relative z-10 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-widest text-luxury-gold font-semibold">
            Client Stories
          </span>
          <h2 className="font-display text-4xl font-bold text-white mt-2 mb-12">
            Trusted by Connoisseurs
          </h2>
          
          <div className="relative min-h-[220px] flex items-center justify-center">
            {testimonials.map((test, idx) => (
              <div
                key={idx}
                className={`transition-all duration-500 absolute w-full ${
                  idx === activeTestimonial
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <p className="font-display text-lg sm:text-2xl text-luxury-text italic leading-relaxed max-w-2xl mx-auto">
                  &ldquo;{test.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <h4 className="text-luxury-gold font-bold text-base">{test.author}</h4>
                  <p className="text-xs text-luxury-muted mt-0.5">{test.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-luxury-muted hover:text-luxury-gold hover:border-luxury-gold/50 transition-all"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs text-luxury-muted">
              {activeTestimonial + 1} / {testimonials.length}
            </span>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-luxury-muted hover:text-luxury-gold hover:border-luxury-gold/50 transition-all"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. Newsletter Subscription Banner */}
      <section className="py-24 relative z-10 overflow-hidden bg-luxury-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="glassmorphism rounded-3xl p-8 sm:p-16 border border-white/5 relative overflow-hidden flex flex-col items-center text-center gap-6 glow-gold max-w-4xl mx-auto">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-luxury-gold/5 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none" />
            
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white max-w-md">
              Create Your Dream Space With Us
            </h2>
            <p className="text-luxury-muted max-w-lg leading-relaxed text-sm">
              Schedule a bespoke consultation with our furniture designers. Let us curate premium timber selections and draft conceptual configurations for your residence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mt-4">
              <Link
                href="/contact-us"
                className="w-full gold-gradient-bg text-luxury-black font-semibold text-center text-sm py-4 rounded-full hover:scale-105 transition-all shadow-md"
              >
                Schedule Consultation
              </Link>
            </div>
            <div className="flex items-center gap-2 text-xs text-luxury-muted mt-2">
              <ShieldCheck className="w-4 h-4 text-luxury-gold" />
              <span>Complimentary site visits for custom design orders.</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
