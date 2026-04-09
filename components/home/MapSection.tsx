"use client";

import { useState } from "react";
import Link from "next/link";

const tabs = ["Cappadocia", "Goreme", "South America", "Africa", "Asia Indian Ocean"];

export default function MapSection() {
  const [activeTab, setActiveTab] = useState("Cappadocia");

  return (
    <section
      className="relative bg-cover bg-center py-24"
      style={{
        backgroundImage:
          "url(https://vacationcappadocia.com/wp-content/uploads/2023/02/h3_map1.png)",
      }}
    >
      <div className="absolute inset-0 bg-white/80" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-[3px] px-6 py-2 text-sm font-semibold transition duration-300 ${
                activeTab === tab
                  ? "bg-primary text-white"
                  : "bg-white text-body-text hover:bg-primary/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <h2 className="mb-4 text-3xl text-accent">
          Explore {activeTab}
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-body-text">
          Discover amazing destinations, tours, and activities across {activeTab}. Plan your next adventure with us.
        </p>
        <Link
          href="/destinations"
          className="inline-block rounded-[3px] bg-primary px-[27px] py-[11px] font-semibold text-white transition duration-300 hover:bg-primary-dark"
        >
          Check Our Destinations
        </Link>
      </div>
    </section>
  );
}
