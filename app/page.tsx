import Link from "next/link";
import { Button } from "../components/ui/button";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Features from "../components/features/Features";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background via-background to-muted/50 overflow-hidden">
      <Header />

      <section className="pt-32 pb-20 px-4 relative">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
              The easiest way to
              <span className="block mt-2">track your expenses</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Take control of your finances with our intuitive budgeting tools.
              No complex setup, no learning curve.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-lg px-8 py-6"
                >
                  Get Started Free
                </Button>
              </Link>
              <Link href="#features">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto text-lg px-8 py-6"
                >
                  See how it works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Features />

      <section id="testimonials" className="py-24 bg-muted/50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">
              Loved by thousands
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              See what our users have to say about their experience with
              TrackIt.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/40 bg-background/80 backdrop-blur-lg">
        <Footer />
      </footer>
    </div>
  );
}
