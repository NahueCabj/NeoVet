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
    title: "Porque cada día cuenta cuando se trata de quien más querés",
    subtitle: "Ofrecemos tratamientos oncológicos personalizados para cuidar la salud y bienestar de tu mascota.  ",
    ctaText: "Solicitar consulta",
    ctaHref: "https://wa.me/098540739",
    image: "https://images.pexels.com/photos/7469229/pexels-photo-7469229.jpeg"
  },
  services: [
    { id: "diag", title: "Consulta de especialidad en oncología.", desc: "Evaluamos a tu mascota con cuidado y precisión, para ofrecer un diagnóstico y tratamiento temprano y confiable.", icon: "/images/diagnostico.png" },
    { id: "cit", title: "Citologías.", desc: "Toma de muestras y lectura citológica para obtener diagnósticos confiables. ", icon:"/images/citologias.png" },
    { id: "ciru", title: "Cirugía oncológica especializada.", desc: "Intervenciones quirúrgicas planificadas y ejecutadas con precisión para la extirpación de tumores y manejo del riesgo quirúrgico.", icon:"/images/cirugia.png" },
    { id: "trat", title: "Tratamientos.", desc: "Planificación terapéutica personalizada para cada mascota. ", icon: "/images/tratamientos.png" },
    { id: "segui", title: "Seguimiento y Control", desc: "Monitoreo clínico y laboratoriales sistemáticos para optimizar la eficacia del tratamiento y la evolución del paciente.", icon: "/images/seguimiento.png" },
  ],
  team: [
    
  ],
  testimonials: [
    { name: "Nahuel Acosta", text: "Excelente atención y cuidado de nuestros compañeros." }
  ],
  contact: {
    phone: "098 540 739",
    email: "neovet.oncologia@gmail.com",
    formEndpoint: "https://wa.me/098540739"
  },
  footer: {
    social: { instagram: "neovet", facebook: "neovet" },
    copyright: "NeoVet © 2025"
  }
};

export default siteContent;
