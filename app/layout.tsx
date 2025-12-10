import type { Metadata } from "next";
import Header from "./components/layout/Header";
import { satoshi } from "./fonts";
import "./globals.css";
import FooterSection from "./sections/FooterSection";

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
        className={`${satoshi.className} antialiased text-black text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100`}
      >
        <Header />
        <main>{children}</main>
        <FooterSection />
      </body>
    </html>
  );
}
