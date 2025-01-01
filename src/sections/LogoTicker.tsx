'use client';
import acorns from "@/assets/Portfolio/acorn.png";
import americanExpress from "@/assets/Portfolio/amex.png";
import BancoDeBogota from "@/assets/Portfolio/nequi.png";
import BancoSantander from "@/assets/Portfolio/santander.png";
import bancolombia from "@/assets/Portfolio/bancolombia.png";
import trii from "@/assets/Portfolio/trii.png";
import hapi from "@/assets/Portfolio/hapi.png";
import robinhood from "@/assets/Portfolio/robinhood.png";
import bbva from "@/assets/Portfolio/bbva.png";
import nu from "@/assets/Portfolio/nu.png";
import { motion } from "framer-motion";

import Image from "next/image";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
            >
            <Image src={acorns} alt="acorns" className="logo-ticker-image" />
            <Image src={BancoDeBogota} alt="BancoDeBogota" className="logo-ticker-image" />
            <Image src={trii} alt="trii" className="logo-ticker-image" />
            <Image src={BancoSantander} alt="BancoSantander" className="logo-ticker-image" />
            <Image src={hapi} alt="hapi" className="logo-ticker-image" />
            <Image src={bancolombia} alt="bancolombia" className="logo-ticker-image" />
            <Image src={americanExpress} alt="americanExpress" className="logo-ticker-image" />
            <Image src={robinhood} alt="robinhood" className="logo-ticker-image" />
            <Image src={bbva} alt="bbva" className="logo-ticker-image" />
            <Image src={nu} alt="nu" className="logo-ticker-image" />

            <Image src={acorns} alt="acorns" className="logo-ticker-image" />
            <Image src={BancoDeBogota} alt="BancoDeBogota" className="logo-ticker-image" />
            <Image src={trii} alt="trii" className="logo-ticker-image" />
            <Image src={BancoSantander} alt="BancoSantander" className="logo-ticker-image" />
            <Image src={hapi} alt="hapi" className="logo-ticker-image" />
            <Image src={bancolombia} alt="bancolombia" className="logo-ticker-image" />
            <Image src={americanExpress} alt="americanExpress" className="logo-ticker-image" />
            <Image src={robinhood} alt="robinhood" className="logo-ticker-image" />
            <Image src={bbva} alt="bbva" className="logo-ticker-image" />
            <Image src={nu} alt="nu" className="logo-ticker-image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
