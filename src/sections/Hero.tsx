'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      ref={heroRef}
      className="relative md:h-screen pb-10 overflow-hidden flex items-center"
    >
      <div className="container mx-auto px-2 lg:px-10 relative z-10">
        {/* Contenedor limitado */}
        <div className="md:max-w-2xl text-center md:text-left">
          {/* Título */}
          <motion.h2
            style={{ y: translateY }}
            className="py-20 md:py-0 text-3xl sm:text-4xl md:text-5xl font-branley font-bold bg-[#152241] text-transparent bg-clip-text mt-4 sm:mt-8 leading-tight"
          >
            Con fridoom organiza tus finanzas personales en un solo lugar
          </motion.h2>

          {/* Formulario */}
          <div className="py-10 md:py-0flex flex-col sm:flex-row sm:flex-wrap gap-4 items-center sm:items-start justify-center md:justify-start mt-6">
            <input
              type="email"
              placeholder="Ingresa tu correo"
              className="w-full sm:w-auto mb-6 px-4 py-2 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full sm:w-auto px-6 py-2 font-redhat bg-orange-500 text-white rounded-lg font-medium hover:bg-blue-900 hover:text-white transition-colors">
              Unirse al lanzamiento
            </button>
          </div>

          {/* Descripción */}
          <p className="text-sm text-[#152241] mt-4 text-center md:text-left px-2 sm:px-0">
            Al dar click en “Unirse al lanzamiento” confirmas y aceptas que has leído nuestros{" "}
            <a href="#" className="text-blue-900 underline">
              Términos y Condiciones
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};
