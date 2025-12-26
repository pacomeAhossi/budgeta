"use client";

import { useEffect, useState } from "react";
import Logo from "../brand/Logo";
import Navigation from "../headerLink/Navigation";
import Button from "../ui/Button";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleRoundedHeader = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleRoundedHeader);
    return () => window.removeEventListener("scroll", handleRoundedHeader);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 py-6 bg-black lg:h-[250px] overflow-hidden header-glow z-50 ${
        isScrolled ? "" : "rounded-t-[35px]"
      } `}
    >
      {/* div pour l'image de fond avec rotation */}
      <div
        className="absolute inset-0 bg-[url('/vector-footer.svg')] bg-cover bg-no-repeat transform rotate-x-180"
        style={{ transform: "rotateX(180deg)", zIndex: 0 }}
      />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex items-center justify-between h-20">
          <Logo />

          {/* Navigation Desktop - cachée sur mobile */}
          <div className="hidden lg:flex">
            <Navigation />
          </div>

          {/* Bouton Desktop - caché sur mobile */}
          <div className="hidden lg:block">
            <Button href="#download" variant="primary">
              Download
            </Button>
          </div>

          {/* Menu Burger Mobile */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
