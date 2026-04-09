import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface PageBannerProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
}

export default function PageBanner({ title, breadcrumbs }: PageBannerProps) {
  return (
    <section
      className="relative w-full h-[300px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/contact/banner.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 text-center px-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-4" style={{ textShadow: '1px 0 1px rgba(0,0,0,.5)' }}>
          {title}
        </h1>
        <nav className="flex items-center justify-center gap-1.5 text-sm">
          {breadcrumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={14} className="text-white/50" />}
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="text-white/70 hover:text-primary transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-primary">{crumb.label}</span>
              )}
            </span>
          ))}
        </nav>
      </div>
    </section>
  );
}
