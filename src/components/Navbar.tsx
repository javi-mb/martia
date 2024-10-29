"use client";
import { useState } from "react";
import MenuIcon from "../assets/icons/menu.svg";

export const Navbar = ({
  featuresRef,
  productShowcaseRef,
  callToActionRef,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToFeatures = () => {
    if (featuresRef.current) {
      featuresRef.current.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const scrollToProductShowcase = () => {
    if (productShowcaseRef.current) {
      productShowcaseRef.current.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  const scrollToCallToAction = () => {
    if (callToActionRef.current) {
      callToActionRef.current.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <h2 className="font-firacode text-white/80 text-3xl font-bold">{`{ MartIA }`}</h2>
          </div>
          <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
            <button onClick={toggleMenu}>
              <MenuIcon className="text-white" />
            </button>
          </div>
          <nav className="gap-6 items-center hidden sm:flex">
            <a
              href="#"
              onClick={scrollToFeatures}
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Servicios
            </a>
            <a
              href="#"
              onClick={scrollToProductShowcase}
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Precios
            </a>
            <button
              onClick={scrollToCallToAction}
              className="bg-white py-2 px-4 rounded-lg"
            >
              Contáctanos
            </button>
          </nav>
        </div>
        {/* Menú desplegable para móviles */}
        {menuOpen && (
          <nav className="flex flex-col items-center gap-4 mt-4 sm:hidden">
            <a
              href="#"
              onClick={scrollToFeatures}
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Servicios
            </a>
            <a
              href="#"
              onClick={scrollToProductShowcase}
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Precios
            </a>
            <button
              onClick={scrollToCallToAction}
              className="bg-white py-2 px-4 rounded-lg"
            >
              Contáctanos
            </button>
          </nav>
        )}
      </div>
    </div>
  );
};
