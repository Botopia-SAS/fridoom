'use client';

import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Gratis",
    monthlyPrice: 0,
    buttonText: "Empezar gratis",
    popular: false,
    inverse: false,
    features: [
      "Hasta 3 productos registrados",
      "Plantilla base otorgada por fridoom",
      "Acceso a información de punta en tiempo real",
      "Perfil de usuario observador",
      "Soporte básico",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9.995,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Registro de productos ilimitados",
      "Plantillas personalizadas",
      "Acceso a información de punta en tiempo real",
      "Perfil de usuario para compartir en nuestra red social",
      "Soporte avanzado",
      "Reportes y analíticas detalladas",
      "Perfil de usuario observador",
      "Perfil de usuario transaccional",
      "Programación de pagos y transacciones",
      "Bolsillos de gestión",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-transparent">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title font-branley">Precios</h2>
          <p className="section-description mt-5">
            Sé libre sin costo. Mejóralo con herramientas ilimitadas y exclusivas.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features
            }) => (
              <div
                key={title}
                className={twMerge(
                  "card",
                  inverse === true && ' bg-transparent backdrop-blur-md text-[#152241]')}>
                <div className="flex justify-between">
                  <h3 className={twMerge(
                    "text-lg font-bold text-black/50",
                    inverse === true && 'text-white/60'
                  )}
                  >
                    {title}
                  </h3>
                  {popular === true && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20 bg-white/30 backdrop-blur-sm">
                      <motion.span
                        animate={{
                          backgroundPositionX: "100%"
                        }}
                        transition={{
                          repeat: Infinity,
                          ease: "linear",
                          duration: 5,
                          repeatType: "loop"
                        }}
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent bg-clip-text font-medium">
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    {monthlyPrice}
                  </span>
                  <span className="tracking-tighter font-bold text-black/50">
                    /mes
                  </span>
                </div>
                <button className={twMerge("btn btn-primary w-full mt-[30px]", inverse === true && 'bg-white text-black')}>
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature, index) => (
                    <li key={index} className="text-sm flex items-center gap-4">
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  );
};
