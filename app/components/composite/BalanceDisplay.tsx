import Image from "next/image";

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
    <div className="text-center pt-4 space-y-3 mb-[50px]">
      <h2 className="text-white text-2xl md:text-4xl font-bold tracking-tight">
        {amount}
      </h2>

      {/* // Pourcentage */}
      <div
        className={`inline-flex items-center gap-1 px-3 py-1 ${
          isPositive ? "" : "bg-red-500/10"
        }`}
      >
        <Image
          src="/assets/icons/trading-icon.svg"
          width={16}
          height={16}
          alt="Trading card improve down icon"
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
