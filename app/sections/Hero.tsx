"use client";

import Image from "next/image";
import PhoneMockup from "../components/composite/PhoneMockup";
import Button from "../components/ui/Button";
import { useParallax } from "../hooks/useParallax";

export default function Hero() {
  const phoneRef = useParallax({ speed: 0.3, disableOnMobile: true });

  return (
    <section className="">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h1 className="text-4xl md:text-5xl capitalize font-semibold leading-tight text-white">
            Your <span className="text-budgeta-green">money</span> your rules
          </h1>

          <p className="pt-1 text-budgeta-gray text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            With Budgeta, managing your finances has never been easier. Start
            tracking, planning, and achieving your financial goals today
          </p>

          {/* Bouton CTA avec icône */}
          <div className="flex justify-center">
            <Button className="flex gap-2 items-center px-3 py-3 capitalize hover:bg-budgeta-green/90 hover:gap-3 transition-all duration-300 group">
              Get free now
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                <Image
                  src="/arrow-icon.svg"
                  width={30}
                  height={30}
                  alt="logo budgeta"
                />
              </span>
            </Button>
          </div>
        </div>

        {/* Phone Mockup */}
        <div
          className="mt-16 z-20 lg:mt-16 relative will-change-transform animate-slide-up"
          id="phone-mockup"
        >
          {/* div pour l'image de fond avec rotation */}
          {/* <div className="absolute w-full bottom-[50%] h-[200px] bg-[url('/vector-footer.svg')] bg-cover bg-no-repeat" /> */}
          <PhoneMockup />
        </div>
      </div>
    </section>
  );
}
