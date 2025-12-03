"use client";
import { ReactNode } from "react";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";

type FeatureCardProps = {
  title: string;
  description: string;
  bulletPoints: string[];
  mockup: ReactNode;
  mockupPosition: "left" | "right";
  delay?: number;
};

export default function FeatureCard({
  title,
  description,
  bulletPoints,
  mockup,
  mockupPosition,
  delay = 0,
}: FeatureCardProps) {
  const cardReveal = useScrollReveal({ threshold: 0.2, delay });
  return (
    <div
      ref={cardReveal.elementRef as any}
      className={`bg-beige rounded-3xl mb-[40px] p-8 lg:px-[60px] lg:py-[102px] ${
        cardReveal.isVisible ? "reveal-visible reveal-slow" : "reveal-hidden"
      } `}
    >
      {/* Grid adaptatif selon la position du mockup */}
      <div
        className={`flex flex-col gap-8 lg:grid lg:grid-cols-2 lg:gap-12 items-center
          ${mockupPosition === "right" ? "" : "lg:grid-flow-dense"}  `}
      >
        <div
          className={`${
            mockupPosition === "right"
              ? "lg:col-start-2"
              : "lg:col-start-1 lg:row-start-1 lg:max-w-[80%] bg-black rounded-2xl p-2 lg:p-4"
          } `}
        >
          {mockup}
        </div>

        {/* Contenu du texte */}
        <div
          className={` space-y-6 ${
            mockupPosition === "right"
              ? "lg:col-start-1 lg:row-start-1"
              : "lg:col-start-2"
          }`}
        >
          <h3 className="text-2xl lg:text-3xl font-bold capitalize">{title}</h3>
          <p className="text-black text-base lg:text-xl leading-relaxed font-semibold">
            {description}
          </p>

          {/* Bullet points avec badges en vert  */}
          <ul className="space-y-3">
            {bulletPoints.map((bullet_item, index) => {
              // Hook pour chaque bullet avec délai progressif
              const bulletReveal = useScrollReveal({
                threshold: 0.1,
                delay: delay + 300 + index * 100,
              });

              return (
                <li ref={bulletReveal.elementRef as any} key={index}>
                  <span
                    className={` inline-block text-[11px] lg:text-base  bg-budgeta-green text-black px-4 py-2 font-semibold rounded-full ${
                      bulletReveal.isVisible
                        ? "reveal-right-visible reveal-slow "
                        : "reveal-right-hidden"
                    } `}
                  >
                    {bullet_item}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
