"use client";

import { tours } from "@/data/tours";
import TourCard from "@/components/shared/TourCard";

const popularTours = tours.filter((t) => t.popular).length > 0
  ? tours.filter((t) => t.popular)
  : tours.slice(0, 4);

export default function PopularTours() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl text-accent md:text-4xl">
          Most Popular Cappadocia Tours
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popularTours.map((tour) => (
            <TourCard key={tour.slug} tour={tour} />
          ))}
        </div>
      </div>
    </section>
  );
}
