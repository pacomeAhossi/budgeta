"use client";
import React from "react";
import { useScrollReveal } from "@/app/hooks/useScrollReveal";
import TransactionItem from "./TransactionItem";

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
  ] as const;

  //Animation du container principal
  const containerReveal = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
    delay: 0,
  });

  // Classes conditionnelles selon le variant
  const containerClasses = variant === "single" ? "rounded-2xl shadow-xl" : "";

  return (
    <div
      ref={containerReveal.elementRef}
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
        {transactions.map((transaction_item, index) => (
          // Composant TransactionItem pour l'affichage des transaction avec AOS
          <TransactionItem
            key={index}
            transaction={transaction_item}
            delay={200 + index * 80}
            showDateSeparator={index === 1}
          />
          // );
        ))}
      </ul>
    </div>
  );
}
