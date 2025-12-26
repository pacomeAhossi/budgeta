"use client";
import { ReactNode } from "react";

type RevolutionizeHeader = {
  badge: string;
  title: ReactNode;
  description: string;
};

export default function RevolutionizeHeader({
  badge,
  title,
  description,
}: RevolutionizeHeader) {
  return (
    <div className="text-center space-y-4 mb-2 lg:mb-[60px] ">
      <span className="inline-block text-xs lg:text-lg text-white px-4 py-2 uppercase font-medium bg-[#0D0D0D] rounded-full">
        {badge}
      </span>

      <h2 className="text-2xl md:text-4xl lg:text-5xl text-white font-bold capitalize ">
        {title}
      </h2>

      <p className="lg:max-w-3xl lg:mx-auto text-sm lg:text-lg text-budgeta-gray leading-relaxed">
        {description}
      </p>
    </div>
  );
}
