"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

function getTargetDate() {
  const target = new Date();
  target.setDate(target.getDate() + 30);
  return target.getTime();
}

const TARGET = getTargetDate();

function calcTimeLeft() {
  const diff = TARGET - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownBanner() {
  const [time, setTime] = useState(calcTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(calcTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const blocks = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <section
      className="relative bg-cover bg-center py-20"
      style={{
        backgroundImage:
          "url(https://vacationcappadocia.com/wp-content/uploads/2022/06/balloons-goreme-820x520.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
        <p className="mb-2 text-sm font-semibold tracking-widest text-primary">
          LIMITED TIME OFFER
        </p>
        <h2 className="mb-4 text-3xl md:text-5xl">
          New Experiences in Cappadocia — 50% OFF
        </h2>
        <div className="mb-8 flex justify-center gap-4">
          {blocks.map((b) => (
            <div key={b.label} className="flex flex-col items-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/20 text-2xl font-bold backdrop-blur md:h-20 md:w-20 md:text-3xl">
                {String(b.value).padStart(2, "0")}
              </span>
              <span className="mt-2 text-xs uppercase tracking-wider">{b.label}</span>
            </div>
          ))}
        </div>
        <Link
          href="/tours"
          className="inline-block rounded-[3px] bg-primary px-[27px] py-[11px] text-lg font-semibold text-white transition duration-300 hover:bg-primary-dark"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
}
