"use client";
import Image from "next/image";

import { useScrollReveal } from "@/app/hooks/useScrollReveal";

type Transaction = {
  label: string;
  sublabel: string;
  amount: string;
  type: "credit" | "debit";
};

type TransactionItemProps = {
  transaction: Transaction;
  delay: number;
  showDateSeparator?: boolean;
};

export default function TransactionItem({
  transaction,
  delay,
  showDateSeparator = false,
}: TransactionItemProps) {
  const transactionReveal = useScrollReveal<HTMLLIElement>({
    threshold: 0.2,
    delay,
  });

  return (
    <>
      <li
        ref={transactionReveal.elementRef}
        className={`flex items-center justify-between border-b border-gray/100 pb-4 last:border-0 last:pb-1 ${
          transactionReveal.isVisible
            ? "reveal-left-visible reveal-slow"
            : "reveal-left-hidden"
        }`}
      >
        <div className="flex items-center gap-3">
          <div
            className={`w-10 h-10 bg-gray/100 rounded-lg flex items-center justify-center ${
              transactionReveal.isVisible ? "anim-icon-pulse" : "icon-hidden"
            }`}
          >
            <Image
              src={
                transaction.type === "credit"
                  ? "/assets/icons/credit-card-down.svg"
                  : "/assets/icons/credit-card-up.svg"
              }
              width={40}
              height={40}
              alt="Transaction icon"
            />
          </div>

          <div>
            <p className="text-[0.625rem] md:text-sm font-semibold text-black">
              {transaction.label}
            </p>
            <p className="text-[0.625rem] md:text-xs text-gray/500">
              {transaction.sublabel}
            </p>
          </div>
        </div>

        <span
          className={`text-xs md:text-sm font-semibold ${
            transaction.type === "credit" ? "text-[#4CAF50]" : "text-[#AF4C4E]"
          }`}
        >
          {transaction.amount}
        </span>
      </li>

      {showDateSeparator && (
        <h4 className="text-xs text-budgeta-gray/60 font-medium mt-4 mb-2">
          21 May 2024
        </h4>
      )}
    </>
  );
}
