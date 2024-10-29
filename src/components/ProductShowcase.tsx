"use client";
import { RefObject } from "react";

const products = [
  {
    title: "Landing Page",
    price: "80.000",
    description:
      "Diseñamos páginas de aterrizaje atractivas y estratégicas, enfocadas en captar la atención y guiar a los usuarios hacia una acción clave, como suscripciones o ventas.",
    include: [
      "Información clara del negocio",
      "Botón directo a WhatsApp",
      "Llamadas a la acción efectivas",
    ],
    principal: false,
  },

  {
    title: "Página de Productos",
    price: "99.999",
    description:
      "Mostramos tu catálogo de productos de forma organizada y profesional, ideal para negocios que necesitan presentar su oferta sin ventas en línea.",
    include: [
      "Galería visual de productos",
      "Filtros avanzados de búsqueda",
      "Formulario de contacto personalizado",
    ],
    principal: true,
  },
  {
    title: "E-commerce",
    price: "149.999",
    description:
      "Creamos tiendas en línea completas, con carrito de compras, gestión de inventario y pasarelas de pago seguras. Perfecto para negocios que buscan automatizar sus ventas.",
    include: [
      "Carrito de compras funcional",
      "Pasarelas de pago confiables",
      "Gestión automatizada de inventario",
    ],
    principal: false,
  },
];

interface NavbarProps {
  callToActionRef: RefObject<HTMLDivElement>; // Tipo de referencia para el elemento de contacto
}

export const ProductShowcase: React.FC<NavbarProps> = ({ callToActionRef }) => {
  const scrollToCallToAction = () => {
    if (callToActionRef.current) {
      callToActionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#023E8A] py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Planes y Servicios
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center text-xl text-white/70 mt-5">
            En MartIA, ofrecemos soluciones adaptadas a las necesidades de tu
            negocio. Desde páginas web que impresionan hasta plataformas de
            ventas en línea, encuentra el plan perfecto para impulsar tu marca.
          </p>
        </div>

        {/* Sección para las tarjetas de precios */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <div
              key={i}
              className={
                product.principal
                  ? `bg-black text-white p-8 rounded-lg shadow-lg transition transform hover:scale-105`
                  : "bg-white text-black p-8 rounded-lg shadow-lg transition transform hover:scale-105"
              }
            >
              <h3 className="text-2xl font-semibold mb-4">{product.title}</h3>
              <div className="text-4xl font-bold mb-4">
                ${product.price}
                <span className="text-gray-500 text-xl"> ARS</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                {product.description}
              </p>
              <button
                className="bg-[#023E8A] w-full text-white py-2 px-4 rounded-lg mb-4 hover:bg-blue-500 transition"
                onClick={scrollToCallToAction}
              >
                Contratar
              </button>
              <div className="text-lg">Incluye:</div>
              <ul
                className={
                  !product.principal
                    ? `list-disc list-inside text-gray-700 mb-4`
                    : "list-disc list-inside text-gray-300 mb-4"
                }
              >
                {product.include.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
