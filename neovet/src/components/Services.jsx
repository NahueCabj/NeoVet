
// Services.jsx
import siteContent from "../data/siteContent";

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white min-h-screen text-center pt-32">
      <h2 className="text-4xl font-bold mb-12">Servicios</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {siteContent.services.map((service) => (
          <div key={service.id} className="w-72 p-6 border rounded-lg shadow-md transition-transform duration-300 hover:scale-105">
            <img src={service.icon} alt={service.title} className="mx-auto mb-4 h-16" />
            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
