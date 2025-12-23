"use client";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";

type FeaturesHeaderProps = {
  badge: string;
  title: string;
  description: string;
};

export default function FeaturesHeader({
  badge,
  title,
  description,
}: FeaturesHeaderProps) {
  const badgeReveal = useScrollReveal<HTMLSpanElement>({
    threshold: 0.2,
    delay: 0,
  });
  const titleReveal = useScrollReveal<HTMLHeadingElement>({
    threshold: 0.2,
    delay: 100,
  });
  const descriptionReveal = useScrollReveal<HTMLParagraphElement>({
    threshold: 0.2,
    delay: 200,
  });
  return (
    <div className="text-center mb-[60px] maw-w-2xl mx-auto space-y-4 ">
      <span
        ref={badgeReveal.elementRef}
        className={`inline-block text-xs uppercase text-black bg-budgeta-gray/30 px-2 py-1 rounded-full tracking-widest font-semibold ${
          badgeReveal.isVisible ? "reveal-visible reveal-slow" : "reveal-hidden"
        } `}
      >
        {badge}
      </span>
      <h2
        ref={titleReveal.elementRef}
        className={`text-3xl md:4xl lg:5xl font-bold capitalize ${
          titleReveal.isVisible ? "reveal-visible reveal-slow" : "reveal-hidden"
        } `}
      >
        {title}
      </h2>
      <p
        ref={descriptionReveal.elementRef}
        className={`text-base md:text-lg text-gray-600 leading-relaxed ${
          descriptionReveal.isVisible
            ? "reveal-scale-visible reveal-slow"
            : "reveal-scale-hidden"
        } `}
      >
        {description}
      </p>
    </div>
  );
}
