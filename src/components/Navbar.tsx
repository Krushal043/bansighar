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
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-luxury-text hover:text-luxury-gold hover:bg-white/5 transition-all duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glassmorphism border-t border-white/5 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[350px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium tracking-wide py-2 border-b border-white/5 transition-all duration-300 ${
                  isActive ? "text-luxury-gold pl-2" : "text-luxury-text/80 hover:text-luxury-gold hover:pl-2"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
          <Link
            href="/contact-us"
            onClick={() => setIsOpen(false)}
            className="gold-gradient-bg text-luxury-black font-semibold text-center text-sm tracking-wider uppercase py-3 rounded-full mt-2 hover:opacity-90 transition-opacity"
          >
            Inquire Now
          </Link>
        </div>
      </div>
    </header>
  );
}
