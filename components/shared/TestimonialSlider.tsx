"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

import "swiper/css";
import "swiper/css/pagination";

export default function TestimonialSlider() {
  return (
    <section className="py-20 px-4 bg-light-bg">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl text-accent mb-12">
          What Our Guests Say
        </h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          spaceBetween={30}
          className="pb-14"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="px-4 md:px-12">
                <Quote size={40} className="text-primary/30 mx-auto mb-6" />
                <p className="text-gray-600 text-lg leading-relaxed mb-8 italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <h4 className="text-lg font-semibold text-accent">
                  {t.name}
                </h4>
                <p className="text-gray-500 text-sm">{t.location}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
