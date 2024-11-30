import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Wallet, PieChart, CreditCard, Receipt, Share2 } from "lucide-react";
import Iphone15ProComponent from "../components/ui/iphone-15-pro";

const mockupContent = (
  <div className="relative h-full w-full bg-background overflow-y-auto text-foreground">
    {/* Status Bar */}
    <div className="flex justify-between items-center px-4 py-1 text-[10px]">
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <Wallet className="w-3 h-3" />
        <span>100%</span>
      </div>
    </div>

    {/* App Content */}
    <div className="p-3 space-y-3">
      {/* Balance Card */}
      <motion.div
        className="bg-primary/10 rounded-xl p-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <p className="text-xs text-muted-foreground">Total Balance</p>
        <h3 className="text-lg font-bold">$12,234.45</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-xs text-green-500">+2.4%</span>
          <PieChart className="w-3 h-3 text-primary" />
        </div>
      </motion.div>

      {/* Recent Transactions */}
      <div className="space-y-2">
        <h4 className="text-xs font-medium">Recent Transactions</h4>
        {[
          {
            icon: CreditCard,
            name: "Netflix",
            amount: "-$15.99",
            date: "Today",
          },
          {
            icon: Receipt,
            name: "Grocery Store",
            amount: "-$64.37",
            date: "Yesterday",
          },
          {
            icon: Share2,
            name: "John paid you",
            amount: "+$25.00",
            date: "Yesterday",
          },
        ].map((transaction, index) => (
          <motion.div
            key={transaction.name}
            className="flex items-center justify-between p-2 bg-muted/50 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + index * 0.1 }}
          >
            <div className="flex items-center gap-2">
              <div className="p-1 bg-background rounded-full">
                <transaction.icon className="w-3 h-3" />
              </div>
              <div>
                <p className="text-xs font-medium">{transaction.name}</p>
                <p className="text-[10px] text-muted-foreground">
                  {transaction.date}
                </p>
              </div>
            </div>
            <span
              className={cn(
                "text-xs font-medium",
                transaction.amount.startsWith("+")
                  ? "text-green-500"
                  : "text-foreground"
              )}
            >
              {transaction.amount}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Iphone15ProComponent
        className="mx-auto w-full max-w-[300px]"
        width={300}
        height={612}
      >
        {mockupContent}
      </Iphone15ProComponent>
    </main>
  );
}
