"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
// import  AnimatedTestimonialsDemo from "@/components/Testimonials";
import { BackgroundShapes } from "../components/BackgroundShape";
import { Header } from "@/components/Header";
import { FeatureShowcase } from "../components/FeatureShowcase";
import { AnimatedTestimonialsDemo } from "@/components/Testimonials";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background via-background to-muted/50 overflow-hidden">
      <BackgroundShapes />

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
              The easiest way to
              <span className="block text-primary">track your expenses</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Take control of your finances with our intuitive budgeting tools.
              No complex setup, no learning curve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button size="lg" className="w-full sm:w-auto">
                  Get Started Free
                </Button>
              </Link>
              <Link href="#features">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  See how it works
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Showcase */}
      <FeatureShowcase />

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-muted/50 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Loved by thousands</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See what our users have to say about their experience with
              TrackIt.
            </p>
          </motion.div>
          <AnimatedTestimonialsDemo />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background/80 backdrop-blur-lg">
        <Footer />
      </footer>
    </div>
  );
}
