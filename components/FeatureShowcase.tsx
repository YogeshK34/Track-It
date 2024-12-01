import Image from "next/image";
import { motion } from "framer-motion";
import { Camera, CreditCard, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Smart Receipt Scanning",
    description:
      "Instantly capture and process receipts with our AI-powered scanner. Automatically extracts date, amount, and category.",
    icon: Camera,
    color: "text-pink-500",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Real-time Bank Sync",
    description:
      "Connect your bank accounts and credit cards for automatic transaction import and categorization.",
    icon: CreditCard,
    color: "text-violet-500",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Smart Budgeting",
    description:
      "Set dynamic budgets that adapt to your spending patterns and receive AI-powered suggestions.",
    icon: PieChart,
    color: "text-blue-500",
    image: "/placeholder.svg?height=400&width=600",
  },
];

export default function FeatureShowcase() {
  return (
    <div className="container mx-auto px-6">
      <motion.h2
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Powerful Features for Better Financial Control
      </motion.h2>
      <motion.p
        className="text-xl text-muted-foreground max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        Everything you need to track, manage, and optimize your expenses in one
        place
      </motion.p>

      <div className="space-y-32">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <div className={index % 2 === 0 ? "md:order-2" : "md:order-1"}>
              <div className="rounded-lg overflow-hidden shadow-2xl bg-background border">
                <div className="flex items-center gap-1.5 p-3 bg-muted/50 border-b">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <div className="relative aspect-video bg-background">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-b-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="text-lg font-semibold mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-sm opacity-80">{feature.description}</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`space-y-6 ${
                index % 2 === 0 ? "md:order-1" : "md:order-2"
              }`}
            >
              <div
                className={`inline-block p-3 rounded-2xl ${feature.color.replace(
                  "text-",
                  "bg-"
                )}/10`}
              >
                <feature.icon className={`h-8 w-8 ${feature.color}`} />
              </div>
              <h3 className="text-3xl font-bold">{feature.title}</h3>
              <p className="text-xl text-muted-foreground">
                {feature.description}
              </p>
              <Button variant="outline" size="lg" className="rounded-full">
                Learn More
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
