"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X, User } from "lucide-react";
import LoginModal from "./LoginModal";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Tours", href: "/tours" },
  { label: "Activities", href: "/activities" },
  { label: "Organizations", href: "/organizations" },
  { label: "Destination", href: "/destination" },
  { label: "Services", href: "/service" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="https://vacationcappadocia.com/wp-content/uploads/2022/07/vacation-cappadocia-logo.svg"
              alt="Vacation Cappadocia"
              width={180}
              height={50}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-accent text-sm font-medium hover:text-primary transition-all duration-300 ease-out"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-accent hover:text-primary transition-all duration-300 ease-out p-2"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {/* Login */}
            <button
              onClick={() => setLoginOpen(true)}
              className="hidden sm:flex items-center gap-1.5 text-accent text-sm font-medium hover:text-primary transition-all duration-300 ease-out"
            >
              <User size={18} />
              <span>Login</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-accent p-2"
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {searchOpen && (
          <div className="bg-white shadow-md px-4 py-3">
            <div className="max-w-3xl mx-auto flex items-center gap-2">
              <input
                type="text"
                placeholder="Search tours, activities..."
                className="flex-1 bg-light-bg text-accent placeholder-text-lighter px-4 py-2.5 rounded-[3px] border border-border outline-none focus:ring-2 focus:ring-primary"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="text-body-text hover:text-accent p-2"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Sidebar */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileOpen(false)}
          />
          <aside className="absolute top-0 left-0 w-72 h-full bg-[#222] overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <Image
                src="https://vacationcappadocia.com/wp-content/uploads/2022/07/vacation-cappadocia-logo.svg"
                alt="Vacation Cappadocia"
                width={140}
                height={40}
              />
              <button
                onClick={() => setMobileOpen(false)}
                className="text-white p-1"
              >
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-white/80 hover:text-primary hover:bg-white/5 px-3 py-2.5 rounded-md transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  setMobileOpen(false);
                  setLoginOpen(true);
                }}
                className="flex items-center gap-2 text-white/80 hover:text-primary px-3 py-2.5 text-sm mt-2 border-t border-white/10 pt-4"
              >
                <User size={18} />
                Login
              </button>
            </nav>
          </aside>
        </div>
      )}

      <LoginModal isOpen={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}
