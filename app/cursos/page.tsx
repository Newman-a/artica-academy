"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Filter,
  Monitor,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link"; // Importante para la navegación
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Mock de datos con IDs únicos para las rutas dinámicas
const CATEGORIES = ["Todos", "Producción", "Marketing", "Desarrollo", "Diseño"];

const COURSES = [
  {
    id: "edicion-video-pro",
    title: "Edición de Video High-Impact",
    instructor: "Rodrigo Timaure",
    price: 45,
    type: "Online",
    category: "Producción",
    image:
      "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800",
  },
  {
    id: "digital-trafficker",
    title: "Estrategias de Digital Trafficker",
    instructor: "Newman Acosta",
    price: 60,
    type: "Híbrido",
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
  },
  {
    id: "fotografia-producto",
    title: "Fotografía de Producto (Presencial)",
    instructor: "Michelle Guerra",
    price: 35,
    type: "Presencial",
    category: "Diseño",
    image:
      "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800",
  },
  {
    id: "nextjs-mastery",
    title: "Next.js 15 & Prisma Mastery",
    instructor: "Cesar Arteaga",
    price: 55,
    type: "Online",
    category: "Desarrollo",
    image:
      "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=800",
  },
];

export default function CursosPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = COURSES.filter((course) => {
    const matchesCategory =
      activeCategory === "Todos" || course.category === activeCategory;
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-[#F4F4F7] pt-32 pb-20">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6">
        {/* --- HEADER DEL MÓDULO --- */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-[#5A4FCF] font-bold text-sm uppercase tracking-widest mb-4"
          >
            <Sparkles size={16} /> Catálogo de Formación
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#1A1A2E] tracking-tighter mb-6">
            Lleva tu talento al <br />{" "}
            <span className="text-gray-400">siguiente nivel.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            Formación técnica de alto nivel respaldada por 4101 Media y Artica
            Group.
          </p>
        </div>

        {/* --- CONTROLES: BÚSQUEDA Y FILTROS --- */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
          <div className="relative w-full md:w-96">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Buscar por nombre..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-gray-100 rounded-2xl py-4 pl-12 pr-4 shadow-sm focus:ring-2 focus:ring-[#5A4FCF] outline-none transition-all font-medium"
            />
          </div>

          <div className="flex gap-4 items-center w-full md:w-auto overflow-hidden">
            {/* Icono Filter usado para evitar error de unused-vars */}
            <div className="bg-white p-4 rounded-2xl border border-gray-100 text-gray-400 shadow-sm hidden sm:block">
              <Filter size={20} />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
                    activeCategory === cat
                      ? "bg-[#1A1A2E] text-white shadow-lg shadow-indigo-100"
                      : "bg-white text-gray-500 hover:bg-gray-50 border border-gray-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* --- GRID DE CURSOS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((curso) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={curso.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.02)] border border-gray-100 flex flex-col h-full group"
              >
                {/* Imagen Optimizada */}
                <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
                  <Image
                    src={curso.image}
                    alt={curso.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-5 left-5">
                    <span
                      className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md shadow-sm flex items-center gap-1.5 ${
                        curso.type === "Online"
                          ? "bg-blue-500/20 text-blue-700"
                          : "bg-orange-500/20 text-orange-700"
                      }`}
                    >
                      {curso.type === "Online" ? (
                        <Monitor size={12} />
                      ) : (
                        <MapPin size={12} />
                      )}
                      {curso.type}
                    </span>
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-[#5A4FCF] text-[10px] font-black uppercase tracking-[0.2em] mb-3 block">
                    {curso.category}
                  </span>
                  <h3 className="text-2xl font-bold text-[#1A1A2E] mb-2 leading-tight">
                    {curso.title}
                  </h3>
                  <p className="text-gray-400 text-sm font-medium mb-8">
                    Dictado por {curso.instructor}
                  </p>

                  <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    <div>
                      <span className="text-3xl font-black text-[#1A1A2E]">
                        ${curso.price}
                      </span>
                      <p className="text-[9px] text-gray-400 font-bold uppercase tracking-tighter mt-1 italic">
                        Zelle • USDT • Bolívares
                      </p>
                    </div>

                    {/* ENLACE DINÁMICO: Al hacer clic aquí te lleva a la página de detalle */}
                    <Link href={`/cursos/${curso.id}`}>
                      <button className="bg-[#1A1A2E] text-white p-4 rounded-2xl hover:bg-[#5A4FCF] hover:scale-110 transition-all shadow-lg shadow-indigo-50">
                        <ArrowRight size={22} />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-24 bg-white rounded-[3rem] border border-dashed border-gray-200">
            <p className="text-gray-400 font-bold text-xl">
              No encontramos cursos con esos criterios.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
