"use client";

import { useState } from "react";
import Image from "next/image";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  fallbackTitle: string;
  fallbackGenre?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

const genreGradients: Record<string, string> = {
  Memoir: "from-navy to-navy-light",
  Fiction: "from-teal to-teal-light",
  "Non-Fiction": "from-navy to-teal",
  Spiritual: "from-gold to-gold-light",
  default: "from-navy to-teal",
};

export function ImageWithFallback({
  src,
  alt,
  width,
  height,
  fallbackTitle,
  fallbackGenre,
  className = "",
  priority = false,
  sizes,
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error || !src) {
    const gradient = genreGradients[fallbackGenre || "default"] || genreGradients.default;
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br ${gradient} ${className}`}
        style={{ width, height }}
      >
        <p className="px-4 text-center font-[family-name:var(--font-playfair)] text-lg font-bold leading-snug text-white">
          {fallbackTitle}
        </p>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
      onError={() => setError(true)}
    />
  );
}
