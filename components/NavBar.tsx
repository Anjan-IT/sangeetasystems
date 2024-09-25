/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-undef */
import Link from "next/link";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/system/about", label: "About us" },
    { href: "/system/services", label: "Services" },
    { href: "/system/careers", label: "Careers" },
    // { href: "/system/caseStudie", label: "Case Studies" },
  ];

  return (
    <header className="bg-background/[0.2] backdrop-blur dark:bg-black-200 fixed inset-x-0 top-0 z-[5000] text-black shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <Link
          href="/"
          title="brand-logo"
          className="relative flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-auto h-[40px]"
          >
            <rect width="7" height="7" x="14" y="3" rx="1"></rect>
            <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path>
          </svg>

          {/* <img src="/logo.png" alt="logo" width={40} height={40} /> */}
          <span className="font-bold text-xl text-center">SANGEETA</span>
            <span className="text-md text-center">System</span>
        </Link>

        {/* Navigation for larger screens */}
        <nav className="hidden lg:flex items-center mx-8 space-x-10 text-black">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href}>
              <span className="text-sm font-medium hover:text-primary transition-colors">
                {item.label}
              </span>
            </Link>
          ))}
          <Link href="/system/contact">
            <span className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
              Contact
            </span>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-black-200 shadow-md">
          <nav className="container mx-auto px-4 py-2 flex flex-col space-y-2">
            {navItems.map((item, index) => (
              <Link key={index} href={item.href}>
                <span className="block py-2 text-sm font-medium hover:text-primary transition-colors">
                  {item.label}
                </span>
              </Link>
            ))}
            <Link href="/system/contact">
              <span className="block bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-colors text-center">
                Contact
              </span>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;