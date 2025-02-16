'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    city: "",
    whatsapp: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(formData).some((field) => field.trim() === "")) return;
    setSubmitted(true);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      {/* Contenedor del formulario */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-lg bg-white shadow-xl rounded-3xl p-8 -mt-36 text-center border border-gray-200"
      >
        {/* Título */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#152241]">
          {submitted ? "¡Gracias por registrarte!" : "¡Holaa!"}
        </h2>

        {/* Formulario */}
        {!submitted ? (
          <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>
            {/* Nombre */}
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.name}
              onChange={handleChange}
              required
            />

            {/* Correo */}
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
              required
            />

            {/* País */}
            <input
              type="text"
              name="country"
              placeholder="País"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.country}
              onChange={handleChange}
              required
            />

            {/* Ciudad */}
            <input
              type="text"
              name="city"
              placeholder="Ciudad"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.city}
              onChange={handleChange}
              required
            />

            {/* WhatsApp */}
            <input
              type="tel"
              name="whatsapp"
              placeholder="Número de WhatsApp"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.whatsapp}
              onChange={handleChange}
              required
            />

            {/* Botón de enviar */}
            <button
              type="submit"
              className="w-full px-6 py-3 font-redhat bg-orange-500 text-white rounded-lg font-medium hover:bg-blue-900 hover:text-white transition-colors shadow-lg"
            >
              Registrarme
            </button>
          </form>
        ) : (
          <p className="text-lg text-[#152241] mt-4">
            Recibirás más información en tu correo 📩
          </p>
        )}

        {/* Botón para volver */}
        <div className="mt-6">
          <Link href="/">
            <button className="text-blue-900 underline text-lg hover:text-blue-700 transition">
              Volver al inicio
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
