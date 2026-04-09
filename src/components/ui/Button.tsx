import Link from "next/link";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full font-[family-name:var(--font-montserrat)] font-medium tracking-wide transition-all duration-200";

  const variants = {
    primary:
      "bg-navy text-white shadow-[0_16px_40px_rgba(2,32,109,0.18)] hover:-translate-y-0.5 hover:bg-navy-light",
    secondary:
      "bg-teal text-white shadow-[0_16px_36px_rgba(1,138,158,0.18)] hover:-translate-y-0.5 hover:bg-teal-light",
    outline:
      "border border-navy/20 bg-white/80 text-navy backdrop-blur-sm hover:-translate-y-0.5 hover:border-navy hover:bg-navy hover:text-white",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href && external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
