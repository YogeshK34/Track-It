"use client";

import { motion } from "framer-motion";
import {
  Camera,
  CreditCard,
  PieChart,
  BellRing,
  Users,
  Tags,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const features = [
  {
    title: "Smart Receipt Scanning",
    description:
      "Instantly capture and process receipts with our AI-powered scanner. Automatically extracts date, amount, and category.",
    icon: Camera,
    color: "text-pink-500",
  },
  {
    title: "Real-time Bank Sync",
    description:
      "Connect your bank accounts and credit cards for automatic transaction import and categorization.",
    icon: CreditCard,
    color: "text-violet-500",
  },
  {
    title: "Smart Budgeting",
    description:
      "Set dynamic budgets that adapt to your spending patterns and receive AI-powered suggestions.",
    icon: PieChart,
    color: "text-blue-500",
  },
  {
    title: "Bill Reminders",
    description:
      "Never miss a payment with smart bill detection and automated reminders.",
    icon: BellRing,
    color: "text-yellow-500",
  },
  {
    title: "Expense Sharing",
    description:
      "Split expenses with friends and family. Send payment requests and track settlements.",
    icon: Users,
    color: "text-green-500",
  },
  {
    title: "Custom Categories",
    description:
      "Create personalized expense categories and tags for better organization and tracking.",
    icon: Tags,
    color: "text-orange-500",
  },
];

export function FeatureShowcase() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Powerful Features for Better Financial Control
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Everything you need to track, manage, and optimize your expenses in
            one place
          </motion.p>
        </div>

        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="grid md:grid-cols-2 font-bold text-lg gap-8 items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className={`space-y-4 ${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                <feature.icon className={`h-12 w-12 ${feature.color}`} />
                <h3 className="text-2xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>

              <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
                <div className="rounded-lg overflow-hidden shadow-2xl bg-background border">
                  <div className="flex items-center gap-1.5 p-3 bg-muted/50 border-b">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                  <div className="relative aspect-[4/3] bg-background">
                    {index === 0 && (
                      <div className="p-4">
                        <div className="border-2 border-dashed border-primary/20 rounded-lg p-8 flex flex-col items-center justify-center gap-4 bg-muted/50">
                          <Camera className="w-12 h-12 text-muted-foreground" />
                          <p className="text-sm text-muted-foreground">
                            Drag and drop your receipt or click to scan
                          </p>
                          <div className="grid grid-cols-3 gap-4 w-full max-w-md">
                            <div className="aspect-[3/4] rounded-lg bg-primary/10 animate-pulse" />
                            <div className="aspect-[3/4] rounded-lg bg-primary/10 animate-pulse" />
                            <div className="aspect-[3/4] rounded-lg bg-primary/10 animate-pulse" />
                          </div>
                        </div>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="p-4">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">
                              Connect Your Bank
                            </h3>
                            <Button variant="outline" size="sm">
                              + Add Account
                            </Button>
                          </div>
                          <div className="space-y-2">
                            {[
                              {
                                name: "Chase",
                                balance: "$3,240.50",
                                syncing: true,
                              },
                              {
                                name: "Bank of America",
                                balance: "$1,578.32",
                                syncing: false,
                              },
                              {
                                name: "Wells Fargo",
                                balance: "$8,294.12",
                                syncing: true,
                              },
                            ].map((bank) => (
                              <div
                                key={bank.name}
                                className="flex items-center justify-between p-3 bg-muted rounded-lg"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-full bg-primary/10" />
                                  <div>
                                    <p className="font-medium">{bank.name}</p>
                                    <p className="text-sm text-muted-foreground">
                                      {bank.balance}
                                    </p>
                                  </div>
                                </div>
                                {bank.syncing && (
                                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    Syncing
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    {index === 2 && (
                      <div className="p-4">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">
                              Monthly Budget
                            </h3>
                            <div className="flex items-center gap-2">
                              <Button variant="outline" size="sm">
                                Previous
                              </Button>
                              <Button variant="outline" size="sm">
                                Next
                              </Button>
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-4">
                            {[
                              { category: "Food", spent: 450, budget: 600 },
                              {
                                category: "Transport",
                                spent: 200,
                                budget: 300,
                              },
                              { category: "Shopping", spent: 350, budget: 400 },
                            ].map((item) => (
                              <div
                                key={item.category}
                                className="p-3 bg-muted rounded-lg"
                              >
                                <p className="font-medium">{item.category}</p>
                                <div className="mt-2 h-2 bg-primary/10 rounded-full overflow-hidden">
                                  <div
                                    className="h-full bg-primary rounded-full"
                                    style={{
                                      width: `${
                                        (item.spent / item.budget) * 100
                                      }%`,
                                    }}
                                  />
                                </div>
                                <div className="mt-2 flex justify-between text-sm">
                                  <span className="text-muted-foreground">
                                    ${item.spent}
                                  </span>
                                  <span className="text-muted-foreground">
                                    /${item.budget}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    {index === 3 && (
                      <div className="p-4">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">
                              Upcoming Bills
                            </h3>
                            <Button variant="outline" size="sm">
                              + Add Bill
                            </Button>
                          </div>
                          <div className="space-y-2">
                            {[
                              {
                                name: "Netflix",
                                amount: "$15.99",
                                date: "Dec 15",
                              },
                              { name: "Rent", amount: "$1,200", date: "Dec 1" },
                              {
                                name: "Internet",
                                amount: "$59.99",
                                date: "Dec 20",
                              },
                            ].map((bill) => (
                              <div
                                key={bill.name}
                                className="flex items-center justify-between p-3 bg-muted rounded-lg"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-full bg-primary/10" />
                                  <div>
                                    <p className="font-medium">{bill.name}</p>
                                    <p className="text-sm text-muted-foreground">
                                      Due {bill.date}
                                    </p>
                                  </div>
                                </div>
                                <p className="font-medium">{bill.amount}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    {index === 4 && (
                      <div className="p-4">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">
                              Split Expenses
                            </h3>
                            <Button variant="outline" size="sm">
                              + New Split
                            </Button>
                          </div>
                          <div className="p-4 bg-muted rounded-lg">
                            <h4 className="font-medium mb-4">
                              Dinner at Restaurant
                            </h4>
                            <div className="space-y-3">
                              {[
                                { name: "You", amount: "$45.00", paid: true },
                                { name: "John", amount: "$45.00", paid: false },
                                { name: "Sarah", amount: "$45.00", paid: true },
                              ].map((person) => (
                                <div
                                  key={person.name}
                                  className="flex items-center justify-between"
                                >
                                  <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-primary/10" />
                                    <span>{person.name}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <span>{person.amount}</span>
                                    {person.paid ? (
                                      <span className="text-xs bg-green-500/10 text-green-500 px-2 py-1 rounded-full">
                                        Paid
                                      </span>
                                    ) : (
                                      <span className="text-xs bg-yellow-500/10 text-yellow-500 px-2 py-1 rounded-full">
                                        Pending
                                      </span>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    {index === 5 && (
                      <div className="p-4">
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">
                              Categories
                            </h3>
                            <Button variant="outline" size="sm">
                              + Add Category
                            </Button>
                          </div>
                          <div className="grid grid-cols-2 gap-3">
                            {[
                              { name: "Groceries", color: "bg-green-500" },
                              { name: "Transport", color: "bg-blue-500" },
                              { name: "Entertainment", color: "bg-purple-500" },
                              { name: "Shopping", color: "bg-pink-500" },
                            ].map((category) => (
                              <div
                                key={category.name}
                                className="p-3 bg-muted rounded-lg flex items-center gap-3"
                              >
                                <div
                                  className={`w-4 h-4 rounded-full ${category.color}`}
                                />
                                <span className="font-medium">
                                  {category.name}
                                </span>
                              </div>
                            ))}
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {[
                              "Food",
                              "Coffee",
                              "Restaurant",
                              "Takeout",
                              "Bus",
                              "Train",
                              "Taxi",
                              "Gas",
                              "Movies",
                              "Games",
                              "Sports",
                              "Music",
                              "Clothes",
                              "Electronics",
                              "Books",
                              "Home",
                            ].map((tag) => (
                              <span
                                key={tag}
                                className="px-3 py-1 bg-primary/10 text-sm rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link href="/get-started">
            <Button size="lg" className="rounded-full">
              Try All Features Free
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
