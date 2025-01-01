'use client';
import React from 'react';
import ArrowRight from '@/assets/arrow-right.svg';
import cards from '@/assets/cards.png';
import brain from '@/assets/brain.png';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const CallToAction = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className='section-heading relative'>
          <h2 className="section-title">
            Inicia gratis hoy
          </h2>
          <p className="section-description mt-5">
            Vúelvete un experto en el manejo de tus finanzas personales
          </p>
          <motion.img 
            src={cards.src}
            alt="cards"
            width={260}
            className="absolute -left-[350px] -top-[137px]"
            style={{
              translateY
            }}
          />
          <motion.img
            src={brain.src}
            alt="brain"
            width={260}
            className="absolute -right-[331px] -top-[19px]"
            style={{
              translateY
            }}
          />
        </div>
        <div className='flex gap-2 mt-10 justify-center'>
          <button className="btn btn-primary">
            Regístrate
          </button>
          <button className="btn btn-text gap-1">
            <span>
              Aprende más
            </span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
