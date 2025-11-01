"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "À propos", href: "#about" },
  { label: "Mon parcours", href: "#experiences" },
  { label: "Compétences", href: "#competences" },
  { label: "Projets", href: "#projets" },
  { label: "Contact", href: "#contact" },
];

const Nav: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setS] = useState(false);

  useEffect(() => {
    const handler = () => setS(window.scrollY > 20);
    handler();
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg backdrop-blur bg-black/95" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:py-4 md:px-6 lg:px-8">
        <Link
          href="#hero"
          onClick={() => setOpen(false)}
          className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-transparent bg-gradient-to-r from-blue-900 via-gray-700 to-gray-500 bg-clip-text hover:opacity-80 transition-opacity"
        >
          Accueil
        </Link>

        <nav className="hidden gap-4 lg:gap-8 md:flex">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="relative text-sm lg:text-lg font-medium text-white transition hover:text-gray-300 focus:outline-none
           after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left
           after:scale-x-0 after:bg-gradient-to-r after:from-blue-900 after:to-gray-500
           after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className={`text-2xl md:hidden focus:outline-none transition-colors ${
            scrolled ? "text-white" : "text-white"
          }`}
          aria-label="Ouvrir / fermer le menu"
        >
          <FontAwesomeIcon icon={open ? faTimes : faBars} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden bg-black/95 backdrop-blur-xl md:hidden shadow-lg"
          >
            {links.map(({ label, href }, i) => (
              <motion.li
                key={href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="border-b border-gray-700 last:border-none"
              >
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 text-base sm:text-lg font-medium text-white hover:text-gray-300 hover:bg-white/5 transition-all"
                >
                  {label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
