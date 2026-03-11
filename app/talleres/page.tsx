"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  MapPin,
  Users,
  ArrowRight,
  Sparkles,
  Clock,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const TALLERES = [
  {
    id: "taller-fotografia-iphone",
    title: "Fotografía Pro con iPhone",
    instructor: "Michelle Guerra",
    date: "15 de Abril, 2026",
    time: "09:00 AM - 04:00 PM",
    location: "Sede 4101 Media, Coro",
    price: 25,
    slots: 12,
    category: "Creatividad",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800",
  },
  {
    id: "taller-ads-locales",
    title: "Ads para Negocios en Coro",
    instructor: "Newman Acosta",
    date: "22 de Abril, 2026",
    time: "02:00 PM - 06:00 PM",
    location: "Online (En Vivo)",
    price: 30,
    slots: 20,
    category: "Marketing",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800",
  },
  {
    id: "taller-video-reels",
    title: "Creación de Reels Virales",
    instructor: "Rodrigo Timaure",
    date: "05 de Mayo, 2026",
    time: "09:00 AM - 01:00 PM",
    location: "Sede 4101 Media, Coro",
    price: 20,
    slots: 10,
    category: "Producción",
    image:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=800",
  },
];

export default function TalleresPage() {
  return (
    <main className="min-h-screen bg-[#F4F4F7] pt-32 pb-20">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6">
        {/* --- CABECERA --- */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 text-[#5A4FCF] font-bold text-sm uppercase tracking-[0.3em] mb-4"
          >
            <Calendar size={16} /> Experiencias en Vivo
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-black text-[#1A1A2E] tracking-tighter mb-6 leading-none">
            Talleres <br />{" "}
            <span className="text-gray-300 italic">Intensivos.</span>
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            Aprende haciendo. Sesiones prácticas de un solo día para dominar
            habilidades específicas con el equipo de Artica.
          </p>
        </div>

        {/* --- GRID DE TALLERES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <AnimatePresence>
            {TALLERES.map((taller, index) => (
              <motion.div
                key={taller.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-[3rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-indigo-100 transition-all flex flex-col md:flex-row h-full"
              >
                {/* Imagen del Taller */}
                <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <Image
                    src={taller.image}
                    alt={taller.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-6 left-6">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl text-[10px] font-black uppercase tracking-widest text-[#1A1A2E] shadow-sm">
                      {taller.category}
                    </span>
                  </div>
                </div>

                {/* Info del Taller */}
                <div className="p-10 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2 text-[#5A4FCF] font-bold text-[10px] uppercase tracking-widest">
                      <Clock size={12} /> {taller.date}
                    </div>
                    <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                      {taller.slots} cupos
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-[#1A1A2E] mb-4 group-hover:text-[#5A4FCF] transition-colors">
                    {taller.title}
                  </h3>

                  <div className="space-y-3 mb-8">
                    <div className="flex items-center gap-3 text-gray-400 text-sm font-medium">
                      <MapPin size={16} className="text-gray-300" />{" "}
                      {taller.location}
                    </div>
                    <div className="flex items-center gap-3 text-gray-400 text-sm font-medium">
                      <Users size={16} className="text-gray-300" /> Mentor:{" "}
                      {taller.instructor}
                    </div>
                  </div>

                  <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1">
                        Inversión
                      </p>
                      <span className="text-3xl font-black text-[#1A1A2E]">
                        ${taller.price}
                      </span>
                    </div>

                    <Link href={`/talleres/${taller.id}`}>
                      <button className="bg-[#1A1A2E] text-white p-5 rounded-2xl hover:bg-[#5A4FCF] hover:scale-110 transition-all shadow-xl shadow-indigo-50">
                        <ArrowRight size={24} />
                      </button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- NEWSLETTER / CTA --- */}
        <section className="mt-32 bg-[#1A1A2E] rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              ¿Quieres un taller privado?
            </h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto">
              Ofrecemos capacitaciones personalizadas para empresas y equipos en
              Falcón. Potencia a tu personal con Artica Group.
            </p>
            <button className="bg-[#5A4FCF] text-white px-10 py-5 rounded-full font-bold hover:bg-white hover:text-[#1A1A2E] transition-all">
              Contactar con Ventas
            </button>
          </div>
          <div className="absolute top-[-20%] right-[-10%] w-96 h-96 bg-[#5A4FCF]/20 blur-[120px] rounded-full" />
        </section>
      </div>

      <Footer />
    </main>
  );
}
