import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fridoom",
  description: "Fintech enfocada en la gestión de finanzas personales y generación de riqueza a partir de la educación financiera.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="relative">
      <body className={clsx(dmSans.className, "antialiased bg-gradient-to-b from-[#8AC9E8] to-white")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
