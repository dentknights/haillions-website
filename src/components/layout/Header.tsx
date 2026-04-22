"use client";

import { useState } from "react";
import Link from "next/link";
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
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-10 w-10">
              <svg viewBox="0 0 40 40" className="h-full w-full" aria-hidden="true">
                <circle cx="20" cy="20" r="18" fill="#3b82f6" />
                <path
                  d="M12 20c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="20" cy="20" r="3" fill="white" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-none text-white">
                Hail Lions
              </span>
              <span className="text-xs text-gray-500">PDR</span>
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
                    ? "text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
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
              className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>(346) 702-0510</span>
            </a>
            <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/estimate">Get Estimate</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-white/10 text-white"
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
        <div className="lg:hidden border-t border-white/10 bg-black/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-3 text-base font-medium rounded-md transition-colors",
                    link.href === "/estimate" || link.href === "/schedule"
                      ? "text-blue-400 hover:text-blue-300 bg-blue-500/10"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-white/10">
                <a
                  href="tel:+13467020510"
                  className="flex items-center gap-2 px-4 py-3 text-base font-medium text-gray-400"
                >
                  <Phone className="h-5 w-5" />
                  <span>(346) 702-0510</span>
                </a>
                <Button asChild className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white">
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
