"use client";

import { useEffect, useRef, useState } from "react";

type ScrollRevealOptions = {
  threshold?: number;
  delay?: number;
  rootMargin?: string;
};

export function useScrollReveal({
  threshold = 0.1,
  delay = 0,
  rootMargin = "0px",
}: ScrollRevealOptions = {}) {
  const elementRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // On vérifie si l'utilisateur préfère réduire les animations
    const prefersReduceMotion = window.matchMedia(
      "(prefers-reduce-motion: reduce)"
    ).matches;
    if (prefersReduceMotion) {
      // si préférence pour aniamtions réduites, on affiche directement
      setIsVisible(true);
      return;
    }

    // On crée l'observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // On applique le délai si spécifié
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    // cleanup
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, delay, rootMargin]);

  return { elementRef, isVisible };
}
