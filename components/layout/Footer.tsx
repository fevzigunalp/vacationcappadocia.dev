import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
);
const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
);

const popularTours = [
  { label: "Classic Balloon Tour", href: "/tours/classic-balloon-tour" },
  { label: "Classic Cappadocia Tour", href: "/tours/classic-cappadocia-tour" },
  { label: "Best Honeymoon Tour", href: "/tours/best-honeymoon-tour" },
  { label: "Turkish Night Show", href: "/tours/turkish-night-show" },
  { label: "Fascinating Cappadocia Tour", href: "/tours/fascinating-cappadocia-tour" },
  { label: "Spirit of Cappadocia Tour", href: "/tours/spirit-of-cappadocia-tour" },
];

const topActivities = [
  { label: "Sunset ATV Tour", href: "/activities/sunset-atv-tour" },
  { label: "Sunrise Camel Ride", href: "/activities/sunrise-camel-ride" },
  { label: "Deluxe Balloon Tour", href: "/activities/deluxe-balloon-tour" },
  { label: "Whirling Dervish Ceremony", href: "/activities/whirling-dervish-ceremony" },
  { label: "Horseback Riding", href: "/activities/horseback-riding" },
  { label: "Jeep Safari Tour", href: "/activities/jeep-safari-tour" },
];

const aboutCompany = [
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact" },
  { label: "Our Blog", href: "/blog" },
  { label: "Luwian Travel", href: "https://luwiantravel.com", external: true },
  { label: "Teklif Kapadokya", href: "https://teklifkapadokya.com", external: true },
  { label: "Events in Cappadocia", href: "https://eventscappadocia.com", external: true },
];

const usefulLinks = [
  { label: "Booking Conditions", href: "/booking-conditions" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Cancellation Policy", href: "/cancellation-policy" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Website Cookies", href: "/cookies" },
  { label: "Server Status", href: "/server-status" },
];

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string; external?: boolean }[] }) {
  return (
    <div>
      <h4 className="text-accent font-semibold text-lg mb-4">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.label}>
            {link.external ? (
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-text hover:text-primary transition-colors text-sm"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="text-body-text hover:text-primary transition-colors text-sm"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#FDF8F0]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <FooterColumn title="Popular Tours" links={popularTours} />
          <FooterColumn title="Top Activities" links={topActivities} />
          <FooterColumn title="About Company" links={aboutCompany} />
          <FooterColumn title="Useful Links" links={usefulLinks} />
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-[#e8dfd3]">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src="https://vacationcappadocia.com/wp-content/uploads/2022/07/vacation-cappadocia-logo.svg"
                alt="Vacation Cappadocia"
                width={140}
                height={40}
              />
            </Link>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center gap-4 text-body-text text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary shrink-0" />
                <span>Cumhuriyet Mahallesi Dumlup&#305;nar Caddesi Eski Sanayi Sitesi No:71/27 &Uuml;rg&uuml;p / Nev&#351;ehir</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary shrink-0" />
                <a href="tel:+905375949221" className="hover:text-primary transition-colors">
                  +(90) 537 594 92 21
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary shrink-0" />
                <a href="mailto:info@vacationcappadocia.com" className="hover:text-primary transition-colors">
                  info@vacationcappadocia.com
                </a>
              </div>
            </div>
          </div>

          {/* Copyright & Social */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-6 pt-6 border-t border-[#e8dfd3] gap-4">
            <p className="text-text-lighter text-sm">
              &copy; 2026 Navantix Travel. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-text hover:text-primary transition-colors"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-text hover:text-primary transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body-text hover:text-primary transition-colors"
              >
                <SpotifyIcon />
              </a>
            </div>
            <p className="text-text-lighter text-xs">
              Designed by{" "}
              <a
                href="https://comanalab.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Comana Lab
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
