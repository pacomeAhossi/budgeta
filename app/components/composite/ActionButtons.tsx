import { Minus, Plus } from "lucide-react";
import { FaRegCreditCard } from "react-icons/fa6";
import { AiOutlineCreditCard, AiFillCreditCard } from "react-icons/ai";
export default function ActionButtons() {
  return (
    <div className="grid grid-cols-2 gap-4 px-6">
      {/* Button Add Cash */}
      <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white rounded-[10px] py-3 transition-colors duration-200 backdrop-blur-sm">
        <div className="w-6 h-6 flex items-center justify-center rounded-lg">
          <FaRegCreditCard className="w-4 h-4" />
        </div>
        <span className="font-medium text-sm capitalize"> Add cash</span>
      </button>

      <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white rounded-[10px] py-3 transition-colors duration-200 backdrop-blur-sm">
        <div className="w-6 h-6 flex items-center justify-center rounded-lg">
          <AiOutlineCreditCard className="w-4 h-4" />
        </div>
        <span className="font-medium text-sm capitalize"> Cash out</span>
      </button>
    </div>
  );
}
