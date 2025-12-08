"use client";

type SubscribeHeaderProps = {
  title: string;
  description: string;
};

export default function SubscribeHeader({
  title,
  description,
}: SubscribeHeaderProps) {
  return (
    <div className="max-w-3xl mx-auto text-center space-y-6">
      <h2 className="text-white text-[1.5rem] lg:text-[3.5rem] font-bold">
        {title}
      </h2>
      <p className="text-sm lg:text-[1.25rem] text-budgeta-gray font-medium leading-tight border border-red-500">
        {description}
      </p>
    </div>
  );
}
