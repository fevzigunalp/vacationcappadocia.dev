import Image from "next/image";
import Link from "next/link";

const IMAGE_BASE = "https://vacationcappadocia.com/wp-content/uploads";

const categories = [
  { name: "Travel Style", slug: "travel-style", image: `${IMAGE_BASE}/2022/06/balloons-goreme-820x520.jpg` },
  { name: "Activities Type", slug: "activities-type", image: `${IMAGE_BASE}/2022/06/horse-riding-cappadocia-820x520.jpg` },
  { name: "Adventure", slug: "adventure", image: `${IMAGE_BASE}/2022/06/jeep-safari-cappadocia-820x520.jpg` },
  { name: "ATV", slug: "atv", image: `${IMAGE_BASE}/2022/06/atv-sunrise-cappadocia-820x520.jpg` },
  { name: "Balloon Ride", slug: "balloon-ride", image: `${IMAGE_BASE}/2022/06/classic-balloon-tour-820x520.jpg` },
  { name: "Camel Safari", slug: "camel-safari", image: `${IMAGE_BASE}/2022/06/camel-ride-cappadocia-820x520.jpg` },
  { name: "Cultural", slug: "cultural", image: `${IMAGE_BASE}/2022/06/dervishes-ceremony-820x520.jpg` },
  { name: "Experiences", slug: "experiences", image: `${IMAGE_BASE}/2022/06/turkish-bath-cappadocia-820x520.jpg` },
];

export default function Categories() {
  return (
    <section className="bg-light-bg py-20">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-12 text-center text-3xl text-accent md:text-4xl">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/categories/${c.slug}`}
              className="group relative block h-44 overflow-hidden rounded-[3px]"
            >
              <Image
                src={c.image}
                alt={c.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/50" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-lg text-white">{c.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
