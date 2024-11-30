"use client";

import { useExpense } from "@/context/ExpenseContext";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { icons } from "@/config/categories";
import { CategoryBudgetDialog } from "./CategoryBudgetDialog";

export function BudgetOverview() {
  const { transactions, categories } = useExpense();

  const getCategoryExpenses = (categoryId: string) => {
    return transactions
      .filter((t) => t.type === "expense" && t.category === categoryId)
      .reduce((acc, curr) => acc + curr.amount, 0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Budget Overview</h2>
        <div className="space-y-6">
          {categories.map((category) => {
            const spent = getCategoryExpenses(category.id);
            const percentage = (spent / category.budget) * 100;
            const Icon = icons[category.icon as keyof typeof icons];

            return (
              <div key={category.id} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{category.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      ${spent.toFixed(2)} / ${category.budget}
                    </span>
                    <CategoryBudgetDialog category={category} />
                  </div>
                </div>
                <Progress
                  value={percentage}
                  className="h-2"
                  indicatorClassName={
                    percentage > 100 ? "bg-red-500" : undefined
                  }
                />
              </div>
            );
          })}
        </div>
      </Card>
    </motion.div>
  );
}
