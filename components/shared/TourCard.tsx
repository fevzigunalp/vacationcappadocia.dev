import Image from "next/image";
import Link from "next/link";
import { Clock, MapPin, Star } from "lucide-react";

export interface Tour {
  slug: string;
  title: string;
  image: string;
  duration: string;
  rating: number;
  price: number;
  popular?: boolean;
  location?: string;
  discountedPrice?: number;
}

interface TourCardProps {
  tour: Tour;
}

export default function TourCard({ tour }: TourCardProps) {
  const {
    slug,
    title,
    image,
    duration,
    rating,
    price,
    popular,
    location,
    discountedPrice,
  } = tour;

  return (
    <Link href={`/booking/${slug}`} className="group block">
      <div className="overflow-hidden rounded-[3px] bg-light-bg shadow-md transition-shadow hover:shadow-xl">
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          {popular && (
            <span className="absolute top-3 left-3 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
              Popular
            </span>
          )}
          {!popular && discountedPrice && (
            <span className="absolute top-3 left-3 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
              SALE
            </span>
          )}
        </div>
        <div className="p-5">
          {location && (
            <div className="mb-2 flex items-center gap-1 text-sm text-body-text">
              <MapPin size={14} className="text-primary" />
              <span>{location}</span>
            </div>
          )}
          <h3 className="mb-3 text-[24px] font-semibold text-accent transition-colors group-hover:text-primary line-clamp-2">
            {title}
          </h3>
          <div className="mb-3 flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={14}
                className={
                  i < rating
                    ? "fill-star-gold text-star-gold"
                    : "text-gray-300"
                }
              />
            ))}
            <span className="ml-1 text-sm text-body-text">
              {rating.toFixed(1)}
            </span>
          </div>
          <div className="flex items-center justify-between border-t border-border pt-3">
            <div className="flex items-center gap-1 text-sm text-body-text">
              <Clock size={14} className="text-primary" />
              <span>{duration}</span>
            </div>
            <div className="text-right">
              <span className="text-xs text-body-text">From</span>
              {discountedPrice ? (
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-400 line-through">
                    ${price}
                  </span>
                  <span className="text-lg font-bold text-primary">
                    ${discountedPrice}
                  </span>
                </div>
              ) : (
                <p className="text-lg font-bold text-primary">${price}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
