import type { Metadata } from "next";
import { satoshi } from "./fonts";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";


export const metadata: Metadata = {
  title: "Budgeta - Save Money Community",
  description: "Join the revolution of smart money management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.className} antialiased text-black bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100` }
      >
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
