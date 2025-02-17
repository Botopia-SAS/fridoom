'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="min-h-screen px-4 md:px-6 py-12 bg-transparent text-[#152241]">
      <div className="max-w-5xl mx-auto text-center">
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
        >
          NOSOTROS
        </motion.h1>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-md sm:text-lg leading-relaxed max-w-3xl mx-auto text-justify px-4"
        >
          fridoom es una startup colombiana que está reinventando la manera de organizar tus finanzas personales.
          Simplificamos y automatizamos la manera en la que registras tus ingresos y egresos, como creas y gestionas tu presupuesto solo y en pareja, y cómo monitoreas tus inversiones.
        </motion.p>
      </div>

      {/* Sección de Fundadores */}
      <div className="max-w-5xl mx-auto mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">NUESTROS FUNDADORES</h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
          {/* Fundador 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center flex flex-col items-center"
          >
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/david.png"
                alt="David Espejo"
                width={180}
                height={180}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mt-4">David Espejo</h3>
            <p className="text-gray-600 text-sm sm:text-md">CTO - Co Fundador</p>
          </motion.div>

          {/* Fundadora 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center flex flex-col items-center"
          >
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/paola.jpeg"
                alt="Paola Lenis"
                width={180}
                height={180}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mt-4">Paola Lenis</h3>
            <p className="text-gray-600 text-sm sm:text-md">CEO - Co Fundadora</p>
          </motion.div>
        </div>
      </div>

      {/* Sección de Misión */}
      <div className="max-w-5xl mx-auto mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">Misión</h2>
        <p className="text-md sm:text-lg leading-relaxed max-w-3xl mx-auto mt-4 text-justify px-4">
          <span className="font-bold">Dinero Sin Drama, Finanzas Sin Complicaciones</span>
          <br />En fridoom, nuestra misión es simple: hacer que manejar la plata deje de ser un problema y se convierta en algo fácil, claro y hasta divertido.
          Sabemos que el dinero puede ser un dolor de cabeza—números que no cuadran, cuentas compartidas que nadie paga, gastos que se escapan sin darte cuenta.  
          Por eso, creamos una plataforma que pone el control en tus manos, sin burocracia, sin tecnicismos innecesarios, sin estrés.
        </p>
      </div>

      {/* Sección de Visión */}
      <div className="max-w-5xl mx-auto mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">Visión</h2>
        <p className="text-md sm:text-lg leading-relaxed max-w-3xl mx-auto mt-4 text-justify px-4">
          <span className="font-bold">El Dinero en Tus Manos, Sin Complicaciones</span>
          <br />En fridoom soñamos con un mundo donde manejar la plata sea tan fácil como mandar un mensaje.  
          Creemos que la libertad financiera no es solo para unos pocos, sino para todos los que quieran tomar el control de su dinero sin estrés, sin números complicados y sin burocracia innecesaria.  
          Queremos convertirnos en la plataforma más intuitiva, accesible y poderosa para gestionar tus finanzas diarias.
        </p>
      </div>
    </section>
  );
}
