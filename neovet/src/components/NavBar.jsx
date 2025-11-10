import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo3.png";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const shouldBeScrolled = scrollY > 20;
      setIsScrolled(shouldBeScrolled);
    };

    // Ejecutar inmediatamente
    handleScroll();
    
    // Listener simple
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const links = [
    { name: "Inicio", href: "#home" },
    { name: "Servicios", href: "#services" },
    { name: "Equipo", href: "#team" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-brand-violet shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="NeoVet Logo" className="h-20 w-auto" />
        </div>

        {/* Menú Desktop */}
        <ul className="hidden md:flex gap-6 font-medium text-white">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="hover:text-brand-green transition-colors"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Botón CTA Desktop */}
        <a
          href="https://wa.me/098540739"
          className="hidden md:inline-block text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#C8D9F3] hover:text-[#134053] transition-all duration-300"
          style={{ backgroundColor: '#51B4A2' }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Agendar consulta
        </a>

        {/* Botón Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white z-50"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
{/* Sidebar Mobile */}
<div
  className={`fixed top-0 right-0 h-full w-full bg-brand-violet text-white transform transition-transform duration-300 z-40 ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  <div className="flex flex-col justify-center items-center h-full text-2xl relative">
    {/* 🔹 Logo grande arriba */}
    <div className="absolute top-10 flex justify-center w-full">
      <img
        src="/images/sello_blanco.png"
        alt="NeoVet Logo"
        className="h-36 w-auto object-contain"
      />
    </div>

    {/* 🔹 Menú con más margen superior */}
    <div className="mt-64 flex flex-col items-center space-y-8">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          className="hover:text-brand-green transition-colors"
          onClick={() => setIsOpen(false)}
        >
          {link.name}
        </a>
      ))}

      <a
        href="#contact"
        className="block text-white px-6 py-3 rounded-lg font-semibold mt-4 hover:bg-[#C8D9F3] hover:text-[#134053] transition-all duration-300"
        style={{ backgroundColor: "#06F1A2" }}
        onClick={() => setIsOpen(false)}
      >
        Agendar consulta
      </a>
    </div>
  </div>
</div>

    </nav>
  );
}
