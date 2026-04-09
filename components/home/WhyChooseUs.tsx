import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const points = [
  "Professional Tour Guide",
  "Exceptional flexibility",
  "Quality you can trust",
  "Award-winning support",
];

export default function WhyChooseUs() {
  return (
    <section className="bg-light-bg py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
        <div className="relative h-[400px] overflow-hidden rounded-[3px] lg:h-[500px]">
          <Image
            src="https://vacationcappadocia.com/wp-content/uploads/2023/03/32401099-820x760.jpg"
            alt="Cappadocia Experience"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="mb-2 text-sm font-semibold tracking-widest text-primary">
            WHY CHOOSE US
          </p>
          <h2 className="mb-6 text-3xl text-accent md:text-4xl">
            Our Experiences Meet High Quality Standards
          </h2>
          <ul className="mb-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 text-body-text">
                <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="inline-block rounded-[3px] bg-primary px-[27px] py-[11px] font-semibold text-white transition duration-300 hover:bg-primary-dark"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
