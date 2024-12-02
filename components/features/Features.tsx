import { SmartBudgeting } from "./smart-budgeting";
import { BankSyncForm } from "./bank-sync-form";
import { SmartReceiptScanningForm } from "./smart-receipt-form";

export const features = [
  {
    id: "receipt",
    title: "Smart Receipt Scanning",
    description:
      "Instantly capture and process receipts with our AI-powered scanner.",
    component: SmartReceiptScanningForm,
  },
  {
    id: "budget",
    title: "Smart Budgeting",
    description:
      "Track, analyze, and optimize your spending with intelligent insights.",
    component: SmartBudgeting,
  },
  {
    id: "bank",
    title: "Real-time Bank Sync",
    description:
      "Securely connect your accounts for up-to-the-minute financial data.",
    component: BankSyncForm,
  },
];

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          Powerful Financial Features
        </h1>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          Explore our suite of tools designed to simplify your financial
          management
        </p>

        {features.map((feature, index) => (
          <div
            key="id"
            className={`flex flex-col lg:flex-row items-center ${
              index % 2 === 0 ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <feature.component />
              </div>
            </div>

            <div className="w-full lg:w-1/2 px-4 flex flex-col justify-center text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                {feature.description}
              </p>
              <button className="bg- text-white py-2 px-4 rounded-lg shadow-md hover:bg-indigo-500">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
