"use client";
import { RefObject } from "react";

const products = [
  {
    title: "Chatbot Inteligente",
    description:
      "Transforma la interacción con tus clientes mediante un asistente virtual impulsado por IA, disponible 24/7 para responder consultas y mejorar la experiencia de usuario. ¡Descubre cómo este aliado digital puede optimizar tu negocio!",
    include: [
      "Atención automatizada 24/7",
      "Personalización según rubro",
      "Integración con WhatsApp y redes sociales",
    ],
    principal: true,
  },
  {
    title: "Página Web Personalizada",
    description:
      "Desarrollamos sitios web a medida que se adaptan perfectamente a las necesidades de tu empresa, emprendimiento o marca personal. Diseños modernos y optimizados para captar la atención y generar compras de tu audiencia.",
    include: [
      "Diseño exclusivo para tu marca",
      "Optimización para dispositivos móviles",
      "SEO básico para mayor visibilidad",
    ],
    principal: false,
  },
];

interface NavbarProps {
  callToActionRef: RefObject<HTMLDivElement>;
}

export const ProductShowcase: React.FC<NavbarProps> = ({ callToActionRef }) => {
  const scrollToCallToAction = () => {
    if (callToActionRef.current) {
      callToActionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#023E8A] py-[72px] sm:py-24">
      <div className="container flex flex-col items-center">
        <h2 className="text-center text-5xl sm:text-6xl font-bold tracking-tighter">
          Servicios
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center text-xl text-white/70 mt-5">
            En MartIA, ofrecemos herramientas digitales diseñadas para potenciar
            tu negocio. Desde un chatbot inteligente hasta una página web
            personalizada, te ayudamos a destacar.
          </p>
        </div>

        {/* Sección para las tarjetas de servicios */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl place-content-center">
          {products.map((product, i) => (
            <div
              key={i}
              className={
                product.principal
                  ? `bg-black text-white p-8 rounded-lg shadow-lg transition transform hover:scale-105`
                  : "bg-white text-black p-8 rounded-lg shadow-lg transition transform hover:scale-105"
              }
            >
              <h3 className="text-3xl font-semibold mb-4">{product.title}</h3>
              <p className="text-sm mb-6">{product.description}</p>
              <button
                className="bg-[#023E8A] w-full text-white py-2 px-4 rounded-lg mb-4 hover:bg-blue-500 transition"
                onClick={scrollToCallToAction}
              >
                ¡Quiero saber más!
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
