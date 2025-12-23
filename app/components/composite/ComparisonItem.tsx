"use client";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";

type ComparisonItemProps = {
  item: string;
  icon: StaticImageData;
  borderColor: string;
  textColor: string;
  delay: number;
  variant: string;
};
export default function ComparisonItem({
  item,
  icon,
  borderColor,
  textColor,
  delay,
  variant,
}: ComparisonItemProps) {
  // ref d'élément de type li
  const itemReveal = useScrollReveal<HTMLLIElement>({ threshold: 0.1, delay });

  return (
    <li
      ref={itemReveal.elementRef}
      className={`py-4 flex items-center gap-3 border-b last:border-0 ${borderColor}
        ${
          itemReveal.isVisible
            ? "reveal-left-visible reveal-slow"
            : "reveal-left-hidden"
        }`}
    >
      <div className="w-6 h-6">
        <Image
          src={icon}
          width={27}
          height={27}
          alt={variant === "before" ? "Sad icon" : "Smiley icon"}
        />
      </div>

      <span className={`text-sm lg:text-lg font-medium ${textColor}`}>
        {item}
      </span>
    </li>
  );
}
