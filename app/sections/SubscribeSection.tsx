"use client";

import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";
import FooterNav from "../components/composite/FooterNav";
import SubscribeHeader from "../components/composite/SubscribeHeader";
import Button from "../components/ui/Button";

export default function SubscribeSection() {
  // State pour l'email
  const [email, setEmail] = useState("");
  // State pour pouvoir désactiver le bouton
  const [isSubmitting, setIsSubmitting] = useState(false);
  // State pour le message
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setMessage("✓ Subscribed successfully!");
      setEmail("");
    } catch (_error) {
      setMessage("✗ Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="relative mx-auto mt-[3.75rem] lg:mt-[7.5rem]">
      <div className="container px-6 lg:px-16 mx-auto">
        <SubscribeHeader
          title="Subscribe to the newsletter"
          description="Get the latest updates, tips and exclusive offers straight to your inbox. Stay informed and manage your finances smarter with Budgeta!"
        />

        {/* Formulaire newsletter */}
        <form onSubmit={handleSubmit} className="mt-[1.125rem] lg:mt-14">
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center justify-center">
            {/* Input et button */}
            <div className="relative w-full sm:w-auto sm:flex-1 max-w-md">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <MdOutlineMail size={20} color="white" />
              </div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="faisyal@calioio.com"
                required
                className="
                  w-full pl-12 pr-4 py-4
                  bg-transparent border border-[#4F4F4F] rounded-full
                  text-white placeholder:text-gray-500
                  focus:outline-none focus:border-budgeta-green
                  transition-colors duration-200
                "
              />
            </div>
            <Button
              variant="primary"
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto font-normal text-dark text-sm lg:text-xl border border-[#4F4F4F] hover:bg-budgeta-green/90 hover:scale-105 whitespace-nowrap transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {/* Si isSubmitting est true, on affiche un spin loader avec le text Submitting... */}
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Submit"
              )}
            </Button>
          </div>

          {/* Message de succès ou échec */}
          {message && (
            <p
              className={`mt-4 text-sm ${
                message.includes("✓") ? "text-budgeta-green" : "text-red-400"
              }`}
            >
              {message}
            </p>
          )}
        </form>

        {/* Menu footer bu bas */}
        <FooterNav />
      </div>
    </section>
  );
}
