"use client";

import { useScrollReveal } from "@/app/hooks/useScrollReveal";

type ReviewsHeaderProps = {
  badge: string;
  title: string;
  description: string;
};
export default function ReviewsHeader({
  badge,
  title,
  description,
}: ReviewsHeaderProps) {
  const badgeReveal = useScrollReveal({ threshold: 0.2, delay: 0 });
  const titleReveal = useScrollReveal({ threshold: 0.2, delay: 100 });
  const descriptionReveal = useScrollReveal({ threshold: 0.2, delay: 200 });
  return (
    <div className="text-center  mx-auto space-y-4 ">
      <span
        ref={badgeReveal.elementRef as any}
        className={`inline-block text-xs lg:text-lg px-4 py-2 text-dark uppercase font-medium tracking-widest bg-[#F5F5F5] rounded-full ${
          badgeReveal.isVisible ? "reveal-visible reveal-slow" : "reveal-hidden"
        } `}
      >
        {badge}
      </span>
      <h2
        ref={titleReveal.elementRef as any}
        className={`text-2xl md:text-3xl lg:text-[3.5rem] lg:py-2 text-black capitalize font-bold ${
          titleReveal.isVisible ? "reveal-visible reveal-slow" : "reveal-hidden"
        }`}
      >
        {title}
      </h2>
      <p
        ref={descriptionReveal.elementRef as any}
        className={`text-[0.625rem] lg:text-xl font-medium text-budgeta-gray ${
          descriptionReveal.isVisible
            ? "reveal-scale-visible reveal-slow"
            : "reveal-scale-hidden"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
