"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Type pour les items de navigation
type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Features", href: "/features" },
  { label: "Revolutionize", href: "/revolutionize" },
  { label: "Reviews", href: "/reviews" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // useEffect pour fermer le menu quand on change de page
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // useEffect pour bloquer le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Rétablir le scroll quand le menu est fermer
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Bouton Burger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 bg-white transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Overlay sombre qui se ferme au clic */}
      <div
        className={`
          fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden
          transition-opacity duration-300
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setIsOpen(false)}
      />

      {/* Menu latéral */}
      <div
        className={`
          fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-budgeta-dark z-40 lg:hidden
          transition-transform duration-300 ease-out
          border-l border-budgeta-gray/20 bg-black
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Contenu du menu */}
        <div className="flex flex-col h-full pt-24 px-8">
          <nav className="flex-1">
            <ul className="space-y-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`
                                block text-lg font-medium transition-colors duration-200
                                ${
                                  isActive
                                    ? "text-budgeta-green"
                                    : "text-white hover:text-budgeta-green"
                                }
                        `}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="pb-8">
            <Link
              href="/download"
              className="block w-full text-center bg-budgeta-green text-budgeta-dark px-6 py-3 rounded-lg font-semibold
                        transition-all duration-200
                        hover:bg-budgeta-green/90 "
            >
              Download
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
