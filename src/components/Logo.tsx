import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
}

export function Logo({ className = "h-16 w-auto" }: LogoProps) {
  return (
    <div className="flex items-center group py-0.5">
      <Image
        src="/images/logo.png"
        alt="Banshighar Enterprise Logo"
        width={183}
        height={100}
        className={`${className} object-contain transition-transform duration-500 group-hover:scale-105`}
        priority
      />
    </div>
  );
}
