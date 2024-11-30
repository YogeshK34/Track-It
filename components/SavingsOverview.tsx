"use client";

import { useExpense } from "@/context/ExpenseContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { motion } from "framer-motion";
import { PiggyBank, Wallet } from "lucide-react";

export function SavingsOverview() {
  const { savings, allocateToSavings } = useExpense();
  const [amount, setAmount] = useState("");

  const handleAllocate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount) return;
    allocateToSavings(parseFloat(amount));
    setAmount("");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Savings</h2>
          <PiggyBank className="h-6 w-6 text-primary" />
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Available</p>
            <p className="text-2xl font-bold text-green-600">
              ${savings.available.toFixed(2)}
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">Total Saved</p>
            <p className="text-2xl font-bold">${savings.total.toFixed(2)}</p>
          </div>
        </div>

        <form onSubmit={handleAllocate} className="space-y-4">
          <div className="flex gap-2">
            <Input
              type="number"
              step="0.01"
              min="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount to save"
            />
            <Button type="submit">Save</Button>
          </div>
        </form>
      </Card>
    </motion.div>
  );
}