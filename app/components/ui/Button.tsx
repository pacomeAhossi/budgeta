import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  type?: string;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};
export default function Button({
  children,
  href,
  variant = "primary",
  onClick,
  className = "",
}: ButtonProps) {
  // Classe de base pour les boutons
  const baseClasses =
    "inline-flex justify-center px-6 py-3 rounded-[50px] font-bold";
  // Classe selon la variante
  const variantClasses = {
    primary: "bg-budgeta-green font-base text-black hover:bg-budgeta-green/90",
    secondary:
      "bg-bark text-white border-2 border-white hover:bg-white hover:text-black",
  };

  // On combine tous les liens
  const buttonClasses = ` ${baseClasses} ${variantClasses[variant]} ${className} `;

  // Retourne un Link next/link si c'est un lien
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  // Sinon retourne un bouton html
  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
}
