'use client';
import { useEffect, useState } from 'react';
import { Bars3Icon, MoonIcon, SunIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { LINKS } from '../content/portfolio';

const NAV_LINKS = [
  { href: '#work', label: 'Work' },
  { href: '#research', label: 'Research' },
  { href: '#cv', label: 'CV' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'All 20' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // The theme script in layout.js has already applied the saved or system theme.
  useEffect(() => {
    setDarkMode(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleDarkMode = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      // Storage can be blocked; the theme still applies for this visit.
    }
  };

  const themeButton = (
    <button
      type="button"
      onClick={toggleDarkMode}
      className="nb-btn nb-btn-plain w-11 justify-center !px-0"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? <SunIcon className="h-5 w-5" aria-hidden="true" /> : <MoonIcon className="h-5 w-5" aria-hidden="true" />}
    </button>
  );

  return (
    <header className="sticky top-3 z-50 mx-auto mt-6 max-w-[1280px] px-4 sm:px-6">
      <div className="nb-card flex items-center justify-between gap-3 bg-paper px-4 py-3">
        <a href="#top" className="stk bg-yellow !text-[15px] text-on-yellow no-underline hover:text-on-yellow">
          &lt;/&gt; T.OJEBIYI
        </a>

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex flex-wrap items-center gap-6 font-mono text-[13px] font-bold uppercase">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-ink no-underline hover:text-cobalt">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {themeButton}
          <a href={`mailto:${LINKS.email}`} className="nb-btn nb-btn-primary hidden sm:inline-flex">
            SAY HI →
          </a>
          <button
            type="button"
            className="nb-btn nb-btn-plain w-11 justify-center !px-0 md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <XMarkIcon className="h-5 w-5" aria-hidden="true" /> : <Bars3Icon className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav id="mobile-menu" aria-label="Mobile" className="nb-card mt-3 bg-paper p-4 md:hidden">
          <ul className="flex flex-col gap-1 font-mono text-[15px] font-bold uppercase">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 text-ink no-underline hover:text-cobalt"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${LINKS.email}`} onClick={() => setIsOpen(false)} className="block py-2 no-underline">
                Say hi →
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
