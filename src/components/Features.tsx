import { Feature } from "./Feature";

const features = [
  {
    title: "Desarrollo Web a tu Medida",
    description:
      "Diseñamos y desarrollamos sitios web que se ajustan a las metas de tu negocio, combinando estética moderna y alto rendimiento.",
  },
  {
    title: "Chatbots de WhatsApp con IA",
    description:
      "Creamos chatbots inteligentes que optimizan la atención al cliente y automatizan tareas clave, ayudándote a estar disponible 24/7.",
  },
  {
    title: "Máxima Seguridad",
    description:
      "Implementamos las mejores prácticas de seguridad para garantizar que toda la información de tu negocio esté protegida y segura.",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24">
      <div className="container">
        <h2 className="text-center font-bold text-5xl sm:text-6xl tracking-tighter">
          Soluciones Integrales
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-center mt-5 text-xl text-white/70">
            En MartIA ofrecemos servicios que impulsan el crecimiento de tu
            negocio con tecnología avanzada, enfocada en resultados. Descubre
            cómo nuestras soluciones pueden transformar tu empresa.
          </p>
        </div>
        <div className="mt-16 flex flex-col gap-4 sm:flex-row">
          {features.map(({ title, description }) => (
            <Feature title={title} description={description} key={title} />
          ))}
        </div>
      </div>
    </div>
  );
};
