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
  { type: "image" as const, src: "/images/room.jpeg" },
  { type: "image" as const, src: "/images/sofa.jpeg" },
  { type: "image" as const, src: "/images/dining_table.png" },
  { type: "image" as const, src: "/images/badroom_1.jpeg" },
];

const useSwipe = (onSwipeLeft: () => void, onSwipeRight: () => void) => {
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
  };

  const onTouchEnd = () => {
    if (
      touchStartX.current === null ||
      touchStartY.current === null ||
      touchEndX.current === null ||
      touchEndY.current === null
    ) {
      return;
    }

    const diffX = touchStartX.current - touchEndX.current;
    const diffY = touchStartY.current - touchEndY.current;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > minSwipeDistance) {
      if (diffX > 0) {
        onSwipeLeft();
      } else {
        onSwipeRight();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
    touchEndX.current = null;
    touchEndY.current = null;
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
};

export default function Home() {
  const categories = [
    {
      name: "Living Room",
      desc: "Plush sofas, custom lounge chairs, and ambient coffee tables.",
      image: "/images/sofa.jpeg",
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
      image: "/images/badroom_1.jpeg",
      href: "/products?category=Bedroom",
    },
    {
      name: "Executive Workspace",
      desc: "Premium study desks and modern executive comfort.",
      image: "/images/workspace_desk.png",
      href: "/products?category=Workspace",
    },
  ];

  const clonedCategories = [
    categories[categories.length - 1],
    ...categories,
    categories[0],
  ];

  const scrollingServices = [
    { name: "Furniture Work", icon: <FaCouch className="w-8 h-8" /> },
    { name: "False Ceiling", icon: <FaBorderAll className="w-8 h-8" /> },
    { name: "Color Work", icon: <FaPaintRoller className="w-8 h-8" /> },
    { name: "Electrical Work", icon: <FaBolt className="w-8 h-8" /> },
    {
      name: "Section Window Work",
      icon: <FaWindowMaximize className="w-8 h-8" />,
    },
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
    {
      name: "Premium Door Solutions",
      icon: <FaDoorOpen className="w-8 h-8" />,
    },
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

  const clonedBrandPillars = [
    brandPillars[brandPillars.length - 1],
    ...brandPillars,
    brandPillars[0],
  ];

  const craftingSteps = [
    {
      step: "01",
      title: "Design & Vision",
      desc: "We collaborate closely to define custom dimensions, layouts, timber species, and luxury hardware.",
      icon: <MessageSquare className="w-5 h-5 text-luxury-gold" />,
      image: "/images/room.jpeg",
      detail: "Includes 3D conceptual drafts",
    },
    {
      step: "02",
      title: "Kiln Seasoning",
      desc: "Logs are cut and kiln-dried to 8-12% moisture content to prevent warping over generations.",
      icon: <Trees className="w-5 h-5 text-luxury-gold" />,
      image: "/images/bardboard.jpeg",
      detail: "Moisture-tested timber",
    },
    {
      step: "03",
      title: "Masterful Joinery",
      desc: "Legacy artisans construct frames using traditional Mortise-and-Tenon joints for structural lifetime.",
      icon: <Hammer className="w-5 h-5 text-luxury-gold" />,
      image: "/images/kitchan_2.jpeg",
      detail: "Zero nails framework",
    },
    {
      step: "04",
      title: "Multi-coat Polish",
      desc: "Multiple stage hand-sanding followed by high-performance PU finishes and custom natural oils.",
      icon: <Sparkles className="w-5 h-5 text-luxury-gold" />,
      image: "/images/sofa.jpeg",
      detail: "Matte or high-gloss",
    },
    {
      step: "05",
      title: "White-Glove Setup",
      desc: "Rigorous quality check before items are padded, shipped, and custom-leveled on-site.",
      icon: <Truck className="w-5 h-5 text-luxury-gold" />,
      image: "/images/badroom_2.jpeg",
      detail: "Dedicated install team",
    },
  ];

  const clonedCraftingSteps = [
    craftingSteps[craftingSteps.length - 1],
    ...craftingSteps,
    craftingSteps[0],
  ];

  const testimonials = [
    {
      quote:
        "Banshighar Enterprise transformed our penthouse. The custom walnut dining table is not just furniture; it's a masterpiece that draws compliments from every guest.",
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
  const [currentPillarIndex, setCurrentPillarIndex] = useState(1);
  const [pillarTransitionEnabled, setPillarTransitionEnabled] = useState(true);

  // Derived activePillar (0 to 2)
  const activePillar =
    currentPillarIndex === 0
      ? brandPillars.length - 1
      : currentPillarIndex === brandPillars.length + 1
        ? 0
        : currentPillarIndex - 1;
  const [currentIndex, setCurrentIndex] = useState(1);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  // Derived activeStep (0 to 4) for tabs, dots, etc.
  const activeStep =
    currentIndex === 0
      ? craftingSteps.length - 1
      : currentIndex === craftingSteps.length + 1
        ? 0
        : currentIndex - 1;
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(1);
  const [categoryTransitionEnabled, setCategoryTransitionEnabled] =
    useState(true);

  // Derived activeCategory (0 to 3)
  const activeCategory =
    currentCategoryIndex === 0
      ? categories.length - 1
      : currentCategoryIndex === categories.length + 1
        ? 0
        : currentCategoryIndex - 1;
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
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  useEffect(() => {
    if (testimonials.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [activeTestimonial, testimonials.length]);

  // Auto-advance logic for Brand Pillars
  useEffect(() => {
    if (brandPillars.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setCurrentPillarIndex((prev) => prev + 1);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [currentPillarIndex, brandPillars.length]);

  // Re-enable transition after quick reset of currentPillarIndex
  useEffect(() => {
    if (!pillarTransitionEnabled) {
      const timeout = setTimeout(() => {
        setPillarTransitionEnabled(true);
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [pillarTransitionEnabled]);

  // Auto-advance logic for Crafting Steps
  useEffect(() => {
    if (craftingSteps.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [currentIndex, craftingSteps.length]);

  // Re-enable transition after quick reset of currentIndex
  useEffect(() => {
    if (!transitionEnabled) {
      const timeout = setTimeout(() => {
        setTransitionEnabled(true);
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [transitionEnabled]);

  // Auto-advance logic for Categories
  useEffect(() => {
    if (categories.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setCurrentCategoryIndex((prev) => prev + 1);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, [currentCategoryIndex, categories.length]);

  // Re-enable transition after quick reset of currentCategoryIndex
  useEffect(() => {
    if (!categoryTransitionEnabled) {
      const timeout = setTimeout(() => {
        setCategoryTransitionEnabled(true);
      }, 20);
      return () => clearTimeout(timeout);
    }
  }, [categoryTransitionEnabled]);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const nextPillar = () => {
    setCurrentPillarIndex((prev) => prev + 1);
  };

  const prevPillar = () => {
    setCurrentPillarIndex((prev) => prev - 1);
  };

  const handlePillarSelect = (idx: number) => {
    setPillarTransitionEnabled(true);
    setCurrentPillarIndex(idx + 1);
  };

  const handlePillarTransitionEnd = () => {
    if (currentPillarIndex === 0) {
      setPillarTransitionEnabled(false);
      setCurrentPillarIndex(brandPillars.length);
    } else if (currentPillarIndex === brandPillars.length + 1) {
      setPillarTransitionEnabled(false);
      setCurrentPillarIndex(1);
    }
  };

  const nextStep = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevStep = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const handleStepSelect = (idx: number) => {
    setTransitionEnabled(true);
    setCurrentIndex(idx + 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex === 0) {
      setTransitionEnabled(false);
      setCurrentIndex(craftingSteps.length);
    } else if (currentIndex === craftingSteps.length + 1) {
      setTransitionEnabled(false);
      setCurrentIndex(1);
    }
  };

  const nextCategory = () => {
    setCurrentCategoryIndex((prev) => prev + 1);
  };

  const prevCategory = () => {
    setCurrentCategoryIndex((prev) => prev - 1);
  };

  const handleCategorySelect = (idx: number) => {
    setCategoryTransitionEnabled(true);
    setCurrentCategoryIndex(idx + 1);
  };

  const handleCategoryTransitionEnd = () => {
    if (currentCategoryIndex === 0) {
      setCategoryTransitionEnabled(false);
      setCurrentCategoryIndex(categories.length);
    } else if (currentCategoryIndex === categories.length + 1) {
      setCategoryTransitionEnabled(false);
      setCurrentCategoryIndex(1);
    }
  };

  const heroSwipeHandlers = useSwipe(nextSlide, prevSlide);
  const categorySwipeHandlers = useSwipe(nextCategory, prevCategory);
  const pillarSwipeHandlers = useSwipe(nextPillar, prevPillar);
  const stepSwipeHandlers = useSwipe(nextStep, prevStep);
  const testimonialSwipeHandlers = useSwipe(nextTestimonial, prevTestimonial);

  return (
    <div className="relative overflow-hidden">
      {/* 1. Hero Section */}
      <section
        className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 overflow-hidden"
        {...heroSwipeHandlers}
      >
        {/* Background Carousel with Crossfade and Overlay */}
        <div className="absolute inset-0 z-0 bg-luxury-black">
          {heroSlides.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <div
                key={idx}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive
                    ? "opacity-100 z-10"
                    : "opacity-0 z-0 pointer-events-none"
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
              At Banshighar Enterprise, we bring nature&apos;s raw beauty into
              your living space. Exquisitely handcrafted solid wood furniture,
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
      <section className="py-16 relative z-10 bg-luxury-black border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
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

          {/* Slider Container with Translating Track */}
          <div
            className="relative px-4 sm:px-16 max-w-4xl mx-auto overflow-hidden"
            {...categorySwipeHandlers}
          >
            <div
              className={`flex ${categoryTransitionEnabled ? "transition-transform duration-500 ease-in-out" : ""}`}
              style={{
                transform: `translateX(-${currentCategoryIndex * 100}%)`,
              }}
              onTransitionEnd={handleCategoryTransitionEnd}
            >
              {clonedCategories.map((cat, idx) => (
                <div
                  key={idx}
                  className="w-full shrink-0 flex justify-center px-2"
                >
                  <Link
                    href={cat.href}
                    className="group relative w-full max-w-2xl h-[320px] sm:h-[420px] rounded-3xl overflow-hidden block border border-white/5 glow-gold-hover shadow-xl"
                  >
                    {/* Background Image */}
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="(max-w-768px) 100vw, 40vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/60 to-transparent opacity-90" />

                    {/* Text Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col justify-end h-1/2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-luxury-gold transition-colors duration-300">
                        {cat.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-luxury-muted mt-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                        {cat.desc}
                      </p>
                      <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-luxury-gold text-luxury-black flex items-center justify-center mt-4 self-start opacity-100 sm:opacity-0 sm:group-hover:opacity-100 -translate-x-0 sm:-translate-x-4 sm:group-hover:translate-x-0 transition-all duration-300">
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Controls (Dots only) */}
          <div className="flex flex-col items-center justify-center mt-6">
            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-2">
              {categories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCategorySelect(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === activeCategory
                      ? "bg-luxury-gold w-6"
                      : "bg-white/30"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Brand Pillars */}
      <section className="py-16 bg-white border-b border-zinc-200/60 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-widest text-luxury-gold font-semibold">
            Brand Values
          </span>
          <h2 className="font-display text-4xl font-bold text-luxury-black mt-2 mb-8">
            Built on Three Pillars
          </h2>

          <div
            className="relative px-4 sm:px-16 max-w-4xl mx-auto overflow-hidden"
            {...pillarSwipeHandlers}
          >
            <div
              className={`flex ${pillarTransitionEnabled ? "transition-transform duration-500 ease-in-out" : ""}`}
              style={{ transform: `translateX(-${currentPillarIndex * 100}%)` }}
              onTransitionEnd={handlePillarTransitionEnd}
            >
              {clonedBrandPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="w-full shrink-0 flex justify-center px-2"
                >
                  <div className="w-full max-w-2xl bg-zinc-50 border border-zinc-200/80 p-8 sm:p-12 rounded-3xl shadow-md flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-2xl bg-luxury-gold/10 flex items-center justify-center mb-6">
                      {pillar.icon}
                    </div>
                    <h3 className="text-2xl font-display font-bold text-luxury-black mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Controls (Dots only) */}
          <div className="flex flex-col items-center justify-center mt-6">
            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-2">
              {brandPillars.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePillarSelect(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === activePillar ? "bg-luxury-gold w-6" : "bg-zinc-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Legacy and Craftsmanship Section */}
      <section className="py-24 bg-luxury-charcoal border-y border-white/5 relative z-10 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex flex-col gap-6 items-center">
            <span className="text-xs uppercase tracking-widest text-luxury-gold font-semibold">
              Our Legacy
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight">
              Crafting Character, Shaping Logs
            </h2>
            <p className="text-luxury-muted leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
              At Banshighar Enterprise, we believe that every piece of wood
              tells a story. For over a decade, we have been salvaging raw logs
              and turning them into masterpieces that carry warmth, structural
              integrity, and artistic prestige.
            </p>
            <p className="text-luxury-muted leading-relaxed max-w-2xl mx-auto text-sm sm:text-base">
              We reject low-quality veneers and particle boards. Our collections
              are crafted entirely from premium grade timber, designed, dried,
              and assembled using traditional mortise-and-tenon joints combined
              with state-of-the-art precision machinery.
            </p>
            <div className="grid grid-cols-2 gap-12 mt-6 border-t border-white/5 pt-8 w-full max-w-lg mx-auto">
              <div>
                <h4 className="text-3xl sm:text-4xl font-display font-bold text-luxury-gold">
                  10+ Years
                </h4>
                <p className="text-xs text-luxury-muted mt-1">
                  Exquisite Woodworking Heritage
                </p>
              </div>
              <div>
                <h4 className="text-3xl sm:text-4xl font-display font-bold text-luxury-gold">
                  100%
                </h4>
                <p className="text-xs text-luxury-muted mt-1">
                  Bespoke Design Satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Our Crafting Process (Split Slider Layout: Image on Left, Text on Right) */}
      <section className="py-16 bg-luxury-charcoal border-y border-white/5 relative z-10 overflow-hidden">
        {/* Decorative background glows */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-luxury-gold/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-widest text-luxury-gold font-semibold">
              The Journey of Quality
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mt-2">
              Our Crafting Process
            </h2>
            <p className="text-luxury-muted mt-4 text-sm sm:text-base leading-relaxed">
              From raw logs to bespoke masterpieces installed in your home,
              discover the meticulous step-by-step path of precision
              woodworking.
            </p>
          </div>

          {/* Step Selector Tabs (Desktop/Tablet) */}
          <div className="hidden md:flex justify-between items-center max-w-5xl mx-auto mb-8 border-b border-white/10 pb-4">
            {craftingSteps.map((item, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={idx}
                  onClick={() => handleStepSelect(idx)}
                  className="flex items-center gap-3 pb-4 relative group cursor-pointer transition-all duration-300"
                >
                  <span
                    className={`font-display text-lg font-bold transition-colors ${
                      isActive
                        ? "text-luxury-gold"
                        : "text-white/40 group-hover:text-white"
                    }`}
                  >
                    {item.step}
                  </span>
                  <span
                    className={`text-sm font-semibold transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-white/40 group-hover:text-white"
                    }`}
                  >
                    {item.title}
                  </span>
                  {/* Active bottom line indicator */}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 gold-gradient-bg shadow-[0_2px_10px_rgba(200,162,118,0.5)]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Step Selector (Scrollable horizontally) */}
          <div className="flex md:hidden gap-6 overflow-x-auto scrollbar-none pb-4 mb-6 border-b border-white/5 snap-x snap-mandatory">
            {craftingSteps.map((item, idx) => {
              const isActive = idx === activeStep;
              return (
                <button
                  key={idx}
                  onClick={() => handleStepSelect(idx)}
                  className="flex items-center gap-2 pb-2 shrink-0 snap-center relative cursor-pointer"
                >
                  <span
                    className={`font-display text-sm font-bold ${
                      isActive ? "text-luxury-gold" : "text-white/40"
                    }`}
                  >
                    {item.step}
                  </span>
                  <span
                    className={`text-xs font-semibold ${
                      isActive ? "text-white" : "text-white/40"
                    }`}
                  >
                    {item.title}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 gold-gradient-bg" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Stacked Slider Viewport with translating track */}
          <div
            className="relative w-full overflow-hidden max-w-2xl mx-auto px-4 mt-8"
            {...stepSwipeHandlers}
          >
            <div
              className={`flex ${transitionEnabled ? "transition-transform duration-500 ease-in-out" : ""}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {clonedCraftingSteps.map((item, idx) => (
                <div key={idx} className="w-full shrink-0 flex flex-col px-2">
                  {/* 1. Image Container with overlaid Step Number & Detail Badge */}
                  <div className="relative w-full h-[280px] sm:h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-luxury-black glow-gold-hover">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-w-768px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                    {/* Step Number Overlay */}
                    <div className="absolute top-6 left-6 z-20 w-12 h-12 rounded-2xl gold-gradient-bg flex items-center justify-center font-display text-xl font-bold text-luxury-black shadow-lg">
                      {item.step}
                    </div>

                    {/* Floating Detail Badge */}
                    <div className="absolute bottom-6 right-6 z-20 px-4 py-2 rounded-xl bg-luxury-black/60 backdrop-blur-md border border-white/10 text-[10px] font-semibold uppercase tracking-wider text-luxury-gold shadow-lg">
                      {item.detail}
                    </div>
                  </div>

                  {/* 2. Little Space under image */}
                  <div className="mt-6 text-center flex flex-col items-center gap-2">
                    {/* 3. Name & Description */}
                    <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-luxury-muted text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Controls Bar */}
          <div className="flex flex-col items-center justify-center mt-6">
            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-2">
              {craftingSteps.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleStepSelect(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === activeStep ? "bg-luxury-gold w-6" : "bg-white/20"
                  }`}
                  aria-label={`Go to step ${idx + 1}`}
                />
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

          <div
            className="relative px-4 sm:px-16 max-w-4xl mx-auto overflow-hidden"
            {...testimonialSwipeHandlers}
          >
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
                    <p className="text-xs text-zinc-500 mt-0.5">{test.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop Side Arrows */}
            <button
              onClick={prevTestimonial}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-zinc-200 bg-white hover:text-luxury-gold hover:border-luxury-gold/50 shadow-xs items-center justify-center transition-all cursor-pointer hover:scale-105 z-30"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-zinc-200 bg-white hover:text-luxury-gold hover:border-luxury-gold/50 shadow-xs items-center justify-center transition-all cursor-pointer hover:scale-105 z-30"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Bottom Controls (Dots & Mobile Arrows) */}
          <div className="flex flex-col items-center justify-center gap-6 mt-8">
            {/* Mobile Arrows */}
            <div className="flex md:hidden items-center gap-4">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-500 hover:text-luxury-gold hover:border-luxury-gold/50 transition-all"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-xs text-zinc-500 font-medium">
                {activeTestimonial + 1} / {testimonials.length}
              </span>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-zinc-200 bg-white flex items-center justify-center text-zinc-500 hover:text-luxury-gold hover:border-luxury-gold/50 transition-all"
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTestimonial(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === activeTestimonial
                      ? "bg-luxury-gold w-6"
                      : "bg-zinc-300"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
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
