import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { team } from "@/data/team";

export default function TeamSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl text-center text-accent mb-4">
          Meet The Team
        </h2>
        <p className="text-center text-gray-500 mb-14">Our Travel Advisors</p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="group text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-5 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="192px"
                />
              </div>
              <h3 className="text-lg font-semibold text-accent">
                {member.name}
              </h3>
              <p className="text-gray-500 text-sm mb-3">{member.role}</p>
              <a
                href={`https://instagram.com/${member.instagram.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 transition-colors"
              >
                <ExternalLink size={16} />
                {member.instagram}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
