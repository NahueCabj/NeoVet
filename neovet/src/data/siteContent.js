const siteContent = {
  brand: {
    name: "NeoVet",
    logo: "/assets/logo.svg",
    tagline: "Veterinaria Oncológica",
    colors: { primary: "#0f766e", accent: "#7c3aed" },
    address: "Av. Ejemplo 123, Ciudad"
  },
  nav: {
    links: [
      { label: "Inicio", href: "#home" },
      { label: "Servicios", href: "#services" },
      { label: "Equipo", href: "#team" },
      { label: "Contacto", href: "#contact" }
    ]
  },
  hero: {
    title: "Cuidamos a tu compañero en cada paso",
    subtitle: "NeoVet - Especialistas en oncología veterinaria: diagnóstico, tratamiento y apoyo integral.",
    ctaText: "Solicitar consulta",
    ctaHref: "#contact",
    image: "https://images.pexels.com/photos/7469229/pexels-photo-7469229.jpeg"
  },
  services: [
    { id: "diag", title: "Diagnóstico", desc: "Imágenes, tumores y biopsias.", icon: "./src/assets/diagnostico.png" },
    { id: "trat", title: "Tratamientos", desc: "Quimioterapia, soporte paliativo.", icon:"./src/assets/tratamientos.png" }
  ],
  team: [
    { name: "Dr. Federico Garcia", role: "Oncología", photo: "/assets/team/ana.jpg", bio: "Especialista en oncología veterinaria." }
  ],
  testimonials: [
    { name: "Nahuel Acosta", text: "Excelente atención y cuidado de nuestros compañeros." }
  ],
  contact: {
    phone: "+598 9XX XXX XXX",
    email: "contacto@neovet.com",
    formEndpoint: "" // URL de Formspree o Netlify Forms
  },
  footer: {
    social: { instagram: "neovet", facebook: "neovet" },
    copyright: "NeoVet © 2025"
  }
};

export default siteContent;
