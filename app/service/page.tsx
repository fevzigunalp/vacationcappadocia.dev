import { Metadata } from "next";
import {
  Plane,
  Hotel,
  Car,
  Camera,
  Utensils,
  ShieldCheck,
} from "lucide-react";
import PageBanner from "@/components/layout/PageBanner";

export const metadata: Metadata = {
  title: "Services - Vacation Cappadocia",
  description:
    "Explore our full range of travel services including airport transfers, hotel bookings, guided tours, and more.",
};

const services = [
  {
    icon: Plane,
    title: "Airport Transfers",
    description:
      "Comfortable and reliable transfers from Kayseri and Nevsehir airports to your hotel in Cappadocia.",
  },
  {
    icon: Hotel,
    title: "Hotel Reservations",
    description:
      "We partner with the finest cave hotels and boutique accommodations across Cappadocia to suit every budget.",
  },
  {
    icon: Car,
    title: "Car Rental",
    description:
      "Explore Cappadocia at your own pace with our reliable car rental service, available with or without a driver.",
  },
  {
    icon: Camera,
    title: "Photography Tours",
    description:
      "Capture the magic of Cappadocia with our professional photography tours led by local photographers.",
  },
  {
    icon: Utensils,
    title: "Culinary Experiences",
    description:
      "Taste authentic Cappadocian cuisine with our cooking classes, wine tastings, and local food tours.",
  },
  {
    icon: ShieldCheck,
    title: "Travel Insurance",
    description:
      "Travel with peace of mind. We help arrange comprehensive travel insurance for your Cappadocia trip.",
  },
];

export default function ServicePage() {
  return (
    <>
      <PageBanner
        title="Our Services"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl text-accent mb-4">
              What We Offer
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From the moment you land to the moment you leave, Vacation
              Cappadocia takes care of every detail so you can focus on making
              memories.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-light-bg rounded-[3px] p-8 shadow-sm hover:shadow-lg transition-shadow text-center"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-5">
                  <s.icon size={28} className="text-primary" />
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
