"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Clock, Star, MapPin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { tours } from "@/data/tours";
import TourCard from "@/components/shared/TourCard";

interface InquiryData {
  name: string;
  email: string;
  date: string;
  guests: string;
  message: string;
}

export default function BookingDetail() {
  const { slug } = useParams<{ slug: string }>();
  const tour = tours.find((t) => t.slug === slug);
  const relatedTours = tours.filter((t) => t.slug !== slug).slice(0, 3);

  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset } = useForm<InquiryData>();

  const onSubmit = async (data: InquiryData) => {
    await new Promise((r) => setTimeout(r, 800));
    console.log("Inquiry:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl text-accent mb-4">Tour Not Found</h1>
          <Link href="/tours" className="text-primary hover:underline">Back to Tours</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative h-[400px] md:h-[500px] w-full">
        <Image src={tour.image} alt={tour.title} fill className="object-cover" priority unoptimized />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-8 left-0 right-0 px-4">
          <div className="max-w-7xl mx-auto text-white">
            <h1 className="text-3xl md:text-5xl font-bold mb-3">{tour.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <span className="flex items-center gap-1"><MapPin size={16} /> {tour.location}</span>
              <span className="flex items-center gap-1"><Clock size={16} /> {tour.duration}</span>
              <span className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className={i < tour.rating ? "fill-star-gold text-star-gold" : "text-white/40"} />
                ))}
              </span>
              <span className="text-2xl font-bold text-primary">${tour.price}</span>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-2xl text-accent mb-4">Tour Description</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Experience the wonder of Cappadocia with our {tour.title}. This carefully curated tour takes you through the most iconic landmarks and hidden gems of the region. From fairy chimneys to ancient underground cities, every stop is designed to immerse you in the rich history and breathtaking beauty of Cappadocia.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our professional guides will share fascinating stories about the geological formations, early Christian history, and the unique culture that makes Cappadocia one of the world&apos;s most extraordinary destinations. The tour includes hotel pickup and drop-off, lunch at a local restaurant, and all entrance fees.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you are a first-time visitor or returning to discover more, this tour offers an unforgettable journey through one of Turkey&apos;s most magical landscapes.
            </p>
          </div>

          <div className="bg-white rounded-[3px] shadow-md p-6">
            <h3 className="text-xl text-accent mb-4">Booking Inquiry</h3>
            {submitted && (
              <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                Inquiry sent! We will contact you shortly.
              </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <input {...register("name", { required: true })} placeholder="Your Name" className="w-full px-4 py-3 border border-border rounded-[3px] focus:outline-none focus:ring-2 focus:ring-primary/50" />
              <input {...register("email", { required: true })} placeholder="Email" type="email" className="w-full px-4 py-3 border border-border rounded-[3px] focus:outline-none focus:ring-2 focus:ring-primary/50" />
              <input {...register("date", { required: true })} placeholder="Preferred Date" type="date" className="w-full px-4 py-3 border border-border rounded-[3px] focus:outline-none focus:ring-2 focus:ring-primary/50" />
              <input {...register("guests", { required: true })} placeholder="Number of Guests" type="number" min="1" className="w-full px-4 py-3 border border-border rounded-[3px] focus:outline-none focus:ring-2 focus:ring-primary/50" />
              <textarea {...register("message")} placeholder="Special Requests" rows={3} className="w-full px-4 py-3 border border-border rounded-[3px] focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" />
              <button type="submit" className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-[3px] font-semibold hover:bg-primary-dark transition-colors">
                <Send size={18} /> Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {relatedTours.length > 0 && (
        <section className="py-16 px-4 bg-light-bg">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl text-accent mb-8">Related Tours</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedTours.map((t) => <TourCard key={t.slug} tour={t} />)}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
