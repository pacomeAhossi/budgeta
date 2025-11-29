import PhoneFrame from "../ui/PhoneFrame";
import ActionButtons from "./ActionButtons";
import AppHeader from "./AppHeader";
import BalanceDisplay from "./BalanceDisplay";
import BottomNav from "./BottomNav";
import StatusBar from "./StatusBar";
import TransactionList from "./TransactionList";

export default function PhoneMockup() {
  return (
    <PhoneFrame>
      <div className="flex flex-col gap-16 h-full bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] relative">
        {/* Status Bar */}
        <div>
          <StatusBar />
          <AppHeader />
          <BalanceDisplay
            amount="$39,893.00"
            percentage="4.54%"
            isPositive={true}
          />
          <ActionButtons />
        </div>
        <div className="flex-1">
          <TransactionList />
        </div>
        <BottomNav />
      </div>
    </PhoneFrame>
  );
}
