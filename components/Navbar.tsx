"use client";

import { useState, useEffect } from "react";
import { Menu, X, Shirt, Sparkles, SunMedium } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 border-b ${
        isScrolled ? "border-pink-500/30 bg-black/90" : "border-transparent"
      } backdrop-blur-md transition-all`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between relative">
        {/* Logo */}
        <Link
          href="/"
          className="bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent text-2xl font-bold"
        >
          BADXISTA
        </Link>

        {/* Menu desktop – Catégories principales avec icônes */}
        <div className="hidden md:flex gap-8 items-center">
          {[
            { name: "Streetwear", href: "/streetwear", Icon: Shirt },
            { name: "Glamwear", href: "/glamwear", Icon: Sparkles },
            { name: "Glow Routine", href: "/glow-routine", Icon: SunMedium },
          ].map(({ name, href, Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center text-gray-300 hover:text-pink-400 transition-colors font-medium"
            >
              <Icon className="w-5 h-5 mr-1" />
              {name}
            </Link>
          ))}
        </div>

        {/* Menu mobile button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Overlay mobile */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg animate-in fade-in">
            <div className="flex flex-col items-center py-4 gap-6">
              <Link
                href="/streetwear"
                className="text-xl text-white"
                onClick={() => setIsOpen(false)}
              >
                Streetwear
              </Link>
              <Link
                href="/glamwear"
                className="text-xl text-white"
                onClick={() => setIsOpen(false)}
              >
                Glamwear
              </Link>
              <Link
                href="/glow-routine"
                className="text-xl text-white"
                onClick={() => setIsOpen(false)}
              >
                Glow Routine
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
