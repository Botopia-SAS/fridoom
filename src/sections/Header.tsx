import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/fridoom.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm bg-transparent z-20">
      <div className="flex justify-center items-center py-3 text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Organiza tus finanzas y crea riqueza
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>
            Empieza gratis
            <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
          </p>
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image
              src={Logo}
              alt="FreedOM Logo"
              width={120}
              height={120}
              className="rounded-lg"
            />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 items-center">
              <a href="#" className="text-white">Nosotros</a>
              <a href="#" className="text-white">Opciones</a>
              <a href="#" className="text-white">Aliados</a>
              <a href="#" className="text-white">Noticias</a>
              <a href="#" className="text-white">Ayuda</a>
              <button className="bg-black text-white py-2 px-4 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
                Obtenerlo gratis
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};