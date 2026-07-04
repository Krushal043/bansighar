import Image from "next/image";
import Link from "next/link";
import {
  TreePine,
  Hammer,
  HeartHandshake,
  Award,
  ArrowUpRight,
} from "lucide-react";

export const metadata = {
  title: "About Us | Banshighar Enterprise",
  description:
    "Learn about the heritage, craftsmanship, and commitment to quality behind Banshighar Enterprise, custom furniture and aluminium designers.",
};

export default function About() {
  const milestones = [
    {
      year: "2015",
      title: "The Workshop Genesis",
      desc: "Founded as a boutique custom wood-carving studio in Gujarat with two master artisans specializing in pure teak dining tables.",
    },
    {
      year: "2018",
      title: "Expanding to Custom Interior Collaborations",
      desc: "Launched partnerships with luxury architects, delivering full residential custom furniture fit-outs.",
    },
    {
      year: "2021",
      title: "Sustainable Harvesting Certified",
      desc: "Signed official sustainability pledges, committing to 100% certified wood sourcing and eco-friendly oil finishes.",
    },
    {
      year: "2024",
      title: "A Decade of Fine Woodworking",
      desc: "Named one of the region's leading bespoke furniture houses, with a digital platform allowing custom configurations.",
    },
  ];

  const values = [
    {
      icon: <Hammer className="w-6 h-6 text-luxury-gold" />,
      title: "Absolute Integrity in Timber",
      desc: "We pledge to never use particle boards, MDF, or cheap veneers. If we say it is Solid Teak, it is 100% Solid Teak, inside and out.",
    },
    {
      icon: <TreePine className="w-6 h-6 text-luxury-gold" />,
      title: "Respect for the Forest",
      desc: "For every log processed, we contribute to reforestation drives in regional areas, keeping our green footprint active.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-luxury-gold" />,
      title: "Artisan Empowerment",
      desc: "We pay fair wages and sustain the traditional woodworking lineage, offering pensions and safety workshops for our master carpenters.",
    },
  ];

  return (
    <div className="relative">
      {/* Editorial Header */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-[#050505] to-luxury-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center gap-4">
          <span className="text-xs uppercase tracking-widest text-luxury-gold font-semibold">
            Our Heritage
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-3xl leading-tight">
            The Story Behind{" "}
            <span className="gold-gradient-text">Banshighar Enterprise</span>
          </h1>
          <p className="text-luxury-muted max-w-xl text-sm sm:text-base leading-relaxed mt-2">
            Bridging age-old handcrafted legacy with refined contemporary
            aesthetics since 2015.
          </p>
        </div>
      </section>

      {/* Main Story Grid */}
      <section className="py-20 relative z-10 border-t border-zinc-200/60 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Text block */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-luxury-black">
              Sourcing Premium Materials, Honoring Pure Hands
            </h2>
            <p className="text-zinc-600 leading-relaxed">
              Banshighar Enterprise was born out of a desire to rescue authentic
              craftsmanship from the rush of mass-manufactured, short-lived
              designs. In an era dominated by flat-pack boards and generic
              themes, we set out to construct items that increase in value,
              character, and beauty as they age.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              Our workshop operates on three core principles: selecting mature
              log varieties, giving artisans the time required to details every
              bevel, and finishing each piece with organic oils and waxes that
              let the natural wood grain breathe.
            </p>
            <blockquote className="border-l-2 border-luxury-gold pl-6 py-2 my-2 italic text-zinc-800 font-display text-lg">
              &ldquo;We do not build items to fill a showroom. We craft heritage
              assets that hold families together around dining tables, study
              desks, and comfortable bedrooms.&rdquo;
            </blockquote>
            <p className="text-zinc-600 leading-relaxed">
              Today, Banshighar Enterprise represents a community of master
              carpenters, metal fabricators, and designers who share one
              singular focus: absolute craftsmanship excellence.
            </p>
          </div>

          {/* Visual block */}
          <div className="lg:col-span-5 relative h-[500px] w-full rounded-2xl overflow-hidden border border-zinc-200/60 shadow-xl">
            <Image
              src="/images/room.jpeg"
              alt="Banshighar Masterpiece Space"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/95 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-6 glassmorphism rounded-xl border border-white/10 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-luxury-gold/15 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-luxury-gold" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">
                  Certified Master Carpentry
                </h4>
                <p className="text-[11px] text-luxury-muted">
                  A decade of specialized luxury commissions
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-luxury-charcoal border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-luxury-gold font-semibold">
              Our Ethos
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mt-2">
              Values We Carve Into Every Log
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-luxury-black border border-white/5 hover:border-luxury-gold/30 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-6"
              >
                <div className="w-12 h-12 rounded-xl bg-luxury-gold/5 flex items-center justify-center shrink-0">
                  {val.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {val.title}
                  </h3>
                  <p className="text-sm text-luxury-muted leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-24 relative z-10 bg-[#F9F9FB] border-t border-zinc-200/60">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-luxury-gold font-semibold">
              The Path
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-luxury-black mt-2">
              Our Milestone Journey
            </h2>
          </div>

          <div className="relative border-l border-zinc-200/80 max-w-3xl mx-auto pl-8 sm:pl-12 flex flex-col gap-12">
            {milestones.map((mile, idx) => (
              <div key={idx} className="relative group">
                {/* Bullet */}
                <div className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-zinc-200/80 group-hover:border-luxury-gold flex items-center justify-center transition-all duration-300">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-200 group-hover:bg-luxury-gold transition-colors duration-300" />
                </div>
                {/* Content */}
                <div>
                  <span className="font-display font-bold text-2xl text-luxury-gold">
                    {mile.year}
                  </span>
                  <h3 className="text-lg font-bold text-luxury-black mt-1 mb-2">
                    {mile.title}
                  </h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {mile.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consult CTA */}
      <section className="py-20 relative z-10 border-t border-white/5 bg-[#050505]">
        <div className="max-w-5xl mx-auto px-6 text-center flex flex-col items-center gap-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            Appreciate Master Woodworking In Person?
          </h2>
          <p className="text-luxury-muted max-w-lg text-sm sm:text-base leading-relaxed">
            Visit our workshop experience center in Gujarat, select raw planks
            directly, and watch our carpenters shape your bespoke layout.
          </p>
          <Link
            href="/contact-us"
            className="gold-gradient-bg text-luxury-black font-semibold text-sm px-8 py-3.5 rounded-full inline-flex items-center gap-2 hover:scale-105 transition-transform"
          >
            Request Visit Invitation
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
