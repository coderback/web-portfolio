'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const navLinks = [
    { href: '#profile', label: 'Home' },
    { href: '#about-experience', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md shadow-sm transition-colors text-black dark:text-white">
      <nav className="flex items-center justify-between px-6 py-4 md:px-16">
        {/* Logo */}
        <h1 className="text-2xl font-semibold font-spartan text-black dark:text-white">T.O. Ojebiyi</h1>

        {/* Desktop Nav Links with Dark Mode Toggle */}
        <ul className="hidden md:flex gap-8 font-medium text-lg items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-forest hover:underline underline-offset-8 dark:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full border border-gray-300 dark:border-white hover:bg-gray-100 dark:hover:bg-neutral-700 transition"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <SunIcon className="h-5 w-5 text-yellow-400" />
              ) : (
                <MoonIcon className="h-5 w-5 text-black dark:text-white" />
              )}
            </button>
          </li>
        </ul>

        {/* Mobile Right Controls */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full border border-gray-300 dark:border-white hover:bg-gray-100 dark:hover:bg-neutral-700 transition"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <SunIcon className="h-5 w-5 text-yellow-400" />
            ) : (
              <MoonIcon className="h-5 w-5 text-black dark:text-white" />
            )}
          </button>

          {/* Hamburger */}
          <div
            className={`menu-btn ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            role="button"
            tabIndex={0}
            aria-label="Toggle mobile menu"
            onKeyDown={(e) => e.key === 'Enter' && setIsOpen(!isOpen)}
          >
            <div className="menu-btn__burger dark:invert"></div>
          </div>
        </div>
      </nav>

      {/* Hamburger Overlay */}
      <div className={`menu-links ${isOpen ? 'open' : ''}`}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-forest hover:underline underline-offset-8"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
