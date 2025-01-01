import Logo from "@/assets/logo-freedom.png";
import inf from "@/assets/inf.png";
import Image from 'next/image';
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedin from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before-bottom-0 before:h-full before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image
            src={inf}
            alt="Logo"
            height={30}
            className="relsative"
          />
        </div>
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="">Nosotros</a>
          <a href="">Opciones</a>
          <a href="">Clientes</a>
          <a href="">Precios</a>
          <a href="">Ayuda</a>
          <a href="">Newsletter</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedin />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">&copy; 2025 fridoom S.A. Todos los derechos reservados</p>
      </div>
    </footer>
  )
};

