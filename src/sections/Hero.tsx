'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
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
            <Link href="/form">
              <button
                className="bg-orange-500 text-white py-2 px-4 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-blue-900 hover:text-white transition-colors shadow-lg shadow-slate-600"
              >
                Registrarme
              </button>
            </Link>
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
