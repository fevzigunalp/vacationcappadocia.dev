import { Metadata } from "next";
import { Users, Calendar, MapPin, HeadphonesIcon } from "lucide-react";
import PageBanner from "@/components/layout/PageBanner";

export const metadata: Metadata = {
  title: "Organizations - Vacation Cappadocia",
  description:
    "Corporate events, group tours, and organizational travel services in Cappadocia.",
};

const services = [
  {
    icon: Users,
    title: "Group Tours",
    description:
      "We organize group tours for corporate teams, school groups, and large travel parties with custom itineraries and dedicated guides.",
  },
  {
    icon: Calendar,
    title: "Event Planning",
    description:
      "From team-building retreats to corporate conferences, we handle venue selection, logistics, and unique Cappadocia experiences.",
  },
  {
    icon: MapPin,
    title: "Custom Itineraries",
    description:
      "Every organization has different needs. We create bespoke travel plans that align with your schedule, budget, and objectives.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description:
      "A dedicated coordinator is assigned to your group from the planning stage through the entire trip for seamless execution.",
  },
];

export default function OrganizationsPage() {
  return (
    <>
      <PageBanner
        title="Organizations"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Organizations" },
        ]}
      />
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl text-accent mb-4">
              Organization Travel Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Whether you are planning a corporate retreat, educational trip, or
              large group excursion, Vacation Cappadocia provides end-to-end
              travel management tailored to your organization.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-light-bg rounded-[3px] p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-5">
                  <s.icon size={26} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-accent mb-3">
                  {s.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
