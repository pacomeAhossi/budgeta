"use client";

import { useEffect, useRef, useState } from "react";

type ParallaxOptions = {
  speed?: number;
  disableOnMobile?: boolean;
};

export function useParallax({
  speed = 0.5,
  disableOnMobile = false,
}: ParallaxOptions = {}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Détection mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Si mobile et parallax désactivé, on skip
    if (disableOnMobile && isMobile) return;

    const handleScroll = () => {
      if (!elementRef.current) return;

      const scrolled = window.scrollY;
      const yPos = -(scrolled * speed);

      elementRef.current.style.transform = `translateY(${yPos}px)`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [speed, isMobile, disableOnMobile]);

  return elementRef;
}
