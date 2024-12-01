"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { Footer } from "@/components/Footer";
import { BackgroundShapes } from "../components/BackgroundShape";
import { Header } from "@/components/Header";
import { AnimatedTestimonialsDemo } from "@/components/Testimonials";
import Features from "@/components/features/Features";

export default function LandingPage() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background via-background to-muted/50 overflow-hidden">
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <BackgroundShapes />
      </motion.div>

      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ scale }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
              The easiest way to
              <span className="block mt-2">track your expenses</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Take control of your finances with our intuitive budgeting tools.
              No complex setup, no learning curve.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto text-lg px-8 py-6"
                  >
                    Get Started Free
                  </Button>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="#features">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto text-lg px-8 py-6"
                  >
                    See how it works
                  </Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Showcase */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Features />
      </motion.div>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-muted/50 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
              Loved by thousands
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              See what our users have to say about their experience with
              TrackIt.
            </p>
          </motion.div>
          <AnimatedTestimonialsDemo />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-backgr;ound/80 backdrop-blur-lg">
        <Footer />
      </footer>
    </div>
  );
}
