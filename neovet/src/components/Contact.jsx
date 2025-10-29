// Contact.jsx
import siteContent from "../data/siteContent";

export default function Contact() {
  return (
    <section id="contact" className="min-h-screen py-20 bg-gray-50 text-center pt-32">
      <h2 className="text-4xl font-bold mb-12">Contacto</h2>
      <p className="mb-4">Teléfono: {siteContent.contact.phone}</p>
      <p className="mb-6">Email: {siteContent.contact.email}</p>
      <a
        href={siteContent.contact.formEndpoint}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-teal-700 hover:bg-teal-600 text-white font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 shadow-xl hover:scale-105"
      >
        Enviar mensaje
      </a>
    </section>
  );
}
