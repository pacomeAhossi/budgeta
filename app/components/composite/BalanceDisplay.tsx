import { TrendingUp } from "lucide-react";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

type BalanceDisplayProps = {
  amount: string;
  percentage: string;
  isPositive?: boolean;
};

export default function BalanceDisplay({
  amount,
  percentage,
  isPositive = true,
}: BalanceDisplayProps) {
  return (
    <div className="text-center py-12 space-y-3">
      <h2 className="text-white text-2xl md:text-4xl font-bold tracking-tight">
        {amount}
      </h2>

      {/* // Pourcentage */}
      <div
        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full ${
          isPositive ? "" : "bg-red-500/10"
        }`}
      >
        <TrendingUp
          className={`w-4 h-4 ${
            isPositive ? "text-budgeta-green" : "text-red-500"
          } `}
        />
        <span
          className={`text-sm font-semibold ${
            isPositive ? "text-budgeta-green" : "text-red-500"
          }`}
        >
          {percentage}
        </span>
      </div>
    </div>
  );
}
