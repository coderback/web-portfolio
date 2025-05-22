import Link from 'next/link';

export default function Footer() {
  const navLinks = [
      { href: '#profile', label: 'Home' },
      { href: '#about-experience', label: 'About' },
      { href: '#skills', label: 'Skills' },
      { href: '#projects', label: 'Projects' },
      { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="mt-16 py-8 bg-white dark:bg-neutral-900 text-center border-t border-gray-200 dark:border-gray-700 text-sm text-gray-500 dark:text-gray-400">
      <nav className="flex flex-wrap justify-center gap-6 mb-3 text-sm sm:text-base">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-forest hover:underline underline-offset-8 font-medium"
            >
              {link.label}
            </Link>
          ))}
      </nav>
      <p className="text-sm text-gray-500">
        &copy; 2025 Timothy Ojebiyi. All Rights Reserved.
      </p>
    </footer>
  );
}
