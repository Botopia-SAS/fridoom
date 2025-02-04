'use client';

import { useState } from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/fridoom.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import CloseIcon from "@/assets/close.svg"; // Ícono de cerrar menú

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 backdrop-blur-sm bg-transparent z-20">
      {/* Mensaje superior */}
      <div className="flex justify-center items-center py-2 text-[#152241] text-sm gap-3">
        <p className="text-[#152241] hidden md:block">
          Organiza tus finanzas y crea riqueza
        </p>
        <div className="inline-flex gap-1 items-center font-bold">
          <p>
            Empieza gratis
            <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
          </p>
        </div>
      </div>

      {/* Barra de navegación */}
      <div className="py-5">
        <div className="container w-full backdrop-blur-md bg-white/30 shadow-lg shadow-gray-600 rounded-full z-20">
          <div className="flex items-center justify-between p-5 md:px-0">
            {/* Logo */}
            <Image
              src={Logo}
              alt="Fridoom Logo"
              width={150}
              height={150}
              className="rounded-lg"
            />

            {/* Menú Hamburguesa (Mobile) */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>

            {/* Menú en pantallas grandes */}
            <nav className="hidden md:flex gap-24 items-center text-lg">
              <a href="#">Nosotros</a>
              <a href="#">Productos</a>
              <a href="#">Blog</a>
              <a href="#">Contacto</a>
              <button className="bg-orange-500 text-white py-2 px-4 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-blue-900 hover:text-white transition-colors shadow-lg shadow-slate-600">
                Descargar App
              </button>
            </nav>
          </div>

          {/* Menú desplegable en Mobile */}
          {isMenuOpen && (
            <div className="md:hidden flex flex-col items-center gap-4 py-6 bg-white rounded-lg shadow-lg absolute top-16 left-0 w-full z-10">
              <a href="#" className="text-lg" onClick={() => setIsMenuOpen(false)}>Nosotros</a>
              <a href="#" className="text-lg" onClick={() => setIsMenuOpen(false)}>Productos</a>
              <a href="#" className="text-lg" onClick={() => setIsMenuOpen(false)}>Blog</a>
              <a href="#" className="text-lg" onClick={() => setIsMenuOpen(false)}>Contacto</a>
              <button
                className="bg-orange-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-900 hover:text-white transition-colors shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Descargar App
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
