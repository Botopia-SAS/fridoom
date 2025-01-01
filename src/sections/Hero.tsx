'use client';

import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/app-iphone.png";
import coin from "@/assets/moneda.png";
import noodleImage from "@/assets/pig.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section

      ref={heroRef}
      className="relative pt-8 pb-20 overflow-hidden"
    >

      {/* Gradiente hacia blanco */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <h1 className=" text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6">
              Organiza tus finanzas
            </h1>
            <p className="text-lg text-white tracking-tight mt-6">
              Accede a herramientas de gestión financiera y control de gastos.
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <button className="btn btn-primary">
                Obtenlo gratis
              </button>
              <button className="btn btn-text">
                <span>
                  Aprende más
                </span>
                <ArrowIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative lg:ml-20">
            <motion.img
              src={cogImage.src}
              alt="cog"
              width={505}
              height={505}
              className="md:absolute h-full md:w-auto md:max-w-none md:-left-6"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
            <motion.img
              src={coin.src}
              alt="coin"
              width={115}
              height={135}
              className="hidden md:block -top- -left-32 md:absolute"
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={noodleImage.src}
              alt="pig image"
              width={220}
              height={135}
              className="hidden lg:block absolute top-[494px] left-[290px] rotate-[30deg]"
              style={{
                translateX: translateY,
                rotate: useTransform(translateY, (value) => value + 30),
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
