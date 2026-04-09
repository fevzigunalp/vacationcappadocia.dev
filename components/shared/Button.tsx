import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
}

const variants = {
  primary:
    "bg-primary text-white hover:bg-primary-dark",
  secondary:
    "bg-secondary text-white hover:bg-secondary/90",
  outline:
    "border-2 border-primary text-primary hover:bg-primary hover:text-white",
};

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
  type = "button",
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[3px] font-semibold text-sm transition-colors ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={base}>
      {children}
    </button>
  );
}
