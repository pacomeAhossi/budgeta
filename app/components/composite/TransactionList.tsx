"use client";
import React from "react";
import Image from "next/image";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";

type TransactionListProps = {
  variant?: "single" | "into-mockup";
};

export default function TransactionList({
  variant = "into-mockup",
}: TransactionListProps) {
  const transactions = [
    {
      label: "From BCA account",
      sublabel: "Bank Transfer",
      amount: "$900.00",
      type: "credit",
    },
    {
      label: "Sent to bank",
      sublabel: "To Faisyal Rizki",
      amount: "-$200.00",
      type: "debit",
    },
    {
      label: "Shopping new device",
      sublabel: "Products",
      amount: "-$1500.00",
      type: "debit",
    },
    {
      label: "From BCA account",
      sublabel: "Bank Transfer",
      amount: "$900.00",
      type: "credit",
    },
    {
      label: "Sent to bank",
      sublabel: "To Faisyal Rizki",
      amount: "-$100.00",
      type: "debit",
    },
  ];

  //Animation du container principal
  const containerReveal = useScrollReveal({ threshold: 0.1, delay: 0 });

  // Classes conditionnelles selon le variant
  const containerClasses = variant === "single" ? "rounded-2xl shadow-xl" : "";

  return (
    <div
      ref={containerReveal.elementRef as any}
      className={` bg-white ${containerClasses} px-6 pt-6 max-w-full h-full ${
        containerReveal.isVisible ? "reveal-visible" : "reveal-hidden"
      } `}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-xs text-budgeta-gray/60 font-medium">Today</h4>
        <button className="text-xs text-black font-medium transition-all duration-200 hover:translate-x-1">
          See all
        </button>
      </div>

      {/* Liste des transactions */}
      <ul className="space-y-4">
        {transactions.map((transaction_item, index) => {
          // Hook  pour animer chaque transaction par délai progressif
          const transactionReveal = useScrollReveal({
            threshold: 0.2,
            delay: 200 + index * 80,
          });
          return (
            <React.Fragment key={index}>
              <li
                ref={transactionReveal.elementRef as any}
                key={index}
                className={`flex items-center justify-between border-b border-gray/100 pb-4 last:border-0 last:pb-1 ${
                  transactionReveal.isVisible
                    ? "reveal-left-visible reveal-slow"
                    : "reveal-left-hidden"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 bg-gray/100 rounded-lg flex items-center justify-center ${
                      transactionReveal.isVisible
                        ? "anim-icon-pulse"
                        : "icon-hidden"
                    } `}
                  >
                    {transaction_item.type === "credit" ? (
                      <Image
                        src="/assets/icons/credit-card-down.svg"
                        width={40}
                        height={40}
                        alt="Credit card down icon"
                      />
                    ) : (
                      <Image
                        src="/assets/icons/credit-card-up.svg"
                        width={40}
                        height={40}
                        alt="Credit card up icon"
                      />
                    )}
                  </div>
                  <div>
                    <p className="text-[10px] md:text-sm font-semibold text-black">
                      {transaction_item.label}
                    </p>
                    <p className="text-[10px] md:text-xs text-gray/500">
                      {transaction_item.sublabel}
                    </p>
                  </div>
                </div>
                {/* Montant */}
                <span
                  className={`text-xs md:text-sm font-semibold ${
                    transaction_item.type === "credit"
                      ? "text-[#4CAF50]"
                      : "text-[#AF4C4E]"
                  } `}
                >
                  {transaction_item.amount}
                </span>
              </li>

              {index === 1 && (
                <h4 className="text-xs text-budgeta-gray/60 font-medium mt-4 mb-2">
                  21 May 2024
                </h4>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}
