import { Card } from "@/components/ui/card";
import ExpenseOverview from "@/components/ExpenseOverview";
import { TransactionList } from "@/components/TransactionList";
import { AddTransaction } from "@/components/AddTransaction";
import { BudgetOverview } from "@/components/BudgetOverview";
import { SavingsOverview } from "@/components/SavingsOverview";
import { ExpenseProvider } from "@/context/ExpenseContext";
import { ThemeProvider } from "@/components/ThemeProvider";
import { DashboardNew } from "@/app/dashboard/dashboard";

export default function Dashboard() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ExpenseProvider>
        <main className="min-h-screen bg-background py-8">
          <div className="container mx-auto px-4">
            <DashboardNew></DashboardNew>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-8 space-y-8">
                <ExpenseOverview />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <SavingsOverview />
                  <AddTransaction />
                </div>
                <BudgetOverview />
              </div>
              <Card className="lg:col-span-4 p-6">
                <TransactionList />
              </Card>
            </div>
          </div>
        </main>
      </ExpenseProvider>
    </ThemeProvider>
  );
}
