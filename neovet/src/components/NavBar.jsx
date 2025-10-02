import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo1.png";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Inicio", href: "#home" },
    { name: "Servicios", href: "#services" },
    { name: "Equipo", href: "#team" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-brand-violet shadow-md">
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
          href="#contact"
          className="hidden md:inline-block bg-brand-green text-white px-5 py-2 rounded-lg font-semibold hover:bg-brand-lightblue transition-colors"
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
        <div className="flex flex-col justify-center items-center h-full space-y-8 text-2xl">
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
            className="block bg-brand-green text-white px-6 py-3 rounded-lg font-semibold mt-4"
            onClick={() => setIsOpen(false)}
          >
            Agendar consulta
          </a>
        </div>
      </div>
    </nav>
  );
}
