import { Compass, Hammer, Paintbrush, Truck, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Our Services | Bansighar Enterprise",
  description: "Explore our premium woodworking services, including custom furniture commissions, space planning, restoration, and white-glove installation.",
};

export default function Services() {
  const serviceList = [
    {
      icon: <Hammer className="w-6 h-6 text-luxury-gold" />,
      title: "Bespoke Commissions",
      desc: "Work directly with our design consultants to craft custom dining sets, statement beds, credenzas, and wardrobes sized to fit your architectural blueprints.",
      highlights: ["Choose exact wood logs (Teak, Walnut, Oak)", "Custom stains and fabric selections", "Lifetime joinery warranty"],
    },
    {
      icon: <Compass className="w-6 h-6 text-luxury-gold" />,
      title: "Space Layout Consultations",
      desc: "For full homes or commercial offices, our team matches spatial metrics and lighting configurations to recommend suitable furniture scales and layouts.",
      highlights: ["2D/3D CAD configuration previews", "Wood grain harmony pairing", "On-site measurements and check"],
    },
    {
      icon: <Paintbrush className="w-6 h-6 text-luxury-gold" />,
      title: "Teak & Walnut Restoration",
      desc: "Bring century-old family heirlooms back to life. We perform careful sanding, structural reinforcement, and apply premium natural oils to revive dry grains.",
      highlights: ["Eco-friendly organic wax finish", "Structural joint tightening", "Authentic period matching"],
    },
    {
      icon: <Truck className="w-6 h-6 text-luxury-gold" />,
      title: "White-Glove Delivery",
      desc: "Rest easy with our specialized shipping team. We pack in custom wooden crates, deliver inside your residence, assemble, and position items to your liking.",
      highlights: ["Covered transit insurance", "Zero-mess clean-up process", "Scheduled time-slot delivery"],
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Design Dialogue",
      desc: "We discuss your spatial ideas, budget constraints, choice of timber, and aesthetic inspirations.",
    },
    {
      num: "02",
      title: "3D CAD Blueprinting",
      desc: "Our design desk renders precise configurations with measurements for your structural review.",
    },
    {
      num: "03",
      title: "Wood Selection",
      desc: "Choose raw logs or slab patterns from our warehouse to set the tone of your item's grain.",
    },
    {
      num: "04",
      title: "Handcrafting & Joinery",
      desc: "Artisans shape, sand, and build the piece using traditional mortise-and-tenon joints.",
    },
    {
      num: "05",
      title: "Bespoke Polish & Finish",
      desc: "We apply premium natural oils, allowing the grain to stand out with a rich satin touch.",
    },
    {
      num: "06",
      title: "White-Glove Installation",
      desc: "Delivered, assembled, and set up in your room by our in-house technicians.",
    },
  ];

  return (
    <div className="relative">
      {/* Page Header */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#050505] to-luxury-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center gap-4">
          <span className="text-xs uppercase tracking-widest text-luxury-gold font-semibold">
            What We Do
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight">
            Premium Woodworking <span className="gold-gradient-text">Services</span>
          </h1>
          <p className="text-luxury-muted max-w-xl text-sm sm:text-base leading-relaxed mt-2">
            Providing tailored configurations, heritage restoration, and meticulous white-glove setup.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative z-10 border-t border-white/5 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceList.map((svc, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 rounded-2xl bg-luxury-charcoal border border-white/5 hover:border-luxury-gold/30 hover:shadow-xl hover:shadow-black/20 transition-all duration-500 group flex flex-col gap-6"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-luxury-gold/5 flex items-center justify-center shrink-0 group-hover:bg-luxury-gold/10 transition-colors">
                    {svc.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-luxury-gold transition-colors duration-300">
                    {svc.title}
                  </h3>
                </div>
                
                <p className="text-sm text-luxury-muted leading-relaxed">
                  {svc.desc}
                </p>

                <div className="border-t border-white/5 pt-6 mt-2">
                  <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
                    Service Features:
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {svc.highlights.map((hl, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs text-luxury-muted">
                        <CheckCircle2 className="w-4 h-4 text-luxury-gold shrink-0" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={`/contact-us?service=${encodeURIComponent(svc.title)}`}
                  className="mt-auto inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-luxury-gold hover:text-luxury-gold-light group-hover:translate-x-1 transition-all duration-300 pt-4"
                >
                  Book Service Inquiry
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Commission Process */}
      <section className="py-24 bg-luxury-charcoal border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs uppercase tracking-widest text-luxury-gold font-semibold">
              The Blueprint
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
              Our Crafting Journey
            </h2>
            <p className="text-luxury-muted text-sm mt-3 leading-relaxed">
              From the initial scribble of an idea to the final placement in your residence, we guide you through a transparent 6-step flow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative">
            {steps.map((step, idx) => (
              <div key={idx} className="relative flex flex-col gap-4 group">
                {/* Step number backdrop */}
                <div className="font-display font-bold text-7xl text-white/[0.02] absolute -top-8 -left-2 select-none group-hover:text-luxury-gold/[0.04] transition-colors duration-300">
                  {step.num}
                </div>
                <div className="relative">
                  <span className="text-xs font-semibold text-luxury-gold uppercase tracking-wider block mb-1">
                    Step {step.num}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-luxury-gold transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-sm text-luxury-muted mt-3 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 bg-luxury-black relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Have a Specific Concept in Mind?
          </h2>
          <p className="text-luxury-muted max-w-lg text-sm sm:text-base leading-relaxed">
            Send us raw sketches, photo inspirations, or architect CAD prints, and we'll draft an estimate within 48 hours.
          </p>
          <Link
            href="/contact-us"
            className="gold-gradient-bg text-luxury-black font-semibold text-sm px-8 py-3.5 rounded-full hover:scale-105 transition-transform"
          >
            Submit Design Blueprint
          </Link>
        </div>
      </section>
    </div>
  );
}
