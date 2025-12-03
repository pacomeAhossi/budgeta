"use client";
import Image from "next/image";
import sadIcon from "@/public/assets/icons/sad-icon.svg";
import smileyIcon from "@/public/assets/icons/smiley-icon.svg";
import Button from "../ui/Button";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";

type ComparisonCardProps = {
  title: string;
  items: string[];
  variant: "before" | "after";
};
export default function ComparisonCard({
  title,
  items,
  variant,
}: ComparisonCardProps) {
  const bgColor =
    variant === "before" ? "bg-[#0D0D0D]" : "bg-budgeta-gray-background";
  const textColor = variant === "before" ? "text-white" : "text-black";
  const itemTextColor = variant === "before" ? "text-white" : "text-black";
  const icon = variant === "before" ? sadIcon : smileyIcon;
  const borderColor =
    variant === "before" ? "border-[#252525]" : "border-[#DBDBDB] ";

  return (
    <div
      className={`${bgColor} p-[40px] rounded-[20px] lg:w-[500px] border-[1px] ${borderColor}`}
    >
      <h3
        className={`${textColor} text-base lg:text-[2rem] capitalize font-bold mb-[20px] lg:mb-[40px] `}
      >
        {title}
      </h3>

      {/* Liste  */}
      <ul className={`rounded-xl p-4 border-[1px] ${borderColor} `}>
        {items.map((item, index) => {
          const itemReveal = useScrollReveal({
            threshold: 0.1,
            delay: variant === "before" ? 0 : 200,
          });
          return (
            <li
              key={index}
              ref={itemReveal.elementRef as any}
              className={`py-4 flex items-center gap-3 border-b last:border-0 ${borderColor} ${
                itemReveal.isVisible
                  ? "reveal-left-visible reveal-slow"
                  : "reveal-left-hidden"
              } `}
            >
              <div className="w-6 h-6">
                <Image
                  src={icon}
                  width={27}
                  height={27}
                  alt={`${variant === "before" ? "Sad icon" : "Smiley icon"} `}
                />
              </div>
              <span
                className={`text-sm lg:text-lg font-medium ${itemTextColor}`}
              >
                {item}
              </span>
            </li>
          );
        })}
      </ul>

      {/* CTA uniquement si variant === 'after' */}
      {variant === "after" && (
        <div className="mt-8">
          <Button href="#" variant="primary" className="w-full">
            Get Started for Free
          </Button>
        </div>
      )}
    </div>
  );
}
