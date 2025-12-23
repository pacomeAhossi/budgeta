"use client";
import sadIcon from "@/public/assets/icons/sad-icon.svg";
import smileyIcon from "@/public/assets/icons/smiley-icon.svg";
import Button from "../ui/Button";
import ComparisonItem from "./ComparisonItem";

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
      className={`${bgColor} p-[40px] rounded-[20px] w-full lg:w-[500px] border-[1px] ${borderColor}`}
    >
      <h3
        className={`${textColor} text-base lg:text-[2rem] capitalize font-bold mb-[20px] lg:mb-[40px] `}
      >
        {title}
      </h3>

      {/* Liste  */}
      <ul className={`rounded-xl p-4 border-[1px] ${borderColor} `}>
        {items.map((item, index) => (
          <ComparisonItem
            key={index}
            item={item}
            icon={icon}
            borderColor={borderColor}
            textColor={textColor}
            delay={variant === "before" ? 0 : index * 150}
            variant="before"
          />
        ))}
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
