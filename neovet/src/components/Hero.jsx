import siteContent from "../data/siteContent";

export default function Hero() {
  return (
    <section
      id="home"
      className="mt-20 relative w-full min-h-screen flex items-center justify-center bg-black"
      style={{
        backgroundImage: `url(${siteContent.hero.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Contenido */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          {siteContent.hero.title}
        </h1>
        <p className="text-xl md:text-2xl mb-10 leading-relaxed max-w-3xl mx-auto">
          {siteContent.hero.subtitle}
        </p>
        <a
          href={siteContent.hero.ctaHref}
          className="inline-block bg-teal-700 hover:bg-teal-600 text-white font-bold text-lg px-10 py-4 rounded-lg transition-all duration-300 shadow-xl hover:scale-105"
        >
          {siteContent.hero.ctaText}
        </a>
      </div>
    </section>
  );
}
