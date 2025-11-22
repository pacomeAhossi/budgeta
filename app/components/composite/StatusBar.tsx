import { Bluetooth, Wifi, Signal, BatteryFull } from "lucide-react";

export default function StatusBar() {
  return (
    <div className="flex items-center justify-between px-6 py-6 text-white text-sx">
      {/* Heure */}
      <span className="font-mediumm">5:13 PM</span>

      {/* Icone systemes */}
      <div className="flex items-center gap-1">
        <Bluetooth className="h-3 w-3" />
        <Wifi className="w-3 h-3" />
        <Signal className="w-3 h-3" />
        <BatteryFull className="w-3 h-3" />
      </div>
    </div>
  );
}
