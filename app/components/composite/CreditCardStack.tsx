import Image from "next/image";
export default function CreditCardStack() {
  return (
    // <div className="relative h-64 lg:h-80 border-[1px] border-red-500">
    //   {/* Carte 1 - Noire  */}
    //   <div className="absolute top-0 left-0 w-full max-w-[370px] h-[253px] bg-gradient-to-br from-gray-800 to-black rounded-2xl shadow-xl transform  translate-y-4">
    //     <div className="p-6 h-full flex flex-col justify-between">
    //       <div className="text-white text-sm font-medium">$1,300</div>
    //       <div className="text-white/60 text-xs">Holiday</div>
    //     </div>
    //   </div>

    //   {/* Carte 2 - Blanche */}
    //   <div className="absolute top-0 left-4 w-full max-w-[370px] h-[253px] bg-white rounded-2xl shadow-2xl transform  translate-y-8 border border-gray-200">
    //     <div className="p-6 h-full flex flex-col justify-between">
    //       <div className="flex items-center justify-between">
    //         <span className="text-gray-800 text-sm font-medium">4892</span>
    //         <span className="text-gray-400 text-xs">$1,300</span>
    //       </div>
    //       <div className="text-gray-600 text-xs">Emergency</div>
    //       <div className="text-gray-400 text-xs">•••• •••• ••••</div>
    //     </div>
    //   </div>

    //   {/* Carte 3 - Verte */}
    //   <div className="absolute top-0 left-8 w-full max-w-[370px] h-[253px] bg-gradient-to-br from-budgeta-green to-[#9AC400] rounded-2xl shadow-2xl transform  translate-y-12">
    //     <div className="p-6 h-full flex flex-col justify-between">
    //       <div className="text-budgeta-dark text-sm font-semibold">$1,300</div>
    //       <div className="text-budgeta-dark/70 text-xs font-medium">Daily</div>
    //       <div className="flex items-center justify-between">
    //         <span className="text-budgeta-dark/60 text-xs">
    //           4892 •••• •••• ••••
    //         </span>
    //         <span className="text-budgeta-dark/80 text-xs">03/28</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div>
      <Image
        src="/assets/images/card-stack.svg"
        width={506}
        height={389}
        alt="card stack transaction"
        className="object-cover"
      />
    </div>
  );
}
