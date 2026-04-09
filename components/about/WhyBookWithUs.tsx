const reasons = [
  {
    number: "01",
    title: "Best Prices",
    description:
      "We offer competitive pricing with no hidden fees. Get the best value for your Cappadocia experience with our price-match guarantee.",
  },
  {
    number: "02",
    title: "Wide Selection of Tours",
    description:
      "Choose from dozens of curated tours including balloon rides, valley treks, cultural experiences, and adventure activities across Cappadocia.",
  },
  {
    number: "03",
    title: "Qualified Tour Operators",
    description:
      "All our partners are licensed, insured, and certified tour operators with years of experience in the Cappadocia region.",
  },
  {
    number: "04",
    title: "Professional Tour Guide",
    description:
      "Our multilingual guides are passionate locals with deep knowledge of Cappadocia's history, geology, and hidden gems.",
  },
  {
    number: "05",
    title: "Fast Booking",
    description:
      "Book your dream tour in minutes with instant confirmation. Our streamlined process gets you from browsing to booked effortlessly.",
  },
  {
    number: "06",
    title: "Personalized Trips",
    description:
      "Every traveler is unique. We customize itineraries based on your interests, pace, and preferences for a truly personal experience.",
  },
];

export default function WhyBookWithUs() {
  return (
    <section className="py-20 px-4 bg-light-bg">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center text-accent mb-14">
          Convenient and Easy Tour Booking Process
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r) => (
            <div
              key={r.number}
              className="bg-white rounded-[3px] p-8 shadow-sm hover:shadow-lg transition-shadow"
            >
              <span className="text-5xl font-bold text-primary/20">
                {r.number}
              </span>
              <h3 className="text-xl font-semibold text-accent mt-3 mb-3">
                {r.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
