import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageBanner from "@/components/layout/PageBanner";
import { destinations } from "@/data/destinations";

export const metadata: Metadata = {
  title: "Destinations - Vacation Cappadocia",
  description:
    "Explore top destinations in Cappadocia including Goreme, Urgup, Aksaray, Kayseri, and Central Cappadocia.",
};

export default function DestinationPage() {
  return (
    <>
      <PageBanner
        title="Destinations"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Destinations" },
        ]}
      />
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinations.map((dest) => (
              <Link
                key={dest.slug}
                href={`/booking-locations/${dest.slug}`}
                className="group block"
              >
                <div className="relative h-72 rounded-[3px] overflow-hidden">
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{dest.name}</h3>
                    <p className="text-sm text-white/80">
                      {dest.tourCount} {dest.tourCount === 1 ? "Tour" : "Tours"}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
