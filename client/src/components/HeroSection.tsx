import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@assets/generated_images/Happy_travelers_road_trip_van_b84b6c81.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center pt-24 pb-16 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Connect with Trusted Drivers for Your Perfect Journey
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground">
                Plan trips, compare driver bids, and travel with confidence. Book the perfect vehicle for your next adventure.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="text-base px-8" data-testid="button-hero-plan-trip">
                <Link href="/book-trip">
                  Plan Your Trip
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-base px-8" data-testid="button-hero-become-driver">
                <Link href="/become-driver">Become a Driver</Link>
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Verified Drivers</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Best Price Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">24/7 Support</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img
                src={heroImage}
                alt="Happy travelers on a road trip"
                className="w-full h-auto"
                data-testid="img-hero"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg hidden lg:block">
              <div className="text-3xl font-bold">1000+</div>
              <div className="text-sm">Happy Travelers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
