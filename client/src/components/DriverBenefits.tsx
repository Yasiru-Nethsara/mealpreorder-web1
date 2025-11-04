import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
import { DollarSign, Calendar, Shield, TrendingUp } from "lucide-react";
import driverImage from "@assets/generated_images/Professional_driver_with_modern_van_e940ad5d.svg";

const benefits = [
  {
    icon: DollarSign,
    title: "Earn More",
    description: "Set your own rates and maximize your earnings with our flexible bidding system.",
  },
  {
    icon: Calendar,
    title: "Flexible Schedule",
    description: "Choose trips that fit your availability and build your own schedule.",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description: "Get advance payments and guaranteed earnings for confirmed trips.",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Business",
    description: "Build your reputation with ratings and grow your customer base.",
  },
];

export default function DriverBenefits() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  Drive with TripConnect
                </h2>
                <p className="text-lg text-muted-foreground">
                  Join our community of verified drivers and start earning on your own terms.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <Card key={index} className="p-6 hover-elevate">
                      <Icon className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </Card>
                  );
                })}
              </div>

              <Button size="lg" asChild className="mt-4" data-testid="button-become-driver-cta">
                <Link href="/become-driver">Start Driving Today</Link>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative rounded-xl overflow-hidden shadow-xl">
              <img
                src={driverImage}
                alt="Professional driver with vehicle"
                className="w-full h-auto"
                data-testid="img-driver"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
