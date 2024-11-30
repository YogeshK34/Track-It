"use client";

import { useState } from "react";
import { Category } from "@/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Edit2 } from "lucide-react";
import { useExpense } from "@/context/ExpenseContext";

interface CategoryBudgetDialogProps {
  category: Category;
}

export function CategoryBudgetDialog({ category }: CategoryBudgetDialogProps) {
  const { updateCategory } = useExpense();
  const [budget, setBudget] = useState(category.budget.toString());
  const [open, setOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateCategory({
      ...category,
      budget: parseFloat(budget),
    });
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="h-6 w-6">
          <Edit2 className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Budget for {category.name}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div className="space-y-2">
            <Label htmlFor="budget">Budget Amount</Label>
            <Input
              id="budget"
              type="number"
              step="0.01"
              min="0"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
            />
          </div>
          <Button type="submit" className="w-full">
            Update Budget
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}