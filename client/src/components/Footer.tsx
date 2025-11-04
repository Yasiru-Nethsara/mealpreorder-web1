import { Link } from "wouter";
import { MapPin } from "lucide-react";
import { SiFacebook, SiX, SiInstagram, SiLinkedin } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <MapPin className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold font-serif">TripConnect</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Connecting travelers with trusted drivers for perfect journeys.
            </p>
            <div className="flex gap-3">
              <a href="#" className="hover-elevate active-elevate-2 p-2 rounded-lg" aria-label="Facebook">
                <SiFacebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover-elevate active-elevate-2 p-2 rounded-lg" aria-label="X">
                <SiX className="h-5 w-5" />
              </a>
              <a href="#" className="hover-elevate active-elevate-2 p-2 rounded-lg" aria-label="Instagram">
                <SiInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover-elevate active-elevate-2 p-2 rounded-lg" aria-label="LinkedIn">
                <SiLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover-elevate active-elevate-2 inline-block px-2 py-1 -ml-2 rounded-lg">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-muted-foreground hover-elevate active-elevate-2 inline-block px-2 py-1 -ml-2 rounded-lg">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-sm text-muted-foreground hover-elevate active-elevate-2 inline-block px-2 py-1 -ml-2 rounded-lg">
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Travelers</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/book-trip" className="text-sm text-muted-foreground hover-elevate active-elevate-2 inline-block px-2 py-1 -ml-2 rounded-lg">
                  Book a Trip
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-sm text-muted-foreground hover-elevate active-elevate-2 inline-block px-2 py-1 -ml-2 rounded-lg">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/safety" className="text-sm text-muted-foreground hover-elevate active-elevate-2 inline-block px-2 py-1 -ml-2 rounded-lg">
                  Safety
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Drivers</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/become-driver" className="text-sm text-muted-foreground hover-elevate active-elevate-2 inline-block px-2 py-1 -ml-2 rounded-lg">
                  Become a Driver
                </Link>
              </li>
              <li>
                <Link href="/driver-requirements" className="text-sm text-muted-foreground hover-elevate active-elevate-2 inline-block px-2 py-1 -ml-2 rounded-lg">
                  Requirements
                </Link>
              </li>
              <li>
                <Link href="/driver-support" className="text-sm text-muted-foreground hover-elevate active-elevate-2 inline-block px-2 py-1 -ml-2 rounded-lg">
                  Driver Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/help" className="text-sm text-muted-foreground hover-elevate active-elevate-2 inline-block px-2 py-1 -ml-2 rounded-lg">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover-elevate active-elevate-2 inline-block px-2 py-1 -ml-2 rounded-lg">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover-elevate active-elevate-2 inline-block px-2 py-1 -ml-2 rounded-lg">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 TripConnect. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-lg">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-lg">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-sm text-muted-foreground hover-elevate active-elevate-2 px-2 py-1 rounded-lg">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
