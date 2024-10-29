"use client";
import { useState } from "react";

export const CallToAction = () => {
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita la recarga de la página
    if (!email) {
      setStatus("Por favor, ingresa un correo electrónico.");
      return;
    }

    const values = [[email]]; // Usa el email ingresado

    try {
      const response = await fetch("/api/writeToSheet", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ values }),
      });
      const result = await response.json();
      if (result.success) {
        setStatus("Nos llegaron tus datos! En breve te contactamos.");
        setEmail(""); // Limpia el input después de enviar
      } else {
        setStatus("Error al guardar datos");
      }
    } catch (error) {
      console.error("Error al escribir en la hoja:", error);
      setStatus("Error al guardar datos");
    }
  };

  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center">
      <div className="container max-w-5xl">
        <h2 className="font-bold text-5xl tracking-tighter sm:text-6xl">
          Impulsa tu negocio hoy
        </h2>
        <p className="text-xl text-white/70 mt-5">
          Descubre cómo MartIA puede transformar tu negocio con soluciones de
          desarrollo web y chatbots personalizados. Contáctanos y comienza a
          hacer crecer tu presencia digital.
        </p>

        <form
          className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="tu@email.com"
            className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-white text-black h-12 rounded-lg px-5"
          >
            Acceder
          </button>
        </form>
        {status && <p className="mt-4 text-lg text-white/70">{status}</p>}
      </div>
    </div>
  );
};
