"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo, IconHamburger, IconClose } from "@/components/icons";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="relative z-50 bg-neutral-0 px-6 md:px-16 lg:px-32 py-8 md:py-14 flex items-center justify-between">
      
      {/* Brand Logo */}
      <Link href="/" className="focus:outline-none">
        <Logo />
      </Link>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-16 font-preset-6-bold text-slate-500">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={`relative transition-colors hover:text-zinc-900 ${
              isActive(link.href) ? "text-zinc-900" : ""
            } after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[2px] after:bg-zinc-900 hover:after:w-full after:transition-all`}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden focus:outline-none p-2"
        aria-label="Toggle Navigation Menu"
      >
        {isMobileMenuOpen ? <IconClose /> : <IconHamburger />}
      </button>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-stone-100 px-12 py-10 flex flex-col gap-6 shadow-2xl md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`font-preset-4 text-zinc-900 hover:text-slate-500 transition-colors ${
                isActive(link.href) ? "font-bold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
