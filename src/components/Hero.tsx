export const Hero = ({ callToActionRef }) => {
  const scrollToCallToAction = () => {
    if (callToActionRef.current) {
      callToActionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000000,#023E8A_34%,#0077B6_65%,#00B4D8_82%)] py-[72px] sm:py-24 relative overflow-clip">
      <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#023E8A] bg-[radial-gradient(closest-side,#000_82%,#023E8A)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>
      <div className="container relative">
        <div className="flex justify-center">
          <h1 className="text-7xl sm:text-9xl font-bold tracking-tighter text-center mt-8 inline-flex ">
            Potenciamos tu <br /> Negocio
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="text-center text-xl mt-8 max-w-md">
            En MartIA, creamos páginas web innovadoras y personalizadas para tu
            negocio, ayudándote a destacar en el mercado y conectar mejor con
            tus clientes.
          </p>
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="bg-white text-black py-3 px-5 rounded-lg font-medium"
            onClick={scrollToCallToAction}
          >
            Trabaja con Nosotros
          </button>
        </div>
      </div>
    </div>
  );
};
