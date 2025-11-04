import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, MapPin } from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-lg px-3 py-2 -ml-3">
            <MapPin className="h-6 w-6 lg:h-7 lg:w-7 text-primary" />
            <span className="text-xl lg:text-2xl font-bold font-serif">TripConnect</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-lg" data-testid="link-home">
              Home
            </Link>
            <Link href="/how-it-works" className="text-sm font-medium text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-lg" data-testid="link-how-it-works">
              How It Works
            </Link>
            <Link href="/pricing" className="text-sm font-medium text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-lg" data-testid="link-pricing">
              Pricing
            </Link>
            <Link href="/support" className="text-sm font-medium text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-lg" data-testid="link-support">
              Support
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" asChild data-testid="button-login">
              <Link href="/login">Log In</Link>
            </Button>
            <Button variant="default" asChild data-testid="button-plan-trip">
              <Link href="/book-trip">Plan Your Trip</Link>
            </Button>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm font-medium text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-lg" data-testid="link-mobile-home">
                Home
              </Link>
              <Link href="/how-it-works" className="text-sm font-medium text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-lg" data-testid="link-mobile-how-it-works">
                How It Works
              </Link>
              <Link href="/pricing" className="text-sm font-medium text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-lg" data-testid="link-mobile-pricing">
                Pricing
              </Link>
              <Link href="/support" className="text-sm font-medium text-foreground hover-elevate active-elevate-2 px-3 py-2 rounded-lg" data-testid="link-mobile-support">
                Support
              </Link>
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
                <Button variant="ghost" asChild data-testid="button-mobile-login">
                  <Link href="/login">Log In</Link>
                </Button>
                <Button variant="default" asChild data-testid="button-mobile-plan-trip">
                  <Link href="/book-trip">Plan Your Trip</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
