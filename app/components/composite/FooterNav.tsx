"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import React from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Features", href: "#features" },
  { label: "Revolutionize", href: "#revolutionize" },
  { label: "Reviews", href: "#reviews" },
  { label: "Download Now", href: "#download" },
];
export default function FooterNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => link.href.replace("#", ""));

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);

    // Si lien trouvé,
    if (targetElement) {
      // on fait un scroll vers la section correspondante
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <nav className="mt-16 lg:mt-20  ">
      <ul className="flex flex-wrap items-center justify-center gap-x-4 lg:gap-[2.5rem]">
        {navLinks.map((nav_link, index, array) => {
          // On vérifie si le state activeSection est égale au lien actuel sur lequel on map
          const isActive = activeSection === nav_link.href.replace("#", "");
          return (
            <React.Fragment key={nav_link.href}>
              <li>
                <Link
                  href={nav_link.href}
                  onClick={(e) => handleClick(e, nav_link.href)}
                  className={`text-xs lg:text-base font-medium transition-all duration-200 ${
                    isActive
                      ? "text-budgeta-green"
                      : "text-budgeta-gray hover:text-budgeta-gray/60"
                  }`}
                >
                  {nav_link.label}
                </Link>
              </li>
              {/* Si ce n'est pas le dernier élément de la liste, on affiche le petit point  */}
              {!(index === array.length - 1) && (
                <div className=" flex items-center justify-center w-1 h-1 bg-budgeta-gray rounded-full"></div>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
}
