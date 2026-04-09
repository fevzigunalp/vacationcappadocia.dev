import Image from "next/image";
import Link from "next/link";

export default function AboutIntro() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Custom Travel Solutions
          </span>
          <p className="text-5xl md:text-6xl font-light text-gray-300 mt-2 mb-2 italic">
            time to explore
          </p>
          <h2 className="text-3xl md:text-4xl text-accent mb-6 leading-tight">
            A Better Way of Traveling and Touring the Cappadocia
          </h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Vacation Cappadocia is a premier travel agency based in the heart of
            Cappadocia, Turkey. With over a decade of experience in the tourism
            industry, we specialize in crafting unforgettable experiences across
            this magical landscape of fairy chimneys, ancient cave churches, and
            breathtaking valleys.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            From hot air balloon rides at sunrise to guided treks through the
            stunning Ihlara Valley, our team of local experts designs every tour
            with passion and attention to detail. We believe that travel should
            be personal, seamless, and filled with moments that last a lifetime.
            Whether you are planning a honeymoon, a family adventure, or a solo
            escape, we tailor every itinerary to your unique interests.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-[3px] font-semibold hover:bg-primary-dark transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Right - Decorative Image */}
        <div className="relative flex justify-center">
          <Image
            src="https://vacationcappadocia.com/wp-content/uploads/2022/07/ab_deco2.png"
            alt="About Vacation Cappadocia"
            width={500}
            height={600}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
