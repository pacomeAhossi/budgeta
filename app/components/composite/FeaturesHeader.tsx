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
        className={`inline-block text-xs lg:text-lg px-4 py-2 uppercase text-dark bg-[#F5F5F5] rounded-full font-semibold ${
          badgeReveal.isVisible ? "reveal-visible reveal-slow" : "reveal-hidden"
        } `}
      >
        {badge}
      </span>
      <h2
        ref={titleReveal.elementRef}
        className={`text-2xl text-black md:4xl lg:5xl font-bold capitalize ${
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
