import { Card } from "@/components/ui/card";
import { Calendar, Users, MessageCircle } from "lucide-react";

const steps = [
  {
    icon: Calendar,
    title: "Plan Your Trip",
    description: "Enter your travel details, select your vehicle type, and mark your stops on the map.",
  },
  {
    icon: Users,
    title: "Compare Driver Bids",
    description: "Receive bids from verified drivers in your area and choose the best match for your journey.",
  },
  {
    icon: MessageCircle,
    title: "Travel with Confidence",
    description: "Chat with your driver, pay securely, and enjoy a safe and comfortable journey.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Book your perfect trip in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="p-8 text-center hover-elevate" data-testid={`step-card-${index}`}>
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
