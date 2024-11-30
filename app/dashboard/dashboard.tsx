"use client";

import { ThemeToggle } from "@/components/ThemeToggle";

export function DashboardNew() {
  return (
    <div className="flex justify-between items-center mb-8">
      <div className=" text-2xl font-extrabold ">Dashboard</div>
      <ThemeToggle />
    </div>
  );
}
