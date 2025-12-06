"use client";

import React, { ReactNode } from "react";
import DownloadButtons from "../ui/DownloadButtons";

type DownloadHeaderProps = {
  badge: string;
  title: ReactNode;
  description: string;
};

export default function DownloadHeader({
  badge,
  title,
  description,
}: DownloadHeaderProps) {
  return (
    <div className="text-center space-y-4">
      <span className="inline-block text-xs lg:text-lg px-4 py-2 text-white font-medium uppercase bg-[#0D0D0D] rounded-full">
        {badge}
      </span>
      <h2 className="flex flex-col gap-2 text-lg lg:text-[3.5rem] text-white font-bold leading-tight">
        {" "}
        {title}{" "}
      </h2>
      <p className="text-sm lg:text-xl text-budgeta-gray font-medium leading-relaxed">
        {description}
      </p>
      {/* Les deux boutons download  */}
      <DownloadButtons />
    </div>
  );
}
