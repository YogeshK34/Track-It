"use client";

import { useState } from "react";
import { useExpense } from "@/context/ExpenseContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { icons } from "@/config/categories";
import { BudgetAlert } from "./BudgetAlert";

export function AddTransaction() {
  const { addTransaction, categories, transactions } = useExpense();
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<"income" | "expense">("expense");
  const [category, setCategory] = useState("");
  const [showBudgetAlert, setShowBudgetAlert] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getCategoryExpenses = (categoryId: string) => {
    return transactions
      .filter((t) => t.type === "expense" && t.category === categoryId)
      .reduce((acc, curr) => acc + curr.amount, 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || !amount) return;

    const transactionAmount = parseFloat(amount);

    if (type === "expense" && category) {
      const categoryObj = categories.find((c) => c.id === category);
      if (categoryObj) {
        const currentSpent = getCategoryExpenses(category);
        if (currentSpent + transactionAmount > categoryObj.budget) {
          setShowBudgetAlert(true);
          setSelectedCategory(category);
          return;
        }
      }
    }

    submitTransaction();
  };

  const submitTransaction = () => {
    addTransaction({
      id: Date.now().toString(),
      description,
      amount: parseFloat(amount),
      type,
      category: type === "expense" ? category : undefined,
      date: new Date().toISOString(),
    });

    setDescription("");
    setAmount("");
    setType("expense");
    setCategory("");
    setShowBudgetAlert(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Add Transaction</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Enter description"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="amount">Amount</Label>
            <Input
              id="amount"
              type="number"
              step="0.01"
              min="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">Type</Label>
            <Select value={type} onValueChange={(value: "income" | "expense") => setType(value)}>
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="income">Income</SelectItem>
                <SelectItem value="expense">Expense</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {type === "expense" && (
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => {
                    const Icon = icons[cat.icon as keyof typeof icons];
                    return (
                      <SelectItem key={cat.id} value={cat.id}>
                        <div className="flex items-center gap-2">
                          <Icon className="h-4 w-4" />
                          <span>{cat.name}</span>
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
          )}

          <Button type="submit" className="w-full">
            Add Transaction
          </Button>
        </form>

        {showBudgetAlert && selectedCategory && (
          <BudgetAlert
            category={categories.find((c) => c.id === selectedCategory)!}
            amount={parseFloat(amount)}
            onConfirm={submitTransaction}
            onCancel={() => setShowBudgetAlert(false)}
          />
        )}
      </Card>
    </motion.div>
  );
}