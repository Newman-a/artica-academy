"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CourseCard from "@/components/CourseCard";
import Footer from "@/components/Footer";
import TrustedBy from "@/components/TrustedBy";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F4F4F7]">
      <Navbar />

      {/* Sección Hero con animaciones de entrada */}
      <Hero />

      {/* Bento Grid: Beneficios y Pasantías */}
      <Features />

      {/* Sección de Marcas Confiables */}
      <TrustedBy /> {/* <--- Agrégalo aquí */}

      {/* Sección de Cursos Destacados */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] tracking-tight">
              Próximos Cursos
            </h2>
            <p className="text-gray-400 font-medium mt-2">
              Potencia tus habilidades con formación real y técnica.
            </p>
          </div>
          <button className="bg-white border border-gray-200 px-6 py-3 rounded-full font-bold text-sm hover:bg-gray-50 transition-colors shadow-sm">
            Explorar Catálogo
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CourseCard
            title="Edición de Video High-Impact"
            category="Producción"
            price={45}
            icon="🎬"
          />
          <CourseCard
            title="Estrategias de Digital Trafficker"
            category="Marketing"
            price={60}
            icon="📈"
          />
          <CourseCard
            title="Next.js 15 & Prisma Mastery"
            category="Desarrollo"
            price={55}
            icon="💻"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
}
