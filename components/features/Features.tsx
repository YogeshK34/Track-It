import { Button } from "@/components/ui/button";
import { SmartBudgeting } from "./smart-budgeting";
import { BankSyncForm } from "./bank-sync-form";
import { SmartReceiptScanningForm } from "./smart-receipt-form";

const features = [
  {
    id: "receipt",
    title: "Smart Receipt Scanning",
    description:
      "Capture receipts instantly with our AI-powered scanner. No more manual data entry or lost receipts.",
    component: SmartReceiptScanningForm,
  },
  {
    id: "budget",
    title: "Intelligent Budgeting",
    description:
      "Get personalized insights and automated categorization. Make smarter financial decisions with real-time tracking.",
    component: SmartBudgeting,
  },
  {
    id: "bank",
    title: "Secure Bank Integration",
    description:
      "Connect your accounts securely for real-time synchronization. Your data is always protected and encrypted.",
    component: BankSyncForm,
  },
];

export default function Features() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">
            The easiest way to manage your finances
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Track expenses, scan receipts, and manage your budget with our
            powerful financial tools. No financial expertise required.
          </p>
          <Button className="mt-8 px-8 py-6 text-lg rounded-full bg-gray-900 hover:bg-gray-800">
            Get started for free
          </Button>
        </div>

        {/* Features */}
        <div className="space-y-32">
          {features.map((feature, index) => (
            <div
              key={feature.id}
              className={`flex flex-col gap-16 items-center lg:items-start lg:gap-8 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              }`}
            >
              {/* Text Content */}
              <div className="w-full lg:w-5/12 space-y-6 text-center lg:text-left lg:pt-20">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  {feature.title}
                </h2>
                <p className="text-xl leading-relaxed text-gray-600">
                  {feature.description}
                </p>
                <Button variant="outline" className="rounded-full px-8">
                  Learn more
                </Button>
              </div>

              {/* Feature Demo */}
              <div className="w-full lg:w-7/12">
                <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border border-gray-100">
                  <feature.component />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
