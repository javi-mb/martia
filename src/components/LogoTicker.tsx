"use client";

import Image from "next/image";
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container mx-auto">
        <h2 className="text-xl text-center text-white/70">
          Trusted by the world's most innovative teams
        </h2>
        <div className="overflow-hidden mt-9 relative before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 before:left-0 after:right-0 before:top-0 after:top-0 before:bg-gradient-to-r before:from-black before:to-transparent after:bg-gradient-to-l after:from-black after:to-transparent">
          <div className="flex gap-16 items-center justify-between">
            {images.map(({ src, alt }) => (
              <Image
                key={alt}
                src={src}
                alt={alt}
                className="flex-none h-8 w-auto"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
