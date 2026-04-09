"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { testimonials } from "@/data/testimonials";
import { Quote } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section className="bg-light-bg py-20">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="mb-12 text-center text-3xl text-accent md:text-4xl">
          What Our Guests Say
        </h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          spaceBetween={30}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="pb-12 text-center">
                <Quote className="mx-auto mb-6 h-10 w-10 text-primary" />
                <p className="mb-6 text-lg leading-relaxed text-body-text italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <h4 className="text-lg font-semibold text-accent">{t.name}</h4>
                <p className="text-sm text-text-lighter">{t.location}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
