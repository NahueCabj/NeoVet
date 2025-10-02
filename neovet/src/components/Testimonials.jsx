// Testimonials.jsx
import siteContent from "../data/siteContent";

export default function Testimonials() {
  return (
    <section className="min-h-screen py-20 bg-white text-center">
      <h2 className="text-4xl font-bold mb-12">Testimonios</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {siteContent.testimonials.map((t, i) => (
          <div key={i} className="w-80 p-6 border rounded-lg shadow-md">
            <p className="italic mb-4">"{t.text}"</p>
            <p className="font-semibold">— {t.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
