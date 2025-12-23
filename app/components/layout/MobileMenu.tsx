"use client";

import { useState, useEffect } from "react";

// Type pour les items de navigation
type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Revolutionize", href: "#revolutionize" },
  { label: "Reviews", href: "#reviews" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Fonction pour pour détecter la section active
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.replace("#", ""));

      for (const sectionId in sections) {
        const element = document.getElementById(sectionId);

        if (element) {
          const rect = element.getBoundingClientRect();
          // Si la section est visible dans les 300px du top du viewport,
          // on le déclare comme active en modifiant le state à cette valeur de section
          if (rect.top <= 300 && rect.bottom >= 300) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    // Exécution initiale de la fonction
    handleScroll();

    // Exécution de la fonction au scroll pour détecter l'élément visible
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fonction pour le scroll vers la section spécifique au clic sur un menu
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Hauteur du header pour ajuster le scroll
      //   On sustrait la hauteur du header pour que le début de la section reste visible
      const headerHeight = 250;
      const targetPosition = targetElement.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Fermer le menu après le clic
      setIsOpen(false);
    }
  };

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
                const isActive = activeSection === item.href.replace("#", "");

                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
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
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="pb-8">
            <a
              href="#download"
              onClick={(e) => handleClick(e, "#download")}
              className="block w-full text-center bg-budgeta-green text-budgeta-dark px-6 py-3 rounded-lg font-semibold
                transition-all duration-200
                hover:bg-budgeta-green/90 "
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
