"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, User, ChevronRight } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Enlaces de navegación para evitar repetir código
  const navLinks = [
    { name: "Cursos", href: "/cursos" },
    { name: "Talleres", href: "/talleres" },
    { name: "Pasantías", href: "/pasantias" },
    { name: "Nosotros", href: "/nosotros" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-[100] px-4 md:px-6 py-4"
    >
      <div className="max-w-7xl mx-auto bg-white/70 backdrop-blur-xl border border-white/40 rounded-full px-6 md:px-8 py-3 flex justify-between items-center shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] relative">
        {/* --- LOGO --- */}
        <Link href="/" className="flex items-center gap-2 group z-50">
          {/* LOGO NUEVO: Imagen con filtro para que sea visible en fondo claro */}
          <img
            src="https://www.articagroup.us/img/logo-artica-blanco.png"
            alt="Artica Group Logo"
            className="h-9 w-auto object-contain brightness-0 transition-all group-hover:scale-110"
          />

          {/* ANTIGUO LOGO (Comentado)
          <div className="w-9 h-9 bg-[#5A4FCF] rounded-xl flex items-center justify-center text-white font-bold transition-all group-hover:rotate-[10deg] group-hover:scale-110 shadow-lg shadow-indigo-200">
            A
          </div> 
          */}

          {/* <div className="flex flex-col leading-none">
            <span className="font-black text-[#1A1A2E] tracking-tighter text-lg hidden sm:block">
              Artica Group Academy
            </span>
            <span className="font-black text-[#1A1A2E] tracking-tighter text-lg sm:hidden">
              AMA
            </span>
          </div> */}
        </Link>

        {/* --- LINKS ESCRITORIO --- */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-gray-500 hover:text-[#5A4FCF] transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#5A4FCF] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* --- BOTONES DE ACCIÓN --- */}
        <div className="flex items-center gap-3 z-50">
          <Link href="/auth/signup" className="hidden sm:block">
            <button className="bg-[#1A1A2E] text-white px-7 py-2.5 rounded-full text-xs font-bold hover:bg-black hover:scale-105 transition-all shadow-lg shadow-indigo-100 flex items-center gap-2">
              <User size={14} /> Únete ahora
            </button>
          </Link>

          {/* Botón Menú Móvil */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2.5 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* --- MENÚ DESPLEGABLE MÓVIL --- */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-[calc(100%+12px)] left-0 right-0 bg-white rounded-[2.5rem] p-8 shadow-2xl border border-gray-100 md:hidden flex flex-col gap-4 overflow-hidden"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 text-xl font-bold text-[#1A1A2E] group transition-colors"
                  >
                    {link.name}
                    <ChevronRight
                      size={20}
                      className="text-gray-300 group-hover:text-[#5A4FCF] transition-colors"
                    />
                  </Link>
                ))}
              </div>

              <div className="h-px bg-gray-100 my-2" />

              <Link href="/auth/signup" onClick={() => setIsOpen(false)}>
                <button className="w-full bg-[#1A1A2E] text-white py-5 rounded-2xl font-bold flex items-center justify-center gap-2 text-base shadow-xl shadow-indigo-50">
                  <User size={18} /> Empezar Registro
                </button>
              </Link>

              <Link
                href="/auth/login"
                onClick={() => setIsOpen(false)}
                className="text-center py-2"
              >
                <span className="text-sm font-bold text-gray-400">
                  ¿Ya tienes cuenta?{" "}
                </span>
                <span className="text-sm font-bold text-[#5A4FCF]">
                  Inicia Sesión
                </span>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
