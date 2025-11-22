import React from "react";

export default function PhoneFrame({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative w-full max-w-[280px] md:max-w[320px] mx-auto ">
      {/* Cadre du téléphone avec bordure lumineuse */}
      <div
        className="relative rounded-[3rem] bg-gradient-to-br from-cyan-500/20 via-blue-500/20
                to-cyan-500/20 p-[3px] "
      >
        {/* Fond noir du téléphone */}
        <div className="relative rounded-[2.85rem] bg-[#1a1a1a] overflow-hidden h-[500px] md:h-[550px]">
          {/* Encoche dynamique */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 ">
            <div className="w-32 h-7 bg-black rounded-b-3xl flex items-center justify-center gap-2 ">
              {/* Caméra */}
              <div className="w-10 h-1 bg-gray-800 rounded-[32px]" />
              <div className="w-2 h-2 bg-gray-800 rounded-full" />
            </div>
          </div>

          {/* Contenu de l'écran */}
          <div className="relative z-10 h-full ">{children}</div>
        </div>
      </div>

      {/* Effet lueur */}
      <div className="absolute inset-0 -z-10 blur-xl opacity-20 bg-gradient-to-br from-cyan-400 via-blue-500 to-cyan-400" />
    </div>
  );
}
