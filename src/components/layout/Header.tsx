"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/estimate", label: "Free Estimate" },
  { href: "/schedule", label: "Schedule" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-[#1e3a5f]/50 bg-[#0a0f1a]/95 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-12">
              <Image
                src="/images/hail-lions-logo.png"
                alt="Hail Lions PDR Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold leading-none text-silver">
                Hail Lions
              </span>
              <span className="text-xs text-[#94a3b8]">PDR</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium transition-colors rounded-md",
                  link.href === "/estimate" || link.href === "/schedule"
                    ? "text-[#60a5fa] hover:text-[#93c5fd] hover:bg-[#60a5fa]/10"
                    : "text-[#94a3b8] hover:text-[#e8eaed] hover:bg-white/5"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+13467020510"
              className="flex items-center gap-2 text-sm font-medium text-[#94a3b8] hover:text-[#e8eaed] transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>(346) 702-0510</span>
            </a>
            <Button asChild size="sm" className="bg-[#60a5fa] hover:bg-[#3b82f6] text-[#0a0f1a] font-semibold">
              <Link href="/estimate">Get Estimate</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-white/10 text-[#e8eaed]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-[#1e3a5f]/50 bg-[#0a0f1a]/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 text-base font-medium rounded-md transition-colors",
                    link.href === "/estimate" || link.href === "/schedule"
                      ? "text-[#60a5fa] hover:text-[#93c5fd] bg-[#60a5fa]/10"
                      : "text-[#94a3b8] hover:text-[#e8eaed] hover:bg-white/5"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-[#1e3a5f]/50">
                <a
                  href="tel:+13467020510"
                  className="flex items-center gap-2 px-4 py-3 text-base font-medium text-[#94a3b8]"
                >
                  <Phone className="h-5 w-5" />
                  <span>(346) 702-0510</span>
                </a>
                <Button asChild className="w-full mt-2 bg-[#60a5fa] hover:bg-[#3b82f6] text-[#0a0f1a] font-semibold">
                  <Link href="/estimate">Get Free Estimate</Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
