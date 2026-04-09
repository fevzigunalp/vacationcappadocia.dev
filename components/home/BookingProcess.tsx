import { Shield, Zap, Users } from "lucide-react";

const steps = [
  {
    icon: Shield,
    title: "Reliable Tours",
    description:
      "All our tours are verified and operated by trusted local partners with years of experience in Cappadocia.",
  },
  {
    icon: Zap,
    title: "Fast Booking",
    description:
      "Book your tour in minutes with our streamlined booking process. Instant confirmation and easy payment.",
  },
  {
    icon: Users,
    title: "Personalized Trips",
    description:
      "Customize your itinerary to match your preferences. We tailor every trip to create your perfect adventure.",
  },
];

export default function BookingProcess() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <s.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-accent">{s.title}</h3>
              <p className="text-sm leading-relaxed text-body-text">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
