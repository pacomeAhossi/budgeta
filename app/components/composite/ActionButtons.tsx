import Image from "next/image";
export default function ActionButtons() {
  return (
    <div className="grid grid-cols-2 gap-4 px-6">
      {/* Button Add Cash */}
      <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white rounded-[10px] py-3 transition-colors duration-200 backdrop-blur-sm">
        <div className="w-6 h-6 flex items-center justify-center rounded-lg">
          <Image
            src="/assets/icons/cash-icon-down-transparent.svg"
            width={24}
            height={24}
            alt="Credit card down icon"
          />
        </div>
        <span className="font-medium text-xs md:text-sm capitalize">
          Add cash
        </span>
      </button>

      <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white rounded-[10px] py-3 transition-colors duration-200 backdrop-blur-sm">
        <div className="w-6 h-6 flex items-center justify-center rounded-lg">
          <Image
            src="/assets/icons/cash-icon-down-transparent.svg"
            width={24}
            height={24}
            alt="Credit card up icon"
          />
        </div>
        <span className="font-medium text-xs md:text-sm capitalize">
          Cash out
        </span>
      </button>
    </div>
  );
}
