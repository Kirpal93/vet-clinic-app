"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "होम", href: "#home" },
  { label: "सेवाएं", href: "#services" },
  { label: "हमारे बारे में", href: "#about" },
  { label: "समीक्षाएं", href: "#testimonials" },
  { label: "स्थान", href: "#location" },
  { label: "संपर्क", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm shadow-md"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="#home" onClick={() => handleNavClick("#home")} className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-green-700 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <div>
            <span className="font-bold text-xl text-green-900 tracking-tight">PawCare</span>
            <span className="block text-[10px] text-green-600 font-medium tracking-widest uppercase -mt-1">Vet Clinic</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-green-700 hover:bg-green-50 rounded-md transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          onClick={() => handleNavClick("#contact")}
          className="hidden md:inline-flex items-center gap-2 bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors shadow-md hover:shadow-lg cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          अपॉइंटमेंट बुक करें
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden p-2 rounded-md text-slate-700 hover:text-green-700 hover:bg-green-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="मेनू खोलें/बंद करें"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-6 py-3 text-sm font-medium text-slate-700 hover:text-green-700 hover:bg-green-50 transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li className="px-4 py-3">
              <button
                onClick={() => handleNavClick("#contact")}
                className="w-full bg-green-700 hover:bg-green-800 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors cursor-pointer"
              >
                अपॉइंटमेंट बुक करें
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
