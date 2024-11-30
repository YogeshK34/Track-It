import { PieChart, Wallet } from "lucide-react";

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <PieChart className="h-8 w-8 text-primary" />
      <span className="font-bold text-xl text-primary">TrackIt</span>
    </div>
  );
}
