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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || "Error al enviar el formulario");
      }
    } catch (error) {
      console.error("Error al enviar datos:", error);
      setError("Hubo un error al conectar con el servidor");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-transparent">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-lg bg-white shadow-2xl rounded-3xl p-10 text-center border border-gray-300"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[#152241]">
          {submitted ? "¡Gracias por registrarte!" : "Únete a nuestra comunidad"}
        </h2>

        {!submitted ? (
          <form className="mt-6 flex flex-col gap-5" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Nombre completo" className="input-field" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Correo electrónico" className="input-field" onChange={handleChange} required />
            <input type="text" name="country" placeholder="País" className="input-field" onChange={handleChange} required />
            <input type="text" name="city" placeholder="Ciudad" className="input-field" onChange={handleChange} required />
            <input type="tel" name="whatsapp" placeholder="Número de WhatsApp" className="input-field" onChange={handleChange} required />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <motion.button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-blue-900 transition-all transform hover:scale-105"
              whileTap={{ scale: 0.95 }}
            >
              {loading ? "Enviando..." : "Registrarme"}
            </motion.button>
          </form>
        ) : (
          <p className="text-lg text-[#152241] mt-6">
            🎉 ¡Registro exitoso! Te hemos enviado un correo de confirmación. No olvides revisar tu carpeta de spam.
          </p>
        )}

        <div className="mt-6">
          <Link href="/">
            <button className="text-blue-900 underline text-lg hover:text-blue-700 transition">
              Volver al inicio
            </button>
          </Link>
        </div>
      </motion.div>

      <style jsx>{`
        .input-field {
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #d1d5db;
          font-size: 16px;
          color: #333;
          outline: none;
          transition: all 0.3s;
        }
        .input-field:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 8px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </section>
  );
}
