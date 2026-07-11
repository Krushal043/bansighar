"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  Home,
  Info,
  Sparkles,
  Package,
  Phone,
} from "lucide-react";
import { Logo } from "./Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollYRef.current && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Services", href: "/services", icon: Sparkles },
    { name: "Products", href: "/products", icon: Package },
    { name: "Contact Us", href: "/contact-us", icon: Phone },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ${
          isScrolled
            ? "bg-black/45 backdrop-blur-md py-2 shadow-lg shadow-black/5 border-b border-zinc-400/30"
            : "bg-black/45 backdrop-blur-md py-3 border-b border-zinc-400/20"
        } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-center md:justify-between">
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
                    className={`text-sm font-semibold tracking-wide transition-all duration-300 relative py-1 ${
                      isActive
                        ? "text-luxury-gold"
                        : "text-white/90 hover:text-luxury-gold"
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
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Tab Bar */}
      <div
        className="md:hidden fixed left-4 right-4 bottom-4 z-45 h-16"
        style={{ marginBottom: "env(safe-area-inset-bottom, 0px)" }}
      >
        {/* Background Layer with Shadow and Border */}
        <div className="absolute inset-0 bg-[#121212]/95 backdrop-blur-lg border border-zinc-800/60 rounded-2xl shadow-2xl shadow-black/85" />

        {/* Tab Items Container */}
        <div className="relative z-10 flex justify-around items-center h-full px-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className="relative flex flex-col items-center justify-center p-1"
                aria-label={item.name}
              >
                <div
                  className={`w-12 h-12 rounded-full border-[2px] flex items-center justify-center transition-all duration-500 ease-out ${
                    isActive
                      ? "border-[#080808] bg-luxury-gold text-luxury-black -translate-y-4 scale-110 shadow-lg shadow-luxury-gold/20"
                      : "border-transparent bg-transparent text-white/60 hover:text-white translate-y-0 scale-100"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
