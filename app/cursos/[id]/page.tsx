"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  PlayCircle,
  Clock,
  Globe,
  ChevronDown,
  ArrowRight,
  Zap,
  ChevronRight,
  HelpCircle,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import CheckoutModal from "@/components/CheckoutModal";

// Mock de datos del curso
const COURSE_DETAIL = {
  id: "edicion-video-pro",
  category: "Producción",
  title: "Edición de Video High-Impact",
  description:
    "Domina Premiere Pro y After Effects para crear contenido que retenga la atención y venda más. De cero a nivel profesional.",
  price: 45,
  instructor: "Rodrigo Timaure",
  duration: "12 horas",
  lessons: 24,
  level: "Intermedio",
  curriculum: [
    {
      title: "Módulo 1: Fundamentos del Storytelling",
      topics: [
        "Psicología del corte",
        "Ritmo y narrativa",
        "Manejo de archivos",
      ],
    },
    {
      title: "Módulo 2: Edición Avanzada",
      topics: ["Color Grading pro", "Diseño sonoro", "Uso de capas de ajuste"],
    },
    {
      title: "Módulo 3: Motion Graphics",
      topics: ["Keyframes", "Títulos dinámicos", "Exportación para RRSS"],
    },
  ],
};

const FAQS = [
  {
    q: "¿Cómo recibo el acceso?",
    a: "Una vez verificado tu pago (Zelle, USDT o BCV), recibirás un correo automático con tus credenciales para acceder a la plataforma de alumnos.",
  },
  {
    q: "¿Puedo pagar en Bolívares?",
    a: "Sí. Al darle a inscribirte, selecciona Pago Móvil. El sistema calcula automáticamente el monto a tasa BCV del día.",
  },
  {
    q: "¿Hay soporte técnico?",
    a: "Totalmente. Tendrás acceso a un grupo exclusivo de Discord donde el equipo de Artica y 4101 responde dudas en tiempo real.",
  },
];

