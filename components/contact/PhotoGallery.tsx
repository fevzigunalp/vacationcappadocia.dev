import Image from "next/image";

const images = [
  "/images/contact/gallery1.jpg",
  "/images/contact/gallery2.jpg",
  "/images/contact/gallery3.jpg",
  "/images/contact/gallery4.jpg",
  "/images/contact/gallery5.jpg",
  "/images/contact/gallery6.jpg",
  "/images/contact/gallery7.jpg",
];

export default function PhotoGallery() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-center text-accent mb-12">
          Cappadocia Gallery
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div
              key={i}
              className="relative h-48 md:h-64 rounded-[3px] overflow-hidden group"
            >
              <Image
                src={src}
                alt={`Cappadocia photo ${i + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
