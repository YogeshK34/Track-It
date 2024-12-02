import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building } from "lucide-react";

export function BankAccounts() {
  const accounts = [
    { name: "Checking Account", balance: 5231.89, bank: "Chase" },
    { name: "Savings Account", balance: 15000.0, bank: "Bank of America" },
    { name: "Investment Account", balance: 25000.0, bank: "Fidelity" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold">Bank Accounts</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {accounts.map((account) => (
          <Card key={account.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {account.name}
              </CardTitle>
              <Building className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${account.balance.toFixed(2)}
              </div>
              <p className="text-xs text-muted-foreground">{account.bank}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
