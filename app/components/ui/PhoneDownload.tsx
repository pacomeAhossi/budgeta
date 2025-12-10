import Image from "next/image";

type PhoneDownloadProps = {
  variant: "dashboard" | "success";
};

export default function PhoneDownload({ variant }: PhoneDownloadProps) {
  return (
    <div className="relative w-[240px] md:w-[280px]">
      {/* Cadre du téléphone */}
      <div
        className="
        relative rounded-[2.5rem]
        bg-gradient-to-br from-gray-700/20 via-gray-600/20 to-gray-700/20
        p-[2px]
        shadow-2xl border border-[#8EADC1]
      "
      >
        {/* Fond du téléphone */}
        <div className="relative rounded-[2.4rem] bg-dark overflow-hidden h-[480px] md:h-[560px] p-2">
          {/* Dynamic Island */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
            {/* <div className="w-28 h-6 bg-dark rounded-b-3xl" /> */}
            <div className="w-32 h-7 bg-dark rounded-b-3xl flex items-center justify-center gap-2 ">
              {/* Caméra */}
              <div className="w-10 h-1 bg-gray-800 rounded-[32px]" />
              <div className="w-2 h-2 bg-gray-800 rounded-full" />
            </div>
          </div>

          {/* Screenshot de l'interface */}
          <div className="relative z-10 h-full">
            {variant === "dashboard" ? (
              <Image
                src="/assets/screen/dashboard-screen.png"
                alt="Dashboard interface"
                fill
                className=""
              />
            ) : (
              <Image
                src="/assets/screen/detail-screen.png"
                alt="Success interface"
                fill
                className=""
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
