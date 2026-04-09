import Link from "next/link";

export default function CTABanner() {
  return (
    <section
      className="relative w-full py-24 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "url('https://vacationcappadocia.com/wp-content/uploads/2022/06/balloons-goreme-820x520.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-secondary/70" />
      <div className="relative z-10 text-center px-4">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          We live in an exciting Destinations!
        </h2>
        <Link
          href="/destination"
          className="inline-block bg-primary text-white px-8 py-3 rounded-[3px] font-semibold hover:bg-primary-dark transition-colors"
        >
          Start Exploring It
        </Link>
      </div>
    </section>
  );
}
