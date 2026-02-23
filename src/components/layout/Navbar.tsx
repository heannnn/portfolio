"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Home } from "lucide-react";
import ThemeToggle from "../ThemeToggle"; // ← 추가

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors dark:text-white">
            <Home size={22} />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-blue-500 transition-colors dark:text-gray-300 dark:hover:text-blue-400"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="dark:text-white"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
