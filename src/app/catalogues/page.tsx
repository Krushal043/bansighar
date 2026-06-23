"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Search, ArrowDownToLine, ArrowRight, HelpCircle, ShieldCheck, FileText, LayoutGrid, CheckCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

interface Catalogue {
  id: string;
  title: string;
  category: "Wooden Furniture" | "PVC Furniture" | "Aluminium Work" | "Hardware & Fittings" | "Ceilings";
  file: string;
  size: string;
  pages: string;
  description: string;
  bgGradient: string;
  borderColor: string;
  badgeColor: string;
  features: string[];
}

function CataloguesContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams]);

  const categories = ["All", "Wooden Furniture", "PVC Furniture", "Aluminium Work", "Hardware & Fittings", "Ceilings"];

  const cataloguesData: Catalogue[] = [
    {
      id: "wooden-furniture-designs",
      title: "Wooden Furniture Design Catalogue",
      category: "Wooden Furniture",
      file: "wooden_furniture_designs.pdf",
      size: "2.4 MB",
      pages: "32 Pages",
      description: "Explore our master collection of handcrafted solid Teak, Oak, and Walnut wood furniture. Includes layout illustrations, structural designs, and custom sizing options for luxury beds, premium dining tables, sofas, and ergonomic study desks.",
      bgGradient: "from-amber-950/20 via-zinc-900 to-black",
      borderColor: "group-hover:border-amber-500/30",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      features: [
        "Sustainably Sourced Teak & Oak",
        "Bed frames, Wardrobes & Living sets",
        "Full dimension blueprints included",
        "Mortise-and-Tenon traditional joints"
      ]
    },
    {
      id: "premium-sunmica-shades",
      title: "Premium Sunmica & Laminate Catalogue",
      category: "Wooden Furniture",
      file: "premium_sunmica_shades.pdf",
      size: "3.8 MB",
      pages: "48 Pages",
      description: "Browse the ultimate directory of premium Sunmica laminates. Includes full-page high-definition shade cards of textured woodgrains, luxurious high-gloss sheets, sleek acrylic solids, and textured accent boards from leading design brands.",
      bgGradient: "from-yellow-950/20 via-zinc-900 to-black",
      borderColor: "group-hover:border-yellow-500/30",
      badgeColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
      features: [
        "1mm & 1.25mm premium laminates",
        "Woodgrain, Marble, & Stone textures",
        "Scratch and heat resistant sheets",
        "Gloss, Suede, & Super-matte finishes"
      ]
    },
    {
      id: "solid-wood-doors",
      title: "Solid Wood Doors & Framing Catalogue",
      category: "Wooden Furniture",
      file: "solid_wood_doors.pdf",
      size: "1.6 MB",
      pages: "20 Pages",
      description: "Step up your home entryways with solid teak wood designer doors and modular frames. Showcases detailed carving patterns, safety double-door assemblies, heavy-duty frame moldings, and modern premium lacquering finishes.",
      bgGradient: "from-orange-950/20 via-zinc-900 to-black",
      borderColor: "group-hover:border-orange-500/30",
      badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
      features: [
        "Bespoke main entry carving doors",
        "Standard and double-door layouts",
        "Weatherproof exterior coatings",
        "Heavy designer wooden framing"
      ]
    },
    {
      id: "natural-veneers-highlights",
      title: "Natural Veneers & Highlights Booklet",
      category: "Wooden Furniture",
      file: "natural_veneers_highlights.pdf",
      size: "2.9 MB",
      pages: "28 Pages",
      description: "A luxury lookbook of natural wood veneers, designer charcoal louvers, MDF highlight panels, and metallic trim details. Perfect for crafting statement walls, luxury headboards, and sophisticated office reception desks.",
      bgGradient: "from-stone-800/25 via-zinc-900 to-black",
      borderColor: "group-hover:border-zinc-500/30",
      badgeColor: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
      features: [
        "Sourced Natural European veneers",
        "Charcoal and fluted wall panels",
        "CNC routing design templates",
        "Gold, Rose-Gold & Chrome profile trims"
      ]
    },
    {
      id: "pvc-kitchen-cabinets",
      title: "PVC Modular Kitchen & Cabinets Catalogue",
      category: "PVC Furniture",
      file: "pvc_kitchen_cabinets.pdf",
      size: "2.0 MB",
      pages: "28 Pages",
      description: "Plan water-resistant, rust-proof, and termite-free kitchen layouts. Showcases modular PVC kitchen designs, cabinet carcass assemblies, sliding drawers, pantry layouts, and sink vanity enclosures designed for structural durability.",
      bgGradient: "from-emerald-950/20 via-zinc-900 to-black",
      borderColor: "group-hover:border-emerald-500/30",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      features: [
        "100% Termite and rust proof",
        "L-shape, U-shape, & Island kitchens",
        "PVC multi-layer board core",
        "Anti-corrosive hinge mounts"
      ]
    },
    {
      id: "pvc-sunmica-panels",
      title: "PVC Sunmica & Wall Panels Catalogue",
      category: "PVC Furniture",
      file: "pvc_sunmica_panels.pdf",
      size: "1.5 MB",
      pages: "24 Pages",
      description: "Explore modern decorative wall cladding and cabinet finishes. Includes high-durability PVC Sunmica sheets, waterproof wall panel profiles, ceiling sections, and trim styles suitable for damp/humid bathrooms and utility areas.",
      bgGradient: "from-teal-950/20 via-zinc-900 to-black",
      borderColor: "group-hover:border-teal-500/30",
      badgeColor: "bg-teal-500/10 text-teal-400 border-teal-500/20",
      features: [
        "Anti-bacterial waterproof laminates",
        "Interlocking PVC wall paneling",
        "Damp-proof cabinetry finishes",
        "Low-maintenance easy-clean sheets"
      ]
    },
    {
      id: "aluminium-partitions",
      title: "Aluminium Themes & Sections Catalogue",
      category: "Aluminium Work",
      file: "aluminium_sections.pdf",
      size: "2.5 MB",
      pages: "52 Pages",
      description: "Detailed blueprints, structural drawings, and options for premium commercial office glass partitions, anodized aluminium sliding windows, structural elevation cladding (ACP sheets), and contemporary designer aluminium door framing.",
      bgGradient: "from-blue-950/20 via-zinc-900 to-black",
      borderColor: "group-hover:border-blue-500/30",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      features: [
        "Anodized & Powder Coated Profiles",
        "Commercial & Office Partition Layouts",
        "Acoustic Glass System Details",
        "ACP Elevation Cladding Concepts"
      ]
    },
    {
      id: "hardware-fittings",
      title: "Luxury Kitchen & Wardrobe Hardware",
      category: "Hardware & Fittings",
      file: "hardware_kitchen_wardrobe.pdf",
      size: "3.2 MB",
      pages: "64 Pages",
      description: "Explore our collection of high-performance soft-close drawer runners, intelligent kitchen organizers, tall pantry systems, heavy-duty wardrobe sliding door hardware, profile LED channels, and premium brass architectural handles.",
      bgGradient: "from-rose-950/20 via-zinc-900 to-black",
      borderColor: "group-hover:border-rose-500/30",
      badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
      features: [
        "Soft-Close Pull-Out Organizers",
        "Premium Architectural Handles",
        "Sliding Wardrobe Systems",
        "Profile Lights & Connectors"
      ]
    },
    {
      id: "ceilings-gypsum",
      title: "Gypsum Board & Folding Ceiling Catalog",
      category: "Ceilings",
      file: "ceilings_gypsum_board.pdf",
      size: "1.4 MB",
      pages: "24 Pages",
      description: "Design lookbook for luxury false ceilings, incorporating 2x2 grid folding ceilings, designer gypsum plasterboards, ambient strip LED lighting layouts, decorative ceiling medallions, and acoustic mineral fiber tile arrangements.",
      bgGradient: "from-cyan-950/20 via-zinc-900 to-black",
      borderColor: "group-hover:border-cyan-500/30",
      badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
      features: [
        "2x2 Grid Folding Ceilings",
        "Gypsum Board False Ceiling Patterns",
        "Ambient Cove Lighting Schemes",
        "Acoustic Insulation Details"
      ]
    }
  ];

  const filteredCatalogues = cataloguesData.filter((cat) => {
    const matchesCategory = selectedCategory === "All" || cat.category === selectedCategory;
    const matchesSearch =
      cat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative overflow-hidden min-h-[90vh]">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-luxury-gold/5 rounded-full blur-[150px] pointer-events-none" />

      {/* Header section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#050505] to-luxury-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-luxury-gold/10 border border-luxury-gold/20 text-xs font-semibold uppercase tracking-wider text-luxury-gold">
            <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold" />
            Resource Center
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight">
            Design & Material <span className="gold-gradient-text">Catalogues</span>
          </h1>
          <p className="text-luxury-muted max-w-xl text-sm sm:text-base leading-relaxed mt-2">
            Download our latest catalogues to view complete specifications, wood grains, sunmica collections, and architectural layout plans.
          </p>
        </div>
      </section>

      {/* Main downloads section */}
      <section className="py-16 bg-luxury-black relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Controls Bar: Search & Category Tabs */}
          <div className="flex flex-col gap-6 mb-12 pb-8 border-b border-white/5">
            {/* Search Input */}
            <div className="relative w-full max-w-md mx-auto md:mx-0">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-luxury-muted" />
              <input
                type="text"
                placeholder="Search catalogues..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-luxury-charcoal border border-white/10 rounded-full py-3 pl-12 pr-6 text-sm text-white placeholder-luxury-muted focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold/50 transition-all"
              />
            </div>

            {/* Category tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-xs sm:text-sm font-semibold tracking-wide px-5 py-2.5 rounded-full border transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    selectedCategory === cat
                      ? "gold-gradient-bg text-luxury-black border-transparent shadow-md shadow-luxury-gold/15"
                      : "bg-white/5 text-luxury-text/80 border-white/5 hover:bg-white/10 hover:border-luxury-gold/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Catalogues Grid */}
          {filteredCatalogues.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredCatalogues.map((cat) => (
                <div
                  key={cat.id}
                  className="group relative rounded-2xl overflow-hidden bg-gradient-to-br from-luxury-charcoal to-[#08080a] border border-white/5 hover:border-luxury-gold/20 hover:shadow-xl hover:shadow-black/50 hover:-translate-y-1 transition-all duration-500 flex flex-col sm:flex-row h-full"
                >
                  {/* Mock Cover Preview (Visual Representation) */}
                  <div className={`sm:w-48 bg-gradient-to-b ${cat.bgGradient} p-6 flex flex-col justify-between border-b sm:border-b-0 sm:border-r border-white/5 relative overflow-hidden shrink-0`}>
                    {/* Shadow overlay for book binding */}
                    <div className="absolute top-0 left-0 w-3 h-full bg-gradient-to-r from-black/30 to-transparent pointer-events-none" />
                    
                    <span className={`text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded border self-start ${cat.badgeColor}`}>
                      {cat.category}
                    </span>

                    <div className="my-8 flex flex-col gap-2 relative z-10">
                      <FileText className="w-10 h-10 text-luxury-gold opacity-90 group-hover:scale-110 transition-transform duration-300" />
                      <div className="h-0.5 w-12 bg-luxury-gold/50 my-1" />
                      <span className="font-display font-bold text-white text-sm tracking-tight leading-tight line-clamp-3">
                        {cat.title}
                      </span>
                    </div>

                    <div className="text-[10px] text-luxury-muted flex flex-col gap-0.5 mt-auto border-t border-white/5 pt-2">
                      <span>Format: PDF Document</span>
                      <span>{cat.pages}</span>
                    </div>
                  </div>

                  {/* Catalogue Details */}
                  <div className="p-6 flex flex-col justify-between flex-grow gap-6 bg-[#0c0c0e]">
                    <div className="flex flex-col gap-3">
                      <h3 className="text-lg font-bold text-white group-hover:text-luxury-gold transition-colors duration-300">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-luxury-muted leading-relaxed line-clamp-4">
                        {cat.description}
                      </p>
                      
                      {/* Features bullets */}
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-2">
                        {cat.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-1.5 text-[11px] text-luxury-text/90">
                            <CheckCircle className="w-3.5 h-3.5 text-luxury-gold shrink-0" />
                            <span className="truncate">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-wrap sm:flex-nowrap gap-3 mt-auto pt-4 border-t border-white/5">
                      <a
                        href={`/catalogues/${cat.file}`}
                        download
                        className="w-full sm:w-auto gold-gradient-bg text-luxury-black font-semibold text-xs tracking-wider uppercase px-5 py-3 rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 transition-all duration-300"
                      >
                        <ArrowDownToLine className="w-4 h-4" />
                        Download ({cat.size})
                      </a>
                      <a
                        href={`https://wa.me/918866682122?text=${encodeURIComponent(
                          `Hi Bansidhar, I would like to inquire about designs and rates for items in the "${cat.title}".`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-white/5 border border-white/10 hover:bg-luxury-gold/10 hover:border-luxury-gold/40 text-luxury-text hover:text-luxury-gold text-center text-xs font-semibold tracking-wider uppercase px-5 py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300"
                      >
                        <FaWhatsapp className="w-4 h-4 text-emerald-400" />
                        Inquire
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 flex flex-col items-center justify-center gap-4 bg-luxury-charcoal/30 border border-white/5 rounded-2xl">
              <LayoutGrid className="w-12 h-12 text-zinc-600 animate-pulse" />
              <div className="flex flex-col gap-1">
                <h3 className="text-white font-bold">No catalogues found</h3>
                <p className="text-xs text-luxury-muted">Try adjusting your search query or choosing another category.</p>
              </div>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-2 text-xs font-bold text-luxury-gold border-b border-luxury-gold pb-0.5 hover:text-luxury-gold-light hover:border-luxury-gold-light transition-all"
              >
                Clear Search & Filters
              </button>
            </div>
          )}

          {/* Special Requests Banner */}
          <div className="mt-16 glassmorphism rounded-3xl p-8 sm:p-12 border border-white/5 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 glow-gold">
            <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-luxury-gold/5 rounded-full blur-[80px] -mr-32 -mt-32 pointer-events-none" />
            
            <div className="flex flex-col gap-3 max-w-xl text-center md:text-left">
              <span className="text-xs uppercase tracking-widest text-luxury-gold font-semibold flex items-center gap-1.5 justify-center md:justify-start">
                <HelpCircle className="w-4 h-4" />
                Bespoke Selection
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Looking for a Custom Finish or Shade Card?
              </h2>
              <p className="text-luxury-muted text-xs sm:text-sm leading-relaxed">
                If you need a specific company shade card (e.g., Royal Touche, Merino Laminates, Greenlam) or custom PVC profile catalogues, our sales team can share them directly on WhatsApp.
              </p>
            </div>
            
            <a
              href="https://wa.me/918866682122?text=Hi%20Bansidhar,%20I'm%20looking%20for%20specific%20sunmica%20shade%2520cards%20or%20other%20material%20catalogues%20not%20listed%20on%20the%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="gold-gradient-bg text-luxury-black font-semibold text-xs tracking-wider uppercase px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:scale-105 shadow-lg shadow-luxury-gold/15 transition-all duration-300 shrink-0"
            >
              Request Custom Catalogue
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Trust points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 border-t border-white/5 pt-12">
            <div className="flex gap-3.5 items-start">
              <ShieldCheck className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white">Authentic Material Specifications</h4>
                <p className="text-xs text-luxury-muted mt-1 leading-relaxed">All catalogues show real measurements, wood ratings, laminate thicknesses, and structural parameters.</p>
              </div>
            </div>
            <div className="flex gap-3.5 items-start">
              <ShieldCheck className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white">Updated for 2026 Collection</h4>
                <p className="text-xs text-luxury-muted mt-1 leading-relaxed">Our digital resources are frequently updated to showcase modern architectural patterns and seasonal arrivals.</p>
              </div>
            </div>
            <div className="flex gap-3.5 items-start">
              <ShieldCheck className="w-5 h-5 text-luxury-gold shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-bold text-white">Immediate WhatsApp Support</h4>
                <p className="text-xs text-luxury-muted mt-1 leading-relaxed">Get swift estimates and schedule free structural measurements by sending any catalogue drawing to our sales desk.</p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

import { Suspense } from "react";

export default function CataloguesPage() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center py-20 gap-4 bg-luxury-black min-h-[80vh]">
          <span className="w-10 h-10 border-4 border-luxury-gold/20 border-t-luxury-gold rounded-full animate-spin" />
          <p className="text-xs text-luxury-muted uppercase tracking-widest">
            Loading Catalogues Resource Center...
          </p>
        </div>
      }
    >
      <CataloguesContent />
    </Suspense>
  );
}
