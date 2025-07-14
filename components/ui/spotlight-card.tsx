"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Stripes from "@/public/images/stripes-dark.svg";

interface SpotlightCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  href?: string;
  buttonText?: string;
  className?: string;
}

export default function SpotlightCard({ 
  image, 
  alt, 
  title, 
  description, 
  href, 
  buttonText = "Open",
  className = "" 
}: SpotlightCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative flex flex-row-reverse items-center bg-[#f3f3f3] rounded-3xl shadow-xl p-8 transition-all duration-300 mx-auto ${className}`}
      style={{ minHeight: 200, width: 800 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Card */}
      <div className="ml-6">
        <div className="relative w-64 h-40 flex items-center justify-center">
          <Image
            src={image}
            alt={alt}
            fill
            className="rounded-3xl"
          />
        </div>
      </div>
      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-2xl mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-500 mb-6 max-w-xl">
          {description}
        </p>
        {href && (
          <Link href={href} legacyBehavior>
            <a className="inline-block rounded-full bg-[var(--color-primary)] text-white px-8 py-2 font-semibold shadow hover:bg-[var(--color-primary-dark)] transition text-lg focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:ring-offset-2">
              {buttonText}
            </a>
          </Link>
        )}
      </div>
      {/* Optional spotlight effect on hover */}
      {isHovered && (
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" style={{ zIndex: 1 }} />
      )}
    </div>
  );
} 