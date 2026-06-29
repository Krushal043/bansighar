"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Award,
  Compass,
  Heart,
  ShieldCheck,
  Play,
  X,
  MessageSquare,
  Trees,
  Hammer,
  Sparkles,
  Truck,
  Users,
  ClipboardCheck,
  Clock,
  MapPin,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";
import {
  FaGem,
  FaBorderAll,
  FaBolt,
  FaFaucet,
  FaTools,
  FaCouch,
  FaPaintRoller,
  FaWindowMaximize,
  FaColumns,
  FaShower,
  FaBuilding,
  FaHammer,
  FaDoorOpen,
} from "react-icons/fa";

interface HeroVideoProps {
  src: string;
  isActive: boolean;
  onEnded: () => void;
}

function HeroVideo({ src, isActive, onEnded }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.log("Video playback interrupted:", error);
        });
      }
    } else {
      video.pause();
    }
  }, [isActive]);

  return (
    <video
      ref={videoRef}
      muted
      playsInline
      onEnded={onEnded}
      className="absolute inset-0 w-full h-full object-cover scale-105"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

const heroSlides = [
  { type: "video" as const, src: "/videos/banner.mp4" },
  { type: "image" as const, src: "/images/hero_furniture.png" },
  { type: "image" as const, src: "/images/modern_sofa.png" },
  { type: "image" as const, src: "/images/dining_table.png" },
  { type: "image" as const, src: "/images/luxury_bed.png" },
];

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

  const scrollingServices = [
    { name: "Furniture Work", icon: <FaCouch className="w-8 h-8" /> },
    { name: "False Ceiling", icon: <FaBorderAll className="w-8 h-8" /> },
    { name: "Color Work", icon: <FaPaintRoller className="w-8 h-8" /> },
    { name: "Electrical Work", icon: <FaBolt className="w-8 h-8" /> },
    { name: "Section Window Work", icon: <FaWindowMaximize className="w-8 h-8" /> },
    { name: "Door Work", icon: <FaDoorOpen className="w-8 h-8" /> },
    { name: "Sofa & Padda Work", icon: <FaCouch className="w-8 h-8" /> },
    { name: "Plumber Work", icon: <FaFaucet className="w-8 h-8" /> },
    { name: "A/C Core Cutting", icon: <FaTools className="w-8 h-8" /> },
    { name: "Stone Work", icon: <FaGem className="w-8 h-8" /> },
    { name: "Office Partition", icon: <FaColumns className="w-8 h-8" /> },
    { name: "Shower Glass", icon: <FaShower className="w-8 h-8" /> },
    { name: "All Glass Work", icon: <FaGem className="w-8 h-8" /> },
    { name: "ACP Elevation", icon: <FaBuilding className="w-8 h-8" /> },
    { name: "Aluminium Themes", icon: <FaHammer className="w-8 h-8" /> },
    { name: "Premium Door Solutions", icon: <FaDoorOpen className="w-8 h-8" /> },
  ];

  const brandPillars = [
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
  ];

  const craftingSteps = [
    {
      step: "01",
      title: "Design & Vision",
      desc: "We collaborate closely to define custom dimensions, layouts, timber species, and luxury hardware.",
      icon: <MessageSquare className="w-5 h-5 text-luxury-gold" />,
      image: "/images/workspace_desk.png",
      detail: "Includes 3D conceptual drafts",
    },
    {
      step: "02",
      title: "Kiln Seasoning",
      desc: "Logs are cut and kiln-dried to 8-12% moisture content to prevent warping over generations.",
      icon: <Trees className="w-5 h-5 text-luxury-gold" />,
      image: "/images/craftsmanship.png",
      detail: "Moisture-tested timber",
    },
    {
      step: "03",
      title: "Masterful Joinery",
      desc: "Legacy artisans construct frames using traditional Mortise-and-Tenon joints for structural lifetime.",
      icon: <Hammer className="w-5 h-5 text-luxury-gold" />,
      image: "/images/dining_table.png",
      detail: "Zero nails framework",
    },
    {
      step: "04",
      title: "Multi-coat Polish",
      desc: "Multiple stage hand-sanding followed by high-performance PU finishes and custom natural oils.",
      icon: <Sparkles className="w-5 h-5 text-luxury-gold" />,
      image: "/images/modern_sofa.png",
      detail: "Matte or high-gloss",
    },
    {
      step: "05",
      title: "White-Glove Setup",
      desc: "Rigorous quality check before items are padded, shipped, and custom-leveled on-site.",
      icon: <Truck className="w-5 h-5 text-luxury-gold" />,
      image: "/images/luxury_bed.png",
      detail: "Dedicated install team",
    },
  ];

  const testimonials = [
    {
      quote:
        "Bansighar Enterprise transformed our penthouse. The custom walnut dining table is not just furniture; it's a masterpiece that draws compliments from every guest.",
      author: "Vikram Malhotra",
      role: "Interior Designer, Mumbai",
    },
    {
      quote:
        "The quality of craftsmanship is unparalleled. We requested a bespoke study desk, and the detail in the joinery is absolutely flawless. Highly recommended!",
      author: "Dr. Ananya Shah",
      role: "Ahmedabad",
    },
    {
      quote:
        "Excellent service from consultation to white-glove installation. The team was extremely professional, and the bedframe they crafted is incredibly sturdy and gorgeous.",
      author: "Rajesh Patel",
      role: "Homeowner, Baroda",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance logic for background media slideshow
  useEffect(() => {
    const slide = heroSlides[currentSlide];
    let timerId: NodeJS.Timeout;

    if (slide.type === "image") {
      timerId = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 6000); // 6s duration for images
    } else if (slide.type === "video") {
      // Safety timeout: auto-advance after 25s if video ending isn't caught
      timerId = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      }, 25000);
    }

    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [currentSlide]);

  const handleVideoEnded = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    if (testimonials.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  return (
    <div className="relative overflow-hidden">
      {/* 1. Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
        {/* Background Carousel with Crossfade and Overlay */}
        <div className="absolute inset-0 z-0 bg-luxury-black">
          {heroSlides.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                {slide.type === "video" ? (
                  <HeroVideo
                    src={slide.src}
                    isActive={isActive}
                    onEnded={handleVideoEnded}
                  />
                ) : (
                  <Image
                    src={slide.src}
                    alt={`Luxury Furniture Hero Slide ${idx + 1}`}
                    fill
                    className={`object-cover object-center transition-transform duration-[6000ms] ease-out ${
                      isActive ? "scale-105" : "scale-100"
                    }`}
                    priority={idx === 0}
                  />
                )}
                {/* Dark Overlay for premium look & text readability */}
                <div className="absolute inset-0 bg-black/45 z-[1]" />
              </div>
            );
          })}
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
              At Bansighar Enterprise, we bring nature&apos;s raw beauty into your
              living space. Exquisitely handcrafted solid wood furniture,
              bespoke designs, and premium comfort customized to absolute
              perfection.
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

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full glassmorphism flex items-center justify-center text-white/70 hover:text-luxury-gold hover:border-luxury-gold/50 hover:scale-105 active:scale-95 transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 rounded-full glassmorphism flex items-center justify-center text-white/70 hover:text-luxury-gold hover:border-luxury-gold/50 hover:scale-105 active:scale-95 transition-all duration-300 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 rounded-full transition-all duration-500 ${
                idx === currentSlide
                  ? "w-8 bg-luxury-gold shadow-[0_0_8px_rgba(200,162,118,0.5)]"
                  : "w-2 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. Turnkey Contracting Services Overview */}
      <section className="py-20 relative z-10 border-y border-zinc-200/60 bg-[#F9F9FB]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-luxury-gold font-semibold">
              What We Do
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-luxury-black mt-2">
              Our Services
            </h2>
          </div>

          {/* Scrolling Marquee Container */}
          <div className="relative w-full overflow-hidden py-4">
            {/* Left Fade Overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#F9F9FB] to-transparent z-20 pointer-events-none" />
            {/* Right Fade Overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#F9F9FB] to-transparent z-20 pointer-events-none" />

            <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max">
              {scrollingServices.map((service, idx) => (
                <Link
                  key={`s1-${idx}`}
                  href="/services"
                  className="flex flex-col items-center justify-center text-center p-6 bg-white border border-zinc-200/85 hover:border-luxury-gold/50 shadow-xs hover:shadow-md rounded-2xl w-44 h-40 shrink-0 transition-all duration-300 group"
                >
                  <div className="mb-4 text-luxury-gold group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-bold text-luxury-black tracking-wider uppercase leading-snug">
                    {service.name}
                  </span>
                </Link>
              ))}
              {scrollingServices.map((service, idx) => (
                <Link
                  key={`s2-${idx}`}
                  href="/services"
                  className="flex flex-col items-center justify-center text-center p-6 bg-white border border-zinc-200/85 hover:border-luxury-gold/50 shadow-xs hover:shadow-md rounded-2xl w-44 h-40 shrink-0 transition-all duration-300 group"
                >
                  <div className="mb-4 text-luxury-gold group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-bold text-luxury-black tracking-wider uppercase leading-snug">
                    {service.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Category Showcase */}
      <section className="py-24 relative z-10 bg-luxury-black border-y border-white/5">
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

          {/* Scrolling Marquee Container */}
          <div className="relative w-full overflow-hidden py-4">
            {/* Left Fade Overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-luxury-black to-transparent z-20 pointer-events-none" />
            {/* Right Fade Overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-luxury-black to-transparent z-20 pointer-events-none" />

            <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max">
              {categories.map((cat, idx) => (
                <Link
                  key={`c1-${idx}`}
                  href={cat.href}
                  className="group relative w-80 h-96 rounded-2xl overflow-hidden block border border-white/5 glow-gold-hover transition-all duration-500 shrink-0"
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
              {categories.map((cat, idx) => (
                <Link
                  key={`c2-${idx}`}
                  href={cat.href}
                  className="group relative w-80 h-96 rounded-2xl overflow-hidden block border border-white/5 glow-gold-hover transition-all duration-500 shrink-0"
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
        </div>
      </section>

      {/* 4. Brand Pillars */}
      <section className="py-24 bg-white border-b border-zinc-200/60 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Scrolling Marquee Container */}
          <div className="relative w-full overflow-hidden py-4">
            {/* Left Fade Overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
            {/* Right Fade Overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

            <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max">
              {brandPillars.map((pillar, idx) => (
                <div
                  key={`p1-${idx}`}
                  className="p-8 w-80 h-72 shrink-0 rounded-2xl bg-zinc-50 border border-zinc-200/80 shadow-xs hover:shadow-md hover:border-luxury-gold/50 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-luxury-gold/10 flex items-center justify-center mb-6 group-hover:bg-luxury-gold/20 transition-colors">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-luxury-black mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
              {brandPillars.map((pillar, idx) => (
                <div
                  key={`p2-${idx}`}
                  className="p-8 w-80 h-72 shrink-0 rounded-2xl bg-zinc-50 border border-zinc-200/80 shadow-xs hover:shadow-md hover:border-luxury-gold/50 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-luxury-gold/10 flex items-center justify-center mb-6 group-hover:bg-luxury-gold/20 transition-colors">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-luxury-black mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
              {brandPillars.map((pillar, idx) => (
                <div
                  key={`p3-${idx}`}
                  className="p-8 w-80 h-72 shrink-0 rounded-2xl bg-zinc-50 border border-zinc-200/80 shadow-xs hover:shadow-md hover:border-luxury-gold/50 transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-luxury-gold/10 flex items-center justify-center mb-6 group-hover:bg-luxury-gold/20 transition-colors">
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-bold text-luxury-black mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-zinc-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Legacy and Craftsmanship Section */}
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
                  <span className="text-[10px] uppercase tracking-wider text-white/60 bg-white/10 px-2 py-0.5 rounded">
                    Watch Video
                  </span>
                </span>
                <p className="text-xs text-luxury-muted mt-1">
                  Sustainably sourced premium Indian Teak and imported Walnut.
                </p>
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
                At Bansighar Enterprise, we believe that every piece of wood
                tells a story. For over a decade, we have been salvaging raw
                logs and turning them into masterpieces that carry warmth,
                structural integrity, and artistic prestige.
              </p>
              <p className="text-luxury-muted leading-relaxed">
                We reject low-quality veneers and particle boards. Our
                collections are crafted entirely from premium grade timber,
                designed, dried, and assembled using traditional
                mortise-and-tenon joints combined with state-of-the-art
                precision machinery.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-4 border-t border-white/5 pt-6">
                <div>
                  <h4 className="text-3xl font-display font-bold text-luxury-gold">
                    10+ Years
                  </h4>
                  <p className="text-xs text-luxury-muted mt-1">
                    Exquisite Woodworking Heritage
                  </p>
                </div>
                <div>
                  <h4 className="text-3xl font-display font-bold text-luxury-gold">
                    100%
                  </h4>
                  <p className="text-xs text-luxury-muted mt-1">
                    Bespoke Design Satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Our Crafting Process (Horizontal Step-wise Timeline with Image Animations) */}
      <section className="py-24 relative z-10 border-y border-zinc-200/60 bg-[#F9F9FB] overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-luxury-gold/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-xs uppercase tracking-widest text-luxury-gold font-semibold">
              The Journey of Quality
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-luxury-black mt-2">
              Our Crafting Process
            </h2>
            <p className="text-zinc-600 mt-4 text-sm sm:text-base leading-relaxed">
              From raw logs to bespoke masterpieces installed in your home,
              discover the meticulous step-by-step path of precision
              woodworking.
            </p>
          </div>

          {/* Scrolling Marquee Container */}
          <div className="relative w-full overflow-hidden py-4">
            {/* Left Fade Overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#F9F9FB] to-transparent z-20 pointer-events-none" />
            {/* Right Fade Overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#F9F9FB] to-transparent z-20 pointer-events-none" />

            <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max">
              {craftingSteps.map((item, idx) => (
                <div
                  key={`cs1-${idx}`}
                  className="w-80 flex flex-col items-center text-center group z-10 shrink-0"
                >
                  {/* Step Number & Connector Dot */}
                  <div className="relative mb-6 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200/60 flex items-center justify-center group-hover:border-luxury-gold group-hover:bg-luxury-gold/10 transition-all duration-300 group-hover:scale-105 z-10 relative">
                      {item.icon}
                    </div>
                  </div>

                  {/* Card with full image and hover details reveal */}
                  <div className="relative w-full h-[380px] rounded-2xl overflow-hidden border border-zinc-200/60 group-hover:border-luxury-gold/30 transition-all duration-500 group-hover:shadow-[0_10px_35px_rgba(200,162,118,0.15)] flex flex-col justify-end p-6">
                    {/* Full Card Background Image */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-w-768px) 100vw, 20vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/50 to-transparent transition-all duration-500 z-10 group-hover:from-luxury-black/95 group-hover:via-luxury-black/80" />

                    {/* Content (Title & Revealed Details) */}
                    <div className="relative z-20 flex flex-col gap-1">
                      {/* Step Badge & Title */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="gold-gradient-text font-display text-2xl font-bold">
                          {item.step}
                        </span>
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
              {craftingSteps.map((item, idx) => (
                <div
                  key={`cs2-${idx}`}
                  className="w-80 flex flex-col items-center text-center group z-10 shrink-0"
                >
                  {/* Step Number & Connector Dot */}
                  <div className="relative mb-6 flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-white border border-zinc-200/60 flex items-center justify-center group-hover:border-luxury-gold group-hover:bg-luxury-gold/10 transition-all duration-300 group-hover:scale-105 z-10 relative">
                      {item.icon}
                    </div>
                  </div>

                  {/* Card with full image and hover details reveal */}
                  <div className="relative w-full h-[380px] rounded-2xl overflow-hidden border border-zinc-200/60 group-hover:border-luxury-gold/30 transition-all duration-500 group-hover:shadow-[0_10px_35px_rgba(200,162,118,0.15)] flex flex-col justify-end p-6">
                    {/* Full Card Background Image */}
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-w-768px) 100vw, 20vw"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/50 to-transparent transition-all duration-500 z-10 group-hover:from-luxury-black/95 group-hover:via-luxury-black/80" />

                    {/* Content (Title & Revealed Details) */}
                    <div className="relative z-20 flex flex-col gap-1">
                      {/* Step Badge & Title */}
                      <div className="flex items-center gap-2 mb-2">
                        <span className="gold-gradient-text font-display text-2xl font-bold">
                          {item.step}
                        </span>
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

      {/* 5.5 Stats Bar Section */}
      <section className="py-12 bg-luxury-charcoal border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y divide-white/5 lg:divide-y-0 lg:divide-x lg:divide-white/10">
            {[
              {
                icon: <Users className="w-6 h-6 text-luxury-gold" />,
                value: "500+",
                label: "Happy Clients",
              },
              {
                icon: <ClipboardCheck className="w-6 h-6 text-luxury-gold" />,
                value: "1200+",
                label: "Projects Completed",
              },
              {
                icon: <Clock className="w-6 h-6 text-luxury-gold" />,
                value: "10+",
                label: "Years Experience",
              },
              {
                icon: <MapPin className="w-6 h-6 text-luxury-gold" />,
                value: "Surat",
                label: "Our Service Area",
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center gap-4 py-4 lg:py-0 lg:px-8"
              >
                <div className="w-12 h-12 rounded-xl bg-luxury-gold/5 flex items-center justify-center shrink-0">
                  {stat.icon}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-2xl font-display font-bold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs text-luxury-muted font-medium mt-0.5">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section className="py-24 bg-white relative z-10 border-y border-zinc-200/60">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-widest text-luxury-gold font-semibold">
            Client Stories
          </span>
          <h2 className="font-display text-4xl font-bold text-luxury-black mt-2 mb-12">
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
                <p className="font-display text-lg sm:text-2xl text-zinc-800 italic leading-relaxed max-w-2xl mx-auto">
                  &ldquo;{test.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <h4 className="text-luxury-gold font-bold text-base">
                    {test.author}
                  </h4>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    {test.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-luxury-gold hover:border-luxury-gold/50 transition-all"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs text-zinc-500">
              {activeTestimonial + 1} / {testimonials.length}
            </span>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:text-luxury-gold hover:border-luxury-gold/50 transition-all"
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
              Schedule a bespoke consultation with our furniture designers. Let
              us curate premium timber selections and draft conceptual
              configurations for your residence.
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
            <video autoPlay controls className="w-full h-full object-cover">
              <source src="/videos/craftsmanship.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
