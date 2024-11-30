/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useExpense } from "@/context/ExpenseContext";
import { Category } from "@/types";

interface BudgetAlertProps {
  category: Category;
  amount: number;
  onConfirm: () => void;
  onCancel: () => void;
}

export function BudgetAlert({
  category,
  amount,
  onConfirm,
  onCancel,
}: BudgetAlertProps) {
  const { savings, useSavings } = useExpense();
  const [showAlert, setShowAlert] = useState(true);

  // Calculate excess amount over budget
  const excessAmount = Math.max(0, amount - category.budget);

  const handleUseSavings = () => {
    if (excessAmount > 0) {
      // Invoke the hook's function here directly
      useSavings(excessAmount);
    }
    onConfirm();
    setShowAlert(false);
  };

  const handleCancel = () => {
    onCancel();
    setShowAlert(false);
  };

  return (
    <AlertDialog open={showAlert} onOpenChange={setShowAlert}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Budget Exceeded</AlertDialogTitle>
          <AlertDialogDescription>
            This transaction will exceed your budget for {category.name}. Would
            you like to use <strong>${excessAmount.toFixed(2)}</strong> from
            your savings?
            {savings.available < excessAmount && (
              <p className="text-red-500 mt-2">
                Warning: Not enough savings available. Available: $
                {savings.available.toFixed(2)}
              </p>
            )}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={handleCancel}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={handleUseSavings}
            disabled={excessAmount > savings.available}
          >
            Use Savings
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
