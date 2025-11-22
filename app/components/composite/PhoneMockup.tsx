import PhoneFrame from "../ui/PhoneFrame";
import ActionButtons from "./ActionButtons";
import AppHeader from "./AppHeader";
import BalanceDisplay from "./BalanceDisplay";
import StatusBar from "./StatusBar";

export default function PhoneMockup() {
  return (
    <PhoneFrame>
      <div className="flex flex-col h-full  bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] ">
        {/* Status Bar */}
        <StatusBar />
        <AppHeader />
        <BalanceDisplay
          amount="$39,893.00"
          percentage="4.54%"
          isPositive={true}
        />
        <ActionButtons />
        <div className="flex-1" />
      </div>
    </PhoneFrame>
  );
}
