'use client';

import { motion } from 'framer-motion';

export default function Terms() {
  return (
    <section className="min-h-screen px-4 md:px-6 py-12 bg-transparent text-[#152241]">
      <div className="max-w-5xl mx-auto">
        {/* ---------- TÍTULO PRINCIPAL ---------- */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center"
        >
          Términos y Condiciones de Uso de <span className="text-blue-600">fridoom</span>
        </motion.h1>

        {/* ---------- CONTENIDO ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8 text-md sm:text-lg leading-relaxed"
        >
          {/* FECHA */}
          <div className="text-center italic">
            Última actualización: 8 de junio de 2025
          </div>

          {/* SECCIÓN 1 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Aceptación</h2>
            <p className="text-justify">
              Al crear una cuenta o utilizar la aplicación móvil, el bot de WhatsApp o cualquiera de los servicios de <strong>FRIDOOM S.A.S.</strong> (en adelante, "<strong>fridoom</strong>", "nosotros"), usted (el "<strong>Usuario</strong>") acepta íntegra y expresamente estos Términos y Condiciones de Uso (los "<strong>Términos</strong>"). Si no está de acuerdo, debe abstenerse de acceder o utilizar los Servicios.
            </p>
          </section>

          {/* SECCIÓN 2 */}
          <section>
            <h2 className="text-2xl font-bold mb-4">2. Identificación del Responsable</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Razón social:</strong> FRIDOOM S.A.S.</li>
              <li><strong>NIT:</strong> 901 938 156-5</li>
              <li><strong>Domicilio:</strong> Calle 159 No. 17-38, Bogotá D.C., Colombia</li>
              <li><strong>Correo de contacto:</strong> <a href="mailto:hablemos@fridoom.com" className="text-blue-600">hablemos@fridoom.com</a></li>
              <li><strong>Teléfono:</strong> (+57) 322 816 0021</li>
            </ul>
          </section>

          {/* Add remaining sections following the same pattern */}
          
          {/* DESPEDIDA */}
          <div className="text-center mt-8 italic">
            Al utilizar fridoom, el Usuario declara haber leído, entendido y aceptado estos Términos y la Política de Privacidad correspondiente.
          </div>
        </motion.div>
      </div>
    </section>
  );
}