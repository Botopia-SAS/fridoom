'use client';

import productImage from "../assets/fridoom-web.jpg";
import cashImage from "../assets/cash.png";
import transaction from "../assets/transaction.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading }">
          <div className="flex justify-center">
            <div className="tag">Todo el control de tu vida financiera</div>
          </div>
          <h2 className="section-title mt-5">
            Desde cuentas bancarias hasta inversiones
          </h2>
          <p className="section-description mt-5">
            Centraliza, organiza y monitorea tu dinero. Invierte, comparte y aprende de los mejores
          </p>
        </div>
        <div className="relative">
          <Image
            src={productImage}
            alt="product image"
            className="mt-10" />
          <motion.img
            src={cashImage.src}
            alt="cash image"
            width={210}
            height={210}
            className="hidden md:block absolute -top-32 -right-36"
            style={{
               translateY, 
              }}
            />
            
          <motion.img
            src={transaction.src}
            alt="transaction image"
            width={250}
            height={250}
            className="hidden md:block absolute -bottom-32 -left-36"
            style={{
              translateX: translateY,
               rotate: translateY,
               translateY, 
              }}
            />
        </div>
      </div>
    </section>
  );
};
