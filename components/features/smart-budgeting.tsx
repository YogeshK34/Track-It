"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import {
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  PieChart,
  ArrowRight,
} from "lucide-react";

export function SmartBudgeting() {
  const [selectedMonth, setSelectedMonth] = useState("november");

  const categories = [
    {
      name: "Housing",
      spent: 1200,
      budget: 1500,
      color: "bg-blue-500",
      percentage: 80,
    },
    {
      name: "Food & Dining",
      spent: 450,
      budget: 600,
      color: "bg-green-500",
      percentage: 75,
    },
    {
      name: "Transportation",
      spent: 200,
      budget: 300,
      color: "bg-purple-500",
      percentage: 66,
    },
    {
      name: "Entertainment",
      spent: 180,
      budget: 200,
      color: "bg-pink-500",
      percentage: 90,
    },
  ];

  const recentTransactions = [
    {
      name: "Grocery Store",
      amount: -85.32,
      category: "Food & Dining",
      date: "Today",
    },
    {
      name: "Salary Deposit",
      amount: 2800.0,
      category: "Income",
      date: "Yesterday",
    },
    {
      name: "Gas Station",
      amount: -45.0,
      category: "Transportation",
      date: "Yesterday",
    },
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Header and month selector */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Smart Budget</h2>
          <p className="text-muted-foreground">
            Track, analyze, and optimize your spending
          </p>
        </div>
        <Select value={selectedMonth} onValueChange={setSelectedMonth}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select month" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="november">November 2023</SelectItem>
            <SelectItem value="december">December 2023</SelectItem>
            <SelectItem value="january">January 2024</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Budget summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,030</div>
            <div className="flex items-center text-sm text-green-500">
              <ArrowUpRight className="h-4 w-4 mr-1" />
              +12% from last month
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Remaining Budget
            </CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$570</div>
            <div className="flex items-center text-sm text-red-500">
              <ArrowDownRight className="h-4 w-4 mr-1" />
              22% of total budget
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Savings Goal</CardTitle>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$400</div>
            <Progress value={65} className="mt-2" />
            <p className="text-sm text-muted-foreground mt-2">
              65% of monthly goal
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Budget categories and recent transactions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Budget Categories</CardTitle>
            <CardDescription>Your spending by category</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {categories.map((category) => (
              <div key={category.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{category.name}</span>
                  <span className="text-muted-foreground">
                    ${category.spent} / ${category.budget}
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${category.color}`}
                    style={{ width: `${category.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
            <CardDescription>Your latest spending activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentTransactions.map((transaction, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="font-medium">{transaction.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {transaction.category} • {transaction.date}
                    </p>
                  </div>
                  <div
                    className={`font-medium ${
                      transaction.amount > 0 ? "text-green-500" : ""
                    }`}
                  >
                    {transaction.amount > 0 ? "+" : ""}$
                    {Math.abs(transaction.amount).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
