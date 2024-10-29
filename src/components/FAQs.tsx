"use client";
import { useState } from "react";
import PlusIcon from "../assets/icons/plus.svg";
import MinusIcon from "../assets/icons/minus.svg"; // Asegúrate de tener un icono para cerrar o cambia el estilo

const items = [
  {
    question: "¿Cuánto tiempo toma desarrollar una página web o un chatbot?",
    answer:
      "El tiempo de desarrollo varía según la complejidad del proyecto. Por lo general, una página web simple puede completarse en 1 a 2 semanas, mientras que un chatbot personalizado puede estar listo en 2 a 4 semanas. Nos aseguramos de que cada proyecto reciba atención personalizada para cumplir con tus expectativas y fechas de entrega.",
  },
  {
    question: "¿Ofrecen soporte y mantenimiento después del lanzamiento?",
    answer:
      "Sí, en MartIA ofrecemos soporte y mantenimiento continuo para todos nuestros servicios. Esto incluye actualizaciones, mejoras y resolución de cualquier problema que pueda surgir, asegurando que tu web y chatbot siempre estén funcionando de manera óptima.",
  },
  {
    question: "¿Qué beneficios tiene un chatbot con IA para mi negocio?",
    answer:
      "Un chatbot con IA permite que tus clientes obtengan respuestas rápidas y precisas a sus consultas en cualquier momento del día. Esto mejora la experiencia del usuario y ahorra tiempo a tu equipo, aumentando la eficiencia. Nuestros chatbots también pueden integrarse con bases de datos y sistemas internos, haciendo que cada interacción sea personalizada y relevante para tus usuarios.",
  },
  {
    question: "¿Qué beneficios tiene para mi negocio una página web?",
    answer:
      "Tener una página web profesional ayuda a que tu negocio gane visibilidad y credibilidad en el mercado digital. Es una forma de llegar a más clientes potenciales, mostrar tus productos o servicios de manera atractiva y permitir que los usuarios te encuentren fácilmente en cualquier momento. Además, una web optimizada te permite captar clientes y generar ventas las 24 horas, mejorando así la experiencia de tus usuarios y aumentando tus oportunidades de crecimiento.",
  },
];

export const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white bg-gradient-to-b from-[#023E8A] to-black py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl sm:text-6xl sm:max-w-[648px] mx-auto font-bold tracking-tighter">
          Preguntas Frecuentes
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }, i) => (
            <div key={i} className="py-7 border-b border-white/30">
              <div
                className="flex items-center cursor-pointer"
                onClick={() => toggleAnswer(i)}
              >
                <span className="flex-1 text-lg font-bold">{question}</span>
                {openIndex === i ? <MinusIcon /> : <PlusIcon />}
              </div>
              <div
                className={`mt-4 text-white/80 ${
                  openIndex === i ? "block" : "hidden"
                }`}
              >
                {answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
