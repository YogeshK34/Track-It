"use client";

import { useExpense } from "@/context/ExpenseContext";
import { formatDistanceToNow } from "date-fns";
import { ArrowDownCircle, ArrowUpCircle, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TransactionList() {
  const { transactions, deleteTransaction } = useExpense();

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Recent Transactions</h2>
      <div className="space-y-4">
        {transactions.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">
            No transactions yet. Add one to get started!
          </p>
        ) : (
          transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between p-4 rounded-lg border bg-card"
            >
              <div className="flex items-center gap-3">
                {transaction.type === "income" ? (
                  <ArrowUpCircle className="h-5 w-5 text-green-600" />
                ) : (
                  <ArrowDownCircle className="h-5 w-5 text-red-600" />
                )}
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatDistanceToNow(new Date(transaction.date), { addSuffix: true })}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span
                  className={`font-semibold ${
                    transaction.type === "income" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {transaction.type === "income" ? "+" : "-"}${transaction.amount.toFixed(2)}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => deleteTransaction(transaction.id)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}