
import siteContent from "../data/siteContent";

export default function Team() {
  return (
    <section
      id="team"
      className="min-h-auto py-20 bg-gray-50 pt-32 flex flex-col items-center">
      

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-16">
        {/* Texto */}
        <div className="md:w-1/2 text-left">
        <h2 className="text-4xl font-bold mb-12 text-center">Nosotros</h2>
          <h3 className="text-2xl font-bold mb-6">
            No es solo un paciente. Es parte de tu familia
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Contamos con un equipo especializado en oncología veterinaria,
            preparados para proporcionar atención integral en pacientes
            oncológicos. Nuestro objetivo es ofrecer diagnósticos precisos y
            tratamientos personalizados, basados en evidencia y protocolos
            actualizados, asegurando un manejo eficiente del cáncer en mascotas.
            Acompañamos a cada paciente durante todas las etapas del tratamiento,
            optimizando la eficacia terapéutica y la seguridad clínica.
          </p>
        </div>

        {/* Imagen */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/team-image.avif"
            alt="Imagen de perro"
            className="w-full max-w-md rounded-2xl shadow-lg object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
