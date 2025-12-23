import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import { FaApple, FaGoogle } from "react-icons/fa";

export default function DownloadButtons() {
  const buttonsReveal = useScrollReveal<HTMLDivElement>({
    threshold: 0.2,
    delay: 300,
  });
  return (
    <div
      ref={buttonsReveal.elementRef}
      className={`flex flex-wrap items-center justify-center gap-4 pt-4 lg:pt-0 ${
        buttonsReveal.isVisible ? "reveal-visible reveal-slow" : "reveal-hidden"
      }`}
    >
      <a
        href="#"
        className={`inline-flex items-center gap-2 py-[0.5rem] px-[0.75rem] lg:py-4 lg:px-6 text-sm lg:text-xl text-black bg-white capitalize rounded-full transition-all duration-200 hover:bg-gray-100 hover:scale-105 `}
      >
        <FaApple size={24} color="black" />
        <span>App store</span>
      </a>
      <a
        href="#"
        className="inline-flex items-center gap-2 py-[0.5rem] px-[0.75rem] lg:py-4 lg:px-6 text-sm lg:text-xl text-black bg-budgeta-green capitalize rounded-full transition-all duration-200 hover:bg-budgeta-green/90 hover:scale-105 "
      >
        <FaGoogle size={24} color="black" />
        <span>Google play</span>
      </a>
    </div>
  );
}
