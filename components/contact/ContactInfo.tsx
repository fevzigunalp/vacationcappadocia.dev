import { Phone, Clock, MapPin, Mail } from "lucide-react";

const infoCards = [
  {
    icon: Phone,
    title: "Trip Queries",
    lines: [
      "Phone: +(90) 384 341 8 341",
      "WhatsApp: +(90) 537 594 92 21",
    ],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: [
      "Mon - Sun: 24 Hours",
      "Email: info@vacationcappadocia.com",
    ],
  },
  {
    icon: MapPin,
    title: "Location",
    lines: [
      "Kayseri Erkilet Airport: 80km / 76 min",
      "Nevsehir Cappadocia Airport: 40km / 40 min",
    ],
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      {infoCards.map((card) => (
        <div
          key={card.title}
          className="bg-light-bg rounded-[3px] shadow-md p-6 flex gap-4"
        >
          <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
            <card.icon size={22} className="text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-accent text-lg mb-2">
              {card.title}
            </h3>
            {card.lines.map((line, i) => (
              <p key={i} className="text-gray-600 text-sm">
                {line}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