export default function CourseDetailPage() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F4F4F7] pt-28 pb-20">
      <Navbar />

      <div className="max-w-7xl mx-auto px-6">
        {/* --- BREADCRUMBS --- */}
        <nav className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-8">
          <Link
            href="/cursos"
            className="hover:text-[#5A4FCF] transition-colors"
          >
            Cursos
          </Link>
          <ChevronRight size={12} />
          <span className="text-gray-300">{COURSE_DETAIL.category}</span>
          <ChevronRight size={12} />
          <span className="text-[#1A1A2E]">{COURSE_DETAIL.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* --- COLUMNA IZQUIERDA (CONTENIDO) --- */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="bg-indigo-100 text-[#5A4FCF] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 inline-block">
                {COURSE_DETAIL.category}
              </span>
              <h1 className="text-4xl md:text-7xl font-black text-[#1A1A2E] mb-6 leading-[0.9] tracking-tighter">
                {COURSE_DETAIL.title}
              </h1>
              <p className="text-xl text-gray-500 mb-10 leading-relaxed max-w-2xl">
                {COURSE_DETAIL.description}
              </p>

              {/* Stats Rápidas */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                <div className="bg-white p-6 rounded-[2rem] border border-gray-100 text-center shadow-sm">
                  <Clock className="mx-auto mb-2 text-gray-300" size={20} />
                  <span className="block text-sm font-bold text-[#1A1A2E]">
                    {COURSE_DETAIL.duration}
                  </span>
                </div>
                <div className="bg-white p-6 rounded-[2rem] border border-gray-100 text-center shadow-sm">
                  <PlayCircle
                    className="mx-auto mb-2 text-gray-300"
                    size={20}
                  />
                  <span className="block text-sm font-bold text-[#1A1A2E]">
                    {COURSE_DETAIL.lessons} clases
                  </span>
                </div>
                <div className="bg-white p-6 rounded-[2rem] border border-gray-100 text-center shadow-sm">
                  <Globe className="mx-auto mb-2 text-gray-300" size={20} />
                  <span className="block text-sm font-bold text-[#1A1A2E]">
                    Español
                  </span>
                </div>
                <div className="bg-white p-6 rounded-[2rem] border border-gray-100 text-center shadow-sm">
                  <Zap className="mx-auto mb-2 text-gray-300" size={20} />
                  <span className="block text-sm font-bold text-[#1A1A2E]">
                    {COURSE_DETAIL.level}
                  </span>
                </div>
              </div>

              {/* Temario (Curriculum) */}
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                Contenido del curso{" "}
                <span className="text-xs bg-gray-200 px-3 py-1 rounded-full text-gray-500">
                  2026 Update
                </span>
              </h2>
              <div className="space-y-4 mb-20">
                {COURSE_DETAIL.curriculum.map((module, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-[2.5rem] border border-gray-100 overflow-hidden group"
                  >
                    <button className="w-full p-8 flex justify-between items-center hover:bg-gray-50 transition-colors">
                      <div className="text-left">
                        <span className="text-[10px] font-black text-[#5A4FCF] uppercase tracking-widest block mb-1">
                          Módulo 0{idx + 1}
                        </span>
                        <span className="text-xl font-bold text-[#1A1A2E] group-hover:text-[#5A4FCF] transition-colors">
                          {module.title}
                        </span>
                      </div>
                      <ChevronDown className="text-gray-300" />
                    </button>
                    <div className="px-8 pb-8 space-y-4">
                      {module.topics.map((topic, tidx) => (
                        <div
                          key={tidx}
                          className="flex items-center gap-4 text-gray-500 text-sm font-medium"
                        >
                          <div className="w-2 h-2 rounded-full bg-indigo-100" />{" "}
                          {topic}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* --- FAQ SECTION --- */}
              <div className="bg-indigo-50/50 rounded-[3rem] p-10 md:p-14 border border-indigo-100/50 mb-10">
                <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
                  <HelpCircle className="text-[#5A4FCF]" /> Preguntas Frecuentes
                </h3>
                <div className="space-y-8">
                  {FAQS.map((faq, index) => (
                    <div key={index} className="space-y-2">
                      <h4 className="font-bold text-[#1A1A2E]">{faq.q}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* --- COLUMNA DERECHA (STICKY CTA) --- */}
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-6">
              <div className="bg-white rounded-[3rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-white relative overflow-hidden">
                <div className="relative z-10">
                  <div className="mb-8 rounded-[2rem] overflow-hidden relative h-56 bg-gray-100 shadow-inner group">
                    <Image
                      src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800"
                      fill
                      alt="Preview"
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#1A1A2E] shadow-2xl">
                        <PlayCircle fill="currentColor" size={32} />
                      </div>
                    </div>
                  </div>

                  <div className="flex items-end gap-2 mb-8">
                    <span className="text-6xl font-black text-[#1A1A2E] tracking-tighter">
                      ${COURSE_DETAIL.price}
                    </span>
                    <span className="text-gray-400 font-bold mb-3 uppercase text-[10px] tracking-widest">
                      Pago único
                    </span>
                  </div>

                  {/* BOTÓN QUE ABRE EL MODAL */}
                  <button
                    onClick={() => setIsCheckoutOpen(true)}
                    className="w-full bg-[#1A1A2E] text-white py-6 rounded-[1.5rem] font-bold flex items-center justify-center gap-3 hover:bg-[#5A4FCF] transition-all shadow-xl shadow-indigo-100 mb-8 uppercase tracking-widest text-xs"
                  >
                    Inscribirme ahora <ArrowRight size={18} />
                  </button>

                  <div className="space-y-5 pt-8 border-t border-gray-50">
                    <p className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] text-center">
                      Métodos de Pago Soportados
                    </p>
                    <div className="flex justify-center gap-3">
                      {["Zelle", "USDT", "BCV"].map((m) => (
                        <span
                          key={m}
                          className="text-[10px] font-bold border border-gray-100 px-4 py-2 rounded-xl text-gray-400"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card de Instructor */}
              <div className="bg-[#1A1A2E] rounded-[2.5rem] p-8 text-white flex items-center gap-5 border border-white/5">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex-shrink-0 flex items-center justify-center font-bold text-2xl shadow-lg">
                  RT
                </div>
                <div>
                  <p className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-1">
                    Mentor Senior
                  </p>
                  <p className="text-xl font-bold tracking-tight">
                    {COURSE_DETAIL.instructor}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- EL MODAL DE CHECKOUT --- */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        price={COURSE_DETAIL.price}
      />

      <Footer />
    </main>
  );
}
