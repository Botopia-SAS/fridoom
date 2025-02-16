'use client';

import { useState } from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import CloseIcon from "@/assets/close.svg";
import Link from "next/link";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 w-full z-20 bg-transparent ">
      {/* Mensaje superior */}
      <div className="flex justify-center items-center py-2 text-[#152241] text-sm gap-3 px-4">
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
      <div className="py-4 px-4 md:px-10">
        <div className="container mx-auto w-full bg-white/30 backdrop-blur-md shadow-lg shadow-gray-600 rounded-full flex items-center justify-between p-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/fridoom.svg"
              alt="Fridoom Logo"
              width={100}
              height={100}
              className="rounded-lg cursor-pointer"
            />
          </Link>
          {/* Menú Hamburguesa (Mobile) */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>

          {/* Menú en pantallas grandes */}
          <nav className="hidden md:flex items-center gap-12 text-lg">
            <a href="#" className="hover:text-blue-900 transition">Nosotros</a>
            <a href="#" className="hover:text-blue-900 transition">Productos</a>
            <a href="#" className="hover:text-blue-900 transition">Blog</a>
            <a href="#" className="hover:text-blue-900 transition">Contacto</a>
            <Link href="/form">
              <button
                className="bg-orange-500 text-white py-2 px-4 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-blue-900 hover:text-white transition-colors shadow-lg shadow-slate-600"
              >
                Unirme
              </button>
            </Link>
          </nav>
        </div>
      </div>

      {/* Menú desplegable en Mobile */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg rounded-lg z-10 flex flex-col items-center py-6 gap-4">
          <a href="#" className="text-lg" onClick={() => setIsMenuOpen(false)}>Nosotros</a>
          <a href="#" className="text-lg" onClick={() => setIsMenuOpen(false)}>Productos</a>
          <a href="#" className="text-lg" onClick={() => setIsMenuOpen(false)}>Blog</a>
          <a href="#" className="text-lg" onClick={() => setIsMenuOpen(false)}>Contacto</a>
          <Link href="/form">
            <button
              className="bg-orange-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-900 hover:text-white transition-colors shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Unirme
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};
