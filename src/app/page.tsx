import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Pricing } from "@/sections/Pricing";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <>
      {/* Video Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <img
          src="/3d.svg"
          alt="fondo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenido */}
      <div className="relative">
        <Hero />
      </div>
      <LogoTicker />
      <ProductShowcase />
      <Pricing />
      <CallToAction />
    </>
  );
}
