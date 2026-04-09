"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { tours } from "@/data/tours";
import TourCard from "@/components/shared/TourCard";

import "swiper/css";
import "swiper/css/navigation";

export default function LastMinuteDeals() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl text-accent md:text-4xl">
          Last Minute Deals
        </h2>
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {tours.map((tour) => (
            <SwiperSlide key={tour.slug}>
              <TourCard
                tour={{ ...tour, discountedPrice: Math.round(tour.price * 0.8) }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
