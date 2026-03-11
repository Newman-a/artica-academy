export default function Footer() {
  return (
    <footer className="border-t border-gray-200 pt-20 pb-12 px-6 md:px-10 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Sección del Logo */}
        <div className="flex items-center gap-3">
          <img
            src="https://www.articagroup.us/img/logo-artica-blanco.png"
            alt="Artica Group Logo"
            /* brightness-0 convierte el logo blanco en negro total.
               Si prefieres que sea azul oscuro como el texto, 
               puedes usar "invert" o "hue-rotate".
            */
            className="h-9 w-auto object-contain brightness-0"
          />
          {/* <span className="font-bold text-[#1A1A2E] tracking-tight text-lg">
            Artica Group Academy
          </span> */}
        </div>

        <p className="text-sm text-gray-400 font-medium">
          © {new Date().getFullYear()} 4101 Media & Artica Group. Coro,
          Venezuela.
        </p>

        <div className="flex gap-8">
          {["Instagram", "LinkedIn", "YouTube"].map((social) => (
            <a
              key={social}
              href="#"
              className="text-sm font-semibold text-gray-400 hover:text-[#5A4FCF] transition-colors uppercase tracking-widest"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
