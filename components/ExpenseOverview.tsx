"use client";

import { useExpense } from "@/context/ExpenseContext";
import { Card } from "@/components/ui/card";
import { ArrowDownCircle, ArrowUpCircle, Wallet } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { motion } from "framer-motion";

export default function ExpenseOverview() {
  const { transactions } = useExpense();

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, curr) => acc + curr.amount, 0);

  const balance = income - expenses;

  const chartData = [
    { name: "Income", value: income },
    { name: "Expenses", value: expenses },
  ];

  return (
    <div className="space-y-4">
      <Card className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-semibold">Balance</h2>
          <Wallet className="h-6 w-6 text-primary" />
        </div>
        <p className="text-3xl font-bold">${balance.toFixed(2)}</p>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Card className="p-6 bg-green-50 dark:bg-green-900/20">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium">Income</h3>
                    <ArrowUpCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <p className="text-2xl font-bold text-green-600">
                    ${income.toFixed(2)}
                  </p>
                </Card>
              </TooltipTrigger>
              <TooltipContent>
                <p>Total income from all sources</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Card className="p-6 bg-red-50 dark:bg-red-900/20">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium">Expenses</h3>
                    <ArrowDownCircle className="h-5 w-5 text-red-600" />
                  </div>
                  <p className="text-2xl font-bold text-red-600">
                    ${expenses.toFixed(2)}
                  </p>
                </Card>
              </TooltipTrigger>
              <TooltipContent>
                <p>Total expenses across all categories</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>
      </div>
    </div>
  );
}