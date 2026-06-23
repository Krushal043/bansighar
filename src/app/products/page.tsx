"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, SlidersHorizontal, X, ArrowUpRight, Star, AlertCircle, Info } from "lucide-react";
import { useSearchParams } from "next/navigation";

// Define TypeScript types for safety
interface Product {
  id: string;
  name: string;
  category: "Living" | "Dining" | "Bedroom" | "Workspace";
  price: string;
  image: string;
  rating: number;
  description: string;
  specs: {
    materials: string;
    dimensions: string;
    finish: string;
  };
}

function ProductsContent() {
  const productsData: Product[] = [
    {
      id: "sofa-imperial",
      name: "Imperial Charcoal Sofa",
      category: "Living",
      price: "Inquire for pricing",
      image: "/images/modern_sofa.png",
      rating: 5,
      description: "A masterclass in modern comfort. Features low-profile luxury seating, supportive cushions, and detailed tailoring supported by elegant solid wood and gold metal stilts.",
      specs: {
        materials: "Solid walnut frame, premium high-density foam, luxury linen-cotton blend",
        dimensions: "96\" W x 40\" D x 34\" H (Customizable)",
        finish: "Natural walnut lacquer & gold plating",
      },
    },
    {
      id: "table-royal",
      name: "Royal Walnut Dining Table",
      category: "Dining",
      price: "Inquire for pricing",
      image: "/images/dining_table.png",
      rating: 5,
      description: "Beautifully book-matched solid walnut planks showcasing rich natural grains and ripples. Sturdy architectural base reinforced with brass elements.",
      specs: {
        materials: "Solid American Black Walnut",
        dimensions: "84\" W x 40\" D x 30\" H (6-8 Seater)",
        finish: "Organic linseed oil & wax finish",
      },
    },
    {
      id: "bed-boutique",
      name: "Boutique Oak Bed Suite",
      category: "Bedroom",
      price: "Inquire for pricing",
      image: "/images/luxury_bed.png",
      rating: 5,
      description: "A serene bed frame crafted from select European white oak. Features a plush cream linen-upholstered headboard for optimal reading comfort.",
      specs: {
        materials: "Premium White Oak, high-grade linen headboard paneling",
        dimensions: "King Size (80\" W x 86\" D x 48\" Headboard H)",
        finish: "Matte protective eco-sealant",
      },
    },
    {
      id: "desk-executive",
      name: "Executive Walnut Desk",
      category: "Workspace",
      price: "Inquire for pricing",
      image: "/images/workspace_desk.png",
      rating: 5,
      description: "A premium statement desk with soft-close drawers, integrated cable routing channels, and details in hand-brushed brass hardware.",
      specs: {
        materials: "American Walnut, brushed brass frame accents",
        dimensions: "60\" W x 30\" D x 30\" H",
        finish: "Satin protective clear coat",
      },
    },
    {
      id: "table-coffee-artisan",
      name: "Artisan Living Room Set",
      category: "Living",
      price: "Inquire for pricing",
      image: "/images/hero_furniture.png",
      rating: 5,
      description: "An elegant curation of marble coffee tables and accent details that anchor the modern living layout with pure luxury.",
      specs: {
        materials: "Calacatta gold marble tops, oak frames, gold leaf details",
        dimensions: "Modular configurations available",
        finish: "Polished stone sealant & dark oak satin",
      },
    },
  ];

  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "All";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams]);

  const categories = ["All", "Living", "Dining", "Bedroom", "Workspace"];

  // Filter products based on search query and category
  const filteredProducts = productsData.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative">
      {/* Header Banner */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#050505] to-luxury-black border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center gap-4">
          <span className="text-xs uppercase tracking-widest text-luxury-gold font-semibold">
            The Collections
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight">
            Luxury Furniture <span className="gold-gradient-text">Catalogue</span>
          </h1>
          <p className="text-luxury-muted max-w-xl text-sm leading-relaxed mt-2">
            Every piece is made to order, custom-finished, and tailored to your architectural dimensions.
          </p>
        </div>
      </section>

      {/* Main Catalog Area */}
      <section className="py-16 bg-luxury-black min-h-[60vh] relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-12 pb-6 border-b border-white/5">
            {/* Category tabs */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-3 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 shrink-0 ${
                    selectedCategory === cat
                      ? "gold-gradient-bg text-luxury-black font-bold shadow-md shadow-luxury-gold/15"
                      : "bg-white/5 border border-white/10 text-luxury-text hover:bg-white/10 hover:border-luxury-gold/30"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search and Filters */}
            <div className="flex items-center gap-4 w-full md:w-96">
              <div className="relative w-full">
                <Search className="w-4 h-4 text-luxury-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search masterpieces..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2.5 text-xs text-luxury-text placeholder-luxury-muted focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-luxury-muted hover:text-white"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Results Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="group bg-luxury-charcoal rounded-2xl overflow-hidden border border-white/5 flex flex-col hover:border-luxury-gold/30 hover:shadow-xl hover:shadow-black/50 transition-all duration-300 cursor-pointer"
                >
                  {/* Image container */}
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

                  {/* Content details */}
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
                      <p className="text-xs text-luxury-muted mt-2 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>
                    </div>
                    <div className="flex items-center justify-between border-t border-white/5 pt-4 mt-auto">
                      <span className="text-xs text-luxury-gold font-semibold tracking-wide">
                        {product.price}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider text-luxury-gold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                        View Details
                        <ArrowUpRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-luxury-charcoal rounded-3xl border border-white/5 max-w-md mx-auto flex flex-col items-center gap-4">
              <AlertCircle className="w-12 h-12 text-luxury-gold/50" />
              <h3 className="text-lg font-bold text-white">No Masterpieces Found</h3>
              <p className="text-xs text-luxury-muted px-6">
                We couldn't find any furniture matching "{searchQuery}". Try modifying your category selection or search keywords.
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="mt-2 text-xs font-semibold uppercase tracking-wider text-luxury-gold hover:text-luxury-gold-light"
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md transition-all duration-300">
          <div
            className="relative w-full max-w-4xl bg-luxury-charcoal rounded-2xl border border-white/10 overflow-hidden shadow-2xl animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute right-4 top-4 z-10 p-2 rounded-full bg-black/60 text-luxury-muted hover:text-white hover:bg-black transition-all"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Product Image */}
              <div className="relative h-72 md:h-full min-h-[320px] bg-zinc-950">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-4 left-4 bg-luxury-black/70 backdrop-blur-md text-[10px] text-luxury-gold uppercase tracking-wider font-semibold px-2.5 py-1 rounded border border-white/5">
                  {selectedProduct.category} Category
                </span>
              </div>

              {/* Product Specifications & Text */}
              <div className="p-8 flex flex-col gap-6 max-h-[85vh] overflow-y-auto">
                <div>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(selectedProduct.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-luxury-gold text-luxury-gold" />
                    ))}
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                    {selectedProduct.name}
                  </h2>
                  <span className="text-sm text-luxury-gold font-medium mt-1 inline-block">
                    {selectedProduct.price}
                  </span>
                </div>

                <p className="text-sm text-luxury-muted leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Spec details table */}
                <div className="bg-luxury-black/50 border border-white/5 rounded-xl p-4 flex flex-col gap-3">
                  <div className="flex items-start justify-between border-b border-white/5 pb-2 text-xs">
                    <span className="text-luxury-muted">Materials:</span>
                    <span className="text-white text-right max-w-[200px] font-medium">
                      {selectedProduct.specs.materials}
                    </span>
                  </div>
                  <div className="flex items-start justify-between border-b border-white/5 pb-2 text-xs">
                    <span className="text-luxury-muted">Dimensions:</span>
                    <span className="text-white text-right font-medium">
                      {selectedProduct.specs.dimensions}
                    </span>
                  </div>
                  <div className="flex items-start justify-between text-xs">
                    <span className="text-luxury-muted">Wood Finish:</span>
                    <span className="text-white text-right font-medium">
                      {selectedProduct.specs.finish}
                    </span>
                  </div>
                </div>

                {/* Inquiry Notification */}
                <div className="flex items-start gap-2.5 text-xs text-luxury-muted bg-white/5 border border-white/5 rounded-xl p-3.5">
                  <Info className="w-4 h-4 text-luxury-gold shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    All pieces are handcrafted to order in our Gujarat workshops. Custom wood type, stains, dimensions, and fabric selection are available.
                  </span>
                </div>

                {/* Inquiry CTA */}
                <Link
                  href={`/contact-us?inquiry=${encodeURIComponent(selectedProduct.name)}`}
                  className="w-full text-center gold-gradient-bg text-luxury-black font-semibold text-xs tracking-wider uppercase py-4 rounded-xl hover:scale-[1.02] active:scale-95 transition-all duration-300"
                >
                  Inquire For Custom Commission
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import { Suspense } from "react";

export default function Products() {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center py-20 gap-4 bg-luxury-black min-h-[80vh]">
          <span className="w-10 h-10 border-4 border-luxury-gold/20 border-t-luxury-gold rounded-full animate-spin" />
          <p className="text-xs text-luxury-muted uppercase tracking-widest">
            Loading Collections Catalogue...
          </p>
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
