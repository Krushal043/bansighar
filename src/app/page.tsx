"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, ChevronLeft, ChevronRight, Award, Compass, Heart, ShieldCheck, Play, X, MessageSquare, Trees, Hammer, Sparkles, Truck } from "lucide-react";
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
      quote: "Bansighar Enterprise transformed our penthouse. The custom walnut dining table is not just furniture; it's a masterpiece that draws compliments from every guest.",
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
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

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
        {/* Background Video with Image Fallback and Overlay */}
        <div className="absolute inset-0 z-0 bg-luxury-black">
          <Image
            src="/images/hero_furniture.png"
            alt="Luxury Furniture Hero"
            fill
            className="object-cover object-center opacity-30 scale-105"
            priority
          />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-100 scale-105"
          >
            <source src="/videos/banner.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col gap-6 text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-luxury-gold/10 border border-luxury-gold/20 self-start text-xs font-semibold uppercase tracking-wider text-luxury-gold">
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold animate-ping" />
              Established Craftsmanship
            </div>
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-8xl text-white tracking-tight leading-[1.05] drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              Handcrafted <br />
              <span className="gold-gradient-text">Timeless Luxury</span>
            </h1>
            <p className="text-luxury-muted text-base sm:text-lg max-w-xl leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              At Bansighar Enterprise, we bring nature's raw beauty into your living space. Exquisitely handcrafted solid wood furniture, bespoke designs, and premium comfort customized to absolute perfection.
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
            <div 
              className="lg:col-span-6 relative h-[450px] w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl group cursor-pointer"
              onClick={() => setIsVideoModalOpen(true)}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              >
                <source src="/videos/craftsmanship.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-tr from-luxury-black/80 via-transparent to-transparent group-hover:bg-luxury-black/40 transition-colors duration-300" />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-luxury-gold/90 text-luxury-black flex items-center justify-center shadow-lg shadow-luxury-gold/30 group-hover:scale-110 group-hover:bg-luxury-gold transition-all duration-300 relative">
                  {/* Pulse Rings */}
                  <span className="absolute inset-0 rounded-full bg-luxury-gold animate-ping opacity-45" />
                  <Play className="w-8 h-8 fill-luxury-black ml-1 relative z-10" />
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6 p-6 glassmorphism rounded-xl border border-white/10 group-hover:border-luxury-gold/40 transition-colors duration-300">
                <span className="text-2xl font-display font-bold text-luxury-gold flex items-center justify-between">
                  100% Solid Wood
                  <span className="text-[10px] uppercase tracking-wider text-white/60 bg-white/10 px-2 py-0.5 rounded">Watch Video</span>
                </span>
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
                At Bansighar Enterprise, we believe that every piece of wood tells a story. For over a decade, we have been salvaging raw logs and turning them into masterpieces that carry warmth, structural integrity, and artistic prestige.
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

      {/* 4.5 Our Crafting Process (Horizontal Step-wise Timeline with Image Animations) */}
      <section className="py-24 relative z-10 border-t border-white/5 bg-[#0a0a0c] overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-luxury-gold/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs uppercase tracking-widest text-luxury-gold font-semibold">
              The Journey of Quality
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-2">
              Our Crafting Process
            </h2>
            <p className="text-luxury-muted mt-4 text-sm sm:text-base leading-relaxed">
              From raw logs to bespoke masterpieces installed in your home, discover the meticulous step-by-step path of precision woodworking.
            </p>
          </div>

          {/* Horizontal Scroll / Flex Container */}
          <div className="relative">
            {/* Horizontal Connecting Line (Desktop only) */}
            <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-luxury-gold/5 via-luxury-gold/30 to-luxury-gold/5 z-0" />

            <div className="flex gap-6 overflow-x-auto pb-8 pt-4 scrollbar-none snap-x snap-mandatory lg:grid lg:grid-cols-5 lg:overflow-x-visible lg:pb-0 lg:snap-none">
              {[
                {
                  step: "01",
                  title: "Design & Vision",
                  desc: "We collaborate closely to define custom dimensions, layouts, timber species, and luxury hardware.",
                  icon: <MessageSquare className="w-5 h-5 text-luxury-gold" />,
                  image: "/images/workspace_desk.png",
                  detail: "Includes 3D conceptual drafts"
                },
                {
                  step: "02",
                  title: "Kiln Seasoning",
                  desc: "Logs are cut and kiln-dried to 8-12% moisture content to prevent warping over generations.",
                  icon: <Trees className="w-5 h-5 text-luxury-gold" />,
                  image: "/images/craftsmanship.png",
                  detail: "Moisture-tested timber"
                },
                {
                  step: "03",
                  title: "Masterful Joinery",
                  desc: "Legacy artisans construct frames using traditional Mortise-and-Tenon joints for structural lifetime.",
                  icon: <Hammer className="w-5 h-5 text-luxury-gold" />,
                  image: "/images/dining_table.png",
                  detail: "Zero nails framework"
                },
                {
                  step: "04",
                  title: "Multi-coat Polish",
                  desc: "Multiple stage hand-sanding followed by high-performance PU finishes and custom natural oils.",
                  icon: <Sparkles className="w-5 h-5 text-luxury-gold" />,
                  image: "/images/modern_sofa.png",
                  detail: "Matte or high-gloss"
                },
                {
                  step: "05",
                  title: "White-Glove Setup",
                  desc: "Rigorous quality check before items are padded, shipped, and custom-leveled on-site.",
                  icon: <Truck className="w-5 h-5 text-luxury-gold" />,
                  image: "/images/luxury_bed.png",
                  detail: "Dedicated install team"
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="min-w-[280px] sm:min-w-[320px] lg:min-w-0 snap-center flex flex-col items-center text-center group z-10"
                >
                  {/* Step Number & Connector Dot */}
                  <div className="relative mb-6 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-[#0a0a0c] flex items-center justify-center border border-luxury-gold/20 group-hover:border-luxury-gold group-hover:bg-luxury-gold/10 transition-all duration-300 group-hover:scale-105 z-10 relative">
                      {item.icon}
                    </div>
                  </div>

                  {/* Card with full image and hover details reveal */}
                  <div className="relative w-full h-[380px] rounded-2xl overflow-hidden border border-white/5 group-hover:border-luxury-gold/30 transition-all duration-500 group-hover:shadow-[0_10px_35px_rgba(200,162,118,0.15)] flex flex-col justify-end p-6">
                    {/* Full Card Background Image */}
                    <Image 
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-w-768px) 100vw, 20vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/40 to-transparent transition-all duration-500 z-10 group-hover:from-luxury-black/95 group-hover:via-luxury-black/80" />

                    {/* Content (Title & Revealed Details) */}
                    <div className="relative z-20 flex flex-col gap-1">
                      {/* Step Badge & Title */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="gold-gradient-text font-display text-2xl font-bold">{item.step}</span>
                        <h3 className="text-lg font-bold text-white transition-colors duration-300 group-hover:text-luxury-gold text-left">
                          {item.title}
                        </h3>
                      </div>

                      {/* Description & Detail revealed on hover */}
                      <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col items-start">
                        <p className="text-luxury-muted text-xs leading-relaxed mb-4 text-left">
                          {item.desc}
                        </p>
                        <div className="text-[10px] font-semibold tracking-wider uppercase py-1.5 px-3 rounded-full bg-luxury-gold/5 border border-luxury-gold/20 text-luxury-gold">
                          {item.detail}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Turnkey Contracting Services Overview */}
      <section className="py-24 relative z-10 border-t border-white/5 bg-[#08080a]">
        {/* Decorative subtle glows */}
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-luxury-gold/5 rounded-full blur-[120px] pointer-events-none" />

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

          {/* Premium Service Pillars with Full-Card Background Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Stone & Marble Works",
                desc: "Premium Italian marble floor laying, elegant granite wall cladding, and custom quartz countertops.",
                image: "/images/services_stone.png",
                icon: <FaGem className="w-5 h-5 text-luxury-gold" />
              },
              {
                title: "Ceiling & Partition Solutions",
                desc: "Gypsum designer ceilings, acoustic ceiling tiles, and specialized 2x2 modular folding ceilings.",
                image: "/images/services_ceiling.png",
                icon: <FaBorderAll className="w-5 h-5 text-luxury-gold" />
              },
              {
                title: "Smart Electrical & HVAC",
                desc: "Automation systems, custom lighting, premium wiring, and VRF/VRV central AC engineering.",
                image: "/images/services_electric.png",
                icon: <FaBolt className="w-5 h-5 text-luxury-gold" />
              },
              {
                title: "Bespoke PVC & Wood Joinery",
                desc: "Water-resistant PVC modular kitchens, luxury sunmica laminates, and premium doors.",
                image: "/images/services_woodwork.png",
                icon: <FaCouch className="w-5 h-5 text-luxury-gold" />
              },
              {
                title: "Glass & Partition Systems",
                desc: "Frameless shower enclosures, sliding window systems, and double-glazed office partitions.",
                image: "/images/services_glass.png",
                icon: <FaShower className="w-5 h-5 text-luxury-gold" />
              },
              {
                title: "ACP Elevation & Facades",
                desc: "Aluminium Composite Panel (ACP) external cladding, louvers, and storefront glazing.",
                image: "/images/services_facade.png",
                icon: <FaBuilding className="w-5 h-5 text-luxury-gold" />
              }
            ].map((pillar, idx) => (
              <Link
                key={idx}
                href="/services"
                className="relative h-[320px] rounded-2xl overflow-hidden border border-white/5 hover:border-luxury-gold/30 hover:shadow-[0_10px_35px_rgba(200,162,118,0.15)] transition-all duration-500 group flex flex-col justify-end p-6 z-10"
              >
                {/* Background Image */}
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 z-0"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/50 to-transparent transition-all duration-500 z-10 group-hover:from-luxury-black/95 group-hover:via-luxury-black/80" />

                {/* Floating Icon */}
                <div className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-luxury-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-luxury-gold group-hover:bg-luxury-gold group-hover:text-luxury-black group-hover:border-luxury-gold transition-all duration-300 z-20">
                  {pillar.icon}
                </div>

                {/* Content */}
                <div className="relative z-20 flex flex-col gap-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-luxury-gold transition-colors duration-300 text-left">
                    {pillar.title}
                  </h3>
                  
                  {/* Slide up description on hover */}
                  <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-[120px] group-hover:opacity-100 transition-all duration-500 ease-in-out flex flex-col items-start mt-1">
                    <p className="text-luxury-muted text-xs leading-relaxed text-left mb-2">
                      {pillar.desc}
                    </p>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-luxury-gold flex items-center gap-1">
                      Learn details
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Detailed Capabilities Checklist */}
          <div className="mt-16 border-t border-white/5 pt-12">
            <h3 className="font-display text-lg font-semibold text-white mb-6 text-center md:text-left">
              Complete Turnkey Specialties & Works
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {[
                { name: "Stone Work", icon: <FaGem className="w-4 h-4" /> },
                { name: "Ceiling & 2x2 Folding Ceiling", icon: <FaBorderAll className="w-4 h-4" /> },
                { name: "Electric Work", icon: <FaBolt className="w-4 h-4" /> },
                { name: "Plumber Work", icon: <FaFaucet className="w-4 h-4" /> },
                { name: "AC Work", icon: <FaWind className="w-4 h-4" /> },
                { name: "Core Cutting", icon: <FaTools className="w-4 h-4" /> },
                { name: "Furniture PVC & Wooden", icon: <FaCouch className="w-4 h-4" /> },
                { name: "Color Work", icon: <FaPaintRoller className="w-4 h-4" /> },
                { name: "Aluminium Window", icon: <FaWindowMaximize className="w-4 h-4" /> },
                { name: "Office Partition", icon: <FaColumns className="w-4 h-4" /> },
                { name: "Shower Glass", icon: <FaShower className="w-4 h-4" /> },
                { name: "All Glass Work", icon: <FaGem className="w-4 h-4" /> },
                { name: "ACP Elevation", icon: <FaBuilding className="w-4 h-4" /> },
                { name: "Aluminium Themes", icon: <FaHammer className="w-4 h-4" /> },
                { name: "Premium Door Solutions", icon: <FaDoorOpen className="w-4 h-4" /> },
              ].map((svc, idx) => (
                <Link
                  key={idx}
                  href="/services"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-luxury-charcoal/20 border border-white/5 hover:border-luxury-gold/20 hover:bg-luxury-charcoal/40 transition-all duration-300 group"
                >
                  <div className="w-7 h-7 rounded-lg bg-luxury-gold/5 flex items-center justify-center shrink-0 text-luxury-gold group-hover:bg-luxury-gold/10 transition-colors">
                    {svc.icon}
                  </div>
                  <span className="text-xs font-medium text-luxury-muted group-hover:text-white transition-colors truncate">
                    {svc.name}
                  </span>
                </Link>
              ))}
            </div>
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

      {/* Craftsmanship Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4">
          <div className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-white/10 bg-luxury-black shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/10 text-white hover:text-luxury-gold hover:border-luxury-gold flex items-center justify-center transition-all duration-300 hover:scale-105"
              aria-label="Close video player"
            >
              <X className="w-5 h-5" />
            </button>
            
            {/* Video Player */}
            <video
              autoPlay
              controls
              className="w-full h-full object-cover"
            >
              <source src="/videos/craftsmanship.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
