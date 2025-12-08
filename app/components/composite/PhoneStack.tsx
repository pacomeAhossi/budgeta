"use client";

import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import PhoneDownload from "../ui/PhoneDownload";

export default function PhonesStack() {
  // Référence pour chaque animation de phone
  const phone1Reveal = useScrollReveal({ threshold: 0.1, delay: 0 });
  const phone2Reveal = useScrollReveal({ threshold: 0.1, delay: 200 });

  return (
    <div className="hidden relative w-full h-full lg:flex items-center justify-center">
      {/* Container centré pour les 2 phones */}
      <div className="relative w-full max-w-[600px] h-full">
        {/* Phone 1 - Dashboard */}
        <div
          ref={phone1Reveal.elementRef as any}
          className={`
            absolute top-1/2 left-0
            ${
              phone1Reveal.isVisible
                ? "reveal-visible reveal-slow"
                : "reveal-hidden"
            }
          `}
          style={{
            transform: `translate(10%, -50%) rotate(-8deg)`,
            transformOrigin: "center",
            zIndex: 1,
          }}
        >
          <PhoneDownload variant="dashboard" />
        </div>

        {/* Phone 2 - DETAIL TRANSACTION  */}
        <div
          ref={phone2Reveal.elementRef as any}
          className={`
            absolute top-1/2 right-0
            ${
              phone2Reveal.isVisible
                ? "reveal-visible reveal-slow"
                : "reveal-hidden"
            }
          `}
          style={{
            transform: `translate(-25%, -50%) rotate(8deg)`,
            transformOrigin: "center",
            zIndex: 2,
          }}
        >
          <PhoneDownload variant="success" />
        </div>
      </div>
    </div>
  );
}
