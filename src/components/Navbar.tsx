"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling when full screen mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glassmorphism py-4 shadow-lg shadow-black/20"
          : "bg-transparent py-6 border-b border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 relative py-1 ${
                    isActive
                      ? "text-luxury-gold"
                      : "text-luxury-text/80 hover:text-luxury-gold"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1px] bg-luxury-gold transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/contact-us"
              className="gold-gradient-bg text-luxury-black font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full flex items-center gap-1.5 hover:scale-105 hover:shadow-lg hover:shadow-luxury-gold/20 active:scale-95 transition-all duration-300"
            >
              Inquire Now
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden p-2 rounded-lg text-luxury-text hover:text-luxury-gold hover:bg-white/5 transition-all duration-300"
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Full Screen Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-[#0D0D0D]/98 backdrop-blur-2xl flex flex-col justify-between p-8 transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 translate-x-0 pointer-events-auto"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        {/* Top bar inside menu */}
        <div className="flex items-center justify-between">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Logo />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-luxury-text hover:text-luxury-gold hover:bg-white/5 transition-all duration-300"
            aria-label="Close menu"
          >
            <X className="w-7 h-7" />
          </button>
        </div>

        {/* Central Navigation Links */}
        <nav className="flex flex-col gap-8 items-center my-auto">
          {navItems.map((item, idx) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`font-display text-3xl font-bold tracking-wide transition-all duration-300 ${
                  isActive
                    ? "text-luxury-gold scale-105"
                    : "text-white/70 hover:text-luxury-gold hover:scale-105"
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Bottom CTA & Footer Info */}
        <div className="flex flex-col gap-6 items-center w-full mt-auto">
          <Link
            href="/contact-us"
            onClick={() => setIsOpen(false)}
            className="w-full max-w-xs gold-gradient-bg text-luxury-black font-semibold text-center text-sm tracking-wider uppercase py-4 rounded-full hover:scale-105 hover:shadow-lg hover:shadow-luxury-gold/20 active:scale-95 transition-all duration-300"
          >
            Inquire Now
          </Link>
          <div className="text-[10px] text-white/30 tracking-widest uppercase">
            Bansighar Enterprise &bull; Est. 2016
          </div>
        </div>
      </div>
    </header>
  );
}
