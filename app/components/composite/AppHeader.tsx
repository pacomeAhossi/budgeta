import { Bell, MoreVertical } from "lucide-react";
import Image from "next/image";

export default function AppHeader() {
  return (
    <div className="flex items-center justify-between px-6 py-4">
      {/* Devise */}
      <div className="flex items-center gap-2 px-1 py-2 rounded-lg bg-white/10">
        <Image
          src="/assets/usa.png"
          width={20}
          height={20}
          alt="logo budgeta"
        />
        <span className="text-white text-xs font-medium">US Dollar</span>
      </div>

      {/* Icone d'actions */}
      <div className="flex items-center gap-4">
        <button className="text-white/80 hover:text-white transition-colors">
          <Bell className="h-5 w-5" />
        </button>
        <button className="text-white/80 hover:text-white transition-colors">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
