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
    <footer className="bg-transparent text-sm py-10 text-center">
      <div className="container">
        <nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">
          <a href="">Nosotros</a>
          <a href="/privacy">Privacidad</a>
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

