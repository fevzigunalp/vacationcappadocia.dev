"use client";

import { activities } from "@/data/activities";
import TourCard from "@/components/shared/TourCard";

export default function ActivitiesGrid() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl text-accent md:text-4xl">
          Find Your Own Adventure and Experience
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((a) => (
            <TourCard key={a.slug} tour={a} />
          ))}
        </div>
      </div>
    </section>
  );
}
