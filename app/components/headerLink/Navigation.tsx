"use client";

import { log } from "console";
import Link from "next/link";
import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Features", href: "#features" },
  { label: "Revolutionize", href: "#revolutionize" },
  { label: "Reviews", href: "#reviews" },
];
export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Fonction pour pour détecter la section active
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.replace("#", ""));

      for (const sectionId of sections) {
        console.log(sectionId);

        const element = document.getElementById(sectionId);

        if (element) {
          const rect = element.getBoundingClientRect();
          // Si la section est visible dans les 300px du top du viewport,
          // on le déclare comme active en modifiant le state à cette valeur de section
          if (rect.top <= 150 && rect.bottom >= 150) {
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
    }
  };

  return (
    <nav className="px-6 py-6 bg-[#252525] rounded-[50px] ">
      <ul className="flex items-center gap-8">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.replace("#", "");

          return (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={` text-white font-medium tracking-[0.05em] transition-colors duration-200 hover:text-budgeta-green ${
                  isActive ? "text-budgeta-green cursor-pointer" : ""
                } `}
              >
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
