"use client";

import { useScrollReveal } from "@/app/hooks/useScrollReveal";

type FeatureBulletProps = {
  bulletText: string;
  delay: number;
};
export default function FeatureBullet({
  bulletText,
  delay,
}: FeatureBulletProps) {
  // Hook pour chaque bullet avec délai progressif
  const bulletReveal = useScrollReveal<HTMLLIElement>({
    threshold: 0.1,
    delay,
  });

  return (
    <li ref={bulletReveal.elementRef}>
      <span
        className={`inline-block text-[11px] lg:text-base bg-budgeta-green text-black px-4 py-2 font-semibold rounded-full ${
          bulletReveal.isVisible
            ? "reveal-right-visible reveal-slow"
            : "reveal-right-hidden"
        }`}
      >
        {bulletText}
      </span>
    </li>
  );
}
